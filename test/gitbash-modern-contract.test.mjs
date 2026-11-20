import test from 'node:test'
import assert from 'node:assert/strict'
import { apply } from '../presets/ptc-minimal/gitbash-executor.mjs'

function fixture(options={}) {
  let shell, cleanup, captured, finish, fail, terminated=0
  const output = text => ({readFrom(offset=0){return{text:text.slice(offset),nextOffset:text.length,lossy:false}}})
  const ctx={get(name){
    if(name==='subprocess')return{spawn(spec){captured=spec;return{done:new Promise((resolve,reject)=>{finish=resolve;fail=reject}),collected:{stdout:output('owned stdout'),stderr:output('')},terminate(){terminated++;finish({exitCode:null,signal:'SIGTERM'})}}}}
    if(name==='sandboxPolicy')return{defaultMode:'danger-full-access',resolve:()=>({mode:'danger-full-access'})}
  },effect(fn){cleanup=fn()},provide(_name,value){shell=value}}
  apply(ctx,{shellPath:process.execPath,timeoutMs:30,maxTimeoutMs:200,...options})
  return{get shell(){return shell},get captured(){return captured},get terminated(){return terminated},finish:value=>finish(value),fail:error=>fail(error),cleanup:()=>cleanup()}
}

test('modern execute publishes one observable handle and memoizes its foreground projection',async()=>{
 const f=fixture(),spec=f.shell.resolve({command:'fixture',stdoutMaxBytes:7,onExpiry:'none'})
 assert.equal(spec.onExpiry,'none')
 const proc=await f.shell.execute(spec)
 assert.equal(proc.status,'running');assert.equal(f.captured.stdio.stdout.maxBytes,7)
 assert.equal(proc.readOutput().delta,'owned stdout');assert.equal(proc.readOutput().delta,'')
 assert.equal(proc.observed.stdout.readFrom(0).text,'owned stdout')
 await new Promise(resolve=>setTimeout(resolve,50));assert.equal(f.captured.signal.aborted,false)
 f.finish({exitCode:3,signal:null});await proc.done
 assert.equal(proc.status,'completed');assert.equal(proc.exitCode,3)
 const result=proc.result();assert.equal(proc.result(),result)
 assert.deepEqual((await result).stdout,{text:'owned stdout',truncated:false})
 assert.equal((await result).timedOut,false);assert.equal((await result).aborted,false)
})

test('modern execution distinguishes caller cancellation from a later elapsed timeout',async()=>{
 const f=fixture(),controller=new AbortController(),reason=new Error('caller owns cancellation')
 const proc=await f.shell.execute(f.shell.resolve({command:'fixture',signal:controller.signal,timeoutMs:20}))
 controller.abort(reason)
 await new Promise(resolve=>setTimeout(resolve,40));f.finish({exitCode:null,signal:'SIGTERM'})
 const result=await proc.result();assert.equal(result.aborted,true);assert.equal(result.timedOut,false)
 assert.equal(f.captured.signal.reason,reason)
})

test('modern execution reports timeout kills separately and never starts pre-aborted requests',async()=>{
 const f=fixture(),proc=await f.shell.execute(f.shell.resolve({command:'fixture',timeoutMs:10}))
 await new Promise(resolve=>setTimeout(resolve,25));f.finish({exitCode:null,signal:'SIGTERM'})
 const result=await proc.result();assert.equal(result.timedOut,true);assert.equal(result.aborted,false)
 const reason=new Error('cancel before spawn')
 await assert.rejects(f.shell.execute(f.shell.resolve({command:'fixture',signal:AbortSignal.abort(reason)})),error=>error===reason)
})

test('modern failed spawns settle done and expose diagnostics without an unhandled result rejection',async()=>{
 const f=fixture(),proc=await f.shell.execute(f.shell.resolve({command:'fixture'}))
 f.fail(new Error('synthetic spawn failure'));await proc.done
 assert.equal(proc.status,'killed');assert.match(proc.readOutput().delta,/synthetic spawn failure/)
 assert.match(proc.observed.stderr.readFrom(0).text,/synthetic spawn failure/)
 await assert.rejects(proc.result(),/synthetic spawn failure/)
})

test('modern handles remain owned until unload has stopped and drained them',async()=>{
 const f=fixture(),proc=await f.shell.execute(f.shell.resolve({command:'fixture',onExpiry:'none'}))
 await f.cleanup();await proc.done
 assert.equal(f.terminated,1);assert.equal(proc.status,'killed');assert.equal((await proc.result()).aborted,true)
 await assert.rejects(f.shell.execute(f.shell.resolve({command:'fixture'})),/disposed|unload/i)
})
