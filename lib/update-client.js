// Generated: shared optional update controls; edit the original client templates.
(function(){
/* DSH workbench UI v1. MIT. Canonical source: dsh-suite/ui/workbench-ui.js.
 * Vendored into each plugin: no Suite or extra runtime dependency is required.
 * Styles are scoped to .dshw and never replace the host chrome or theme.
 */
function createWorkbenchUI(React) {
  const h = React.createElement;
  const { useEffect, useId, useRef } = React;
  const cx = (...values) => values.filter(Boolean).join(' ');
  const paths = {
    book: ['M4 4h6a3 3 0 0 1 2 2v15a4 4 0 0 0-4-2H4z', 'M20 4h-6a3 3 0 0 0-2 2v15a4 4 0 0 1 4-2h4z'],
    calendar: ['M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2Z', 'M7 3v4M17 3v4M3 10h18'],
    mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
    rss: ['M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16', 'M4 19h.01'],
    slides: ['M3 4h18v13H3z', 'M12 17v4M8 21h8'],
    shield: ['m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6z', 'm8 12 3 3 5-6'],
    layers: ['M5 3h16v16H5z', 'M2 7v15h15'],
    play: ['m9 6 9 6-9 6Z'],
    video: ['M3 5h12v14H3z', 'm15 10 6-4v12l-6-4'],
    search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'm16 16 5 5'],
    plus: ['M12 5v14M5 12h14'],
    refresh: ['M20 7a9 9 0 1 0 1 8', 'M20 2v5h-5'],
    settings: ['m9 3-.7 2.4-2 .9L4 5.8 2.5 8.4l1.7 1.8v2.3L2.5 14 4 17l2.5-.4 1.9 1L9 20h3l.8-2.4 2-1 2.5.4 1.5-2.7-1.7-1.9v-2.2l1.7-1.8-1.5-2.6-2.5.4-2-1L12 3Z', 'M14 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'],
    close: ['m6 6 12 12M18 6 6 18'],
    left: ['m14 5-7 7 7 7'],
    right: ['m10 5 7 7-7 7'],
    down: ['m5 9 7 7 7-7'],
    filter: ['M4 5h16M7 12h10M10 19h4'],
    download: ['M12 3v12m-5-5 5 5 5-5', 'M4 16v5h16v-5'],
    upload: ['M12 16V4m-5 5 5-5 5 5', 'M4 16v5h16v-5'],
    copy: ['M8 8h13v13H8z', 'M16 8V3H3v13h5'],
    external: ['M14 3h7v7m0-7L10 14', 'M10 3H3v18h18v-7'],
    file: ['M4 3h10l6 6v12H4z', 'M14 3v6h6M8 13h8M8 17h6'],
    folder: ['M3 5h7l2 3h9v12H3z'],
    edit: ['m15 4 5 5-10 10-6 1 1-6Z', 'm13 6 5 5'],
    trash: ['M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7'],
    more: ['M5 12h.01M12 12h.01M19 12h.01'],
    info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 11v6M12 7h.01'],
    check: ['m5 12 4 4L19 6'],
    quote: ['M4 12h6v7H3v-7c0-4 2-6 5-7M15 12h6v7h-7v-7c0-4 2-6 5-7'],
    star: ['m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z'],
    reply: ['m9 5-7 7 7 7v-5h6c3 0 5 2 6 5 0-8-4-11-12-11Z'],
    link: ['m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0', 'm14 8 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0'],
  };
  function Icon({ name = 'file', size = 20, ...props }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false, ...props },
      (paths[name] || paths.file).map((d, index) => h('path', { key: index, d })));
  }
  function Button({ children, icon, variant, className, ...props }) {
    return h('button', { type: 'button', ...props, className: cx('w-button', variant && 'w-' + variant, className) }, icon ? h(Icon, { name: icon, size: 18 }) : null, children);
  }
  function IconButton({ label, icon, ...props }) {
    return h(Button, { ...props, icon, className: cx('w-icon-button', props.className), 'aria-label': label, title: label });
  }
  function Page({ title, subtitle, actions, children, workbench = false, className, rootRef, ...props }) {
    return h('section', { ...props, ref: rootRef, className: cx('dshw', 'w-page', className), 'data-main': workbench ? 'true' : 'false' },
      h(Styles, { key: 'styles' }),
      h('header', { className: 'w-page-header' }, h('div', { className: 'w-heading' }, h('h1', null, title), subtitle ? h('p', { className: 'w-subtitle' }, subtitle) : null), actions ? h('div', { className: 'w-header-actions' }, actions) : null),
      h('div', { className: 'w-body' }, children));
  }
  function Tabs({ items, value, onChange, label, children }) {
    const id = useId();
    const active = items.some(item => item.id === value) ? value : items[0]?.id;
    function keys(event, index) {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
      const node = event.currentTarget.parentElement?.querySelectorAll('[role=tab]')[next];
      if (node) { onChange(items[next].id); node.focus(); }
    }
    return h('div', { className: 'w-tabs-layout' },
      h('div', { className: 'w-tabs', role: 'tablist', 'aria-label': label }, items.map((item, index) => h('button', {
        type: 'button', role: 'tab', key: item.id, id: id + '-' + item.id, 'aria-controls': id + '-panel', 'aria-selected': active === item.id, tabIndex: active === item.id ? 0 : -1,
        onClick: () => onChange(item.id), onKeyDown: event => keys(event, index),
      }, item.label, item.count !== undefined ? h('span', { className: 'w-count' }, item.count) : null))),
      h('div', { className: 'w-tab-panel', id: id + '-panel', role: 'tabpanel', 'aria-labelledby': id + '-' + active }, children));
  }
  function Status({ children, tone = 'info', className }) {
    if (!children) return null;
    return h('div', { className: cx('dshw', 'w-status', 'w-status-' + tone, className), role: tone === 'error' ? 'alert' : 'status', 'aria-live': tone === 'error' ? 'assertive' : 'polite' }, h(Icon, { name: tone === 'success' ? 'check' : 'info', size: 18 }), h('div', null, children));
  }
  function Empty({ title, children, action, icon = 'file' }) {
    return h('div', { className: 'dshw w-empty' }, h(Styles, { key: 'styles' }), h(Icon, { name: icon, size: 32 }), h('h2', null, title), children ? h('div', { className: 'w-muted' }, children) : null, action ? h('div', { className: 'w-toolbar' }, action) : null);
  }
  function Split({ list, detail, selected, onBack, backLabel, className, listWidth = 360 }) {
    const ref = useRef(null);
    useEffect(() => {
      if (!selected || !ref.current || ref.current.clientWidth > 760) return;
      const heading = ref.current.querySelector('.w-detail h2');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    }, [selected]);
    return h('div', { ref, className: cx('w-split', className), 'data-selected': selected ? 'true' : 'false', style: { '--w-list-width': listWidth + 'px' } },
      h('div', { className: 'w-master' }, list),
      h('div', { className: 'w-detail' }, selected ? h(Button, { className: 'w-back', icon: 'left', variant: 'ghost', onClick: onBack }, backLabel) : null, detail));
  }
  function Row({ title, meta, description, active, onClick, children, status, className, disabled }) {
    return h('div', { className: cx('w-row', active && 'w-selected', className) },
      children ? h('div', { className: 'w-row-select' }, children) : null,
      h('button', { type: 'button', className: 'w-row-button', onClick, disabled, 'aria-pressed': !!active },
        h('span', { className: 'w-row-head' }, h('strong', null, title), status ? h('span', { className: 'w-tag' }, status) : null),
        meta ? h('span', { className: 'w-row-meta' }, meta) : null,
        description ? h('span', { className: 'w-row-description' }, description) : null));
  }
  function Search({ label, value, onChange, ...props }) {
    const id = useId();
    return h('div', { className: 'w-search' }, h(Icon, { name: 'search', size: 18 }), h('input', { type: 'search', id, 'aria-label': label, placeholder: label, value, onChange, ...props }));
  }
  function Switch({ label, checked, onChange, disabled }) {
    return h('label', { className: 'w-switch-label' }, h('span', null, label), h('input', { type: 'checkbox', role: 'switch', checked, disabled, onChange, 'aria-label': label }), h('span', { className: 'w-switch-track', 'aria-hidden': true }));
  }
  function Dialog({ title, children, onClose, closeLabel, className, busy = false }) {
    const id = useId(), panel = useRef(null);
    useEffect(() => {
      const previous = document.activeElement;
      panel.current?.querySelector('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')?.focus();
      return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
    }, []);
    function keydown(event) {
      if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); event.stopPropagation(); if (!busy) onClose(); return; }
      if (event.key !== 'Tab') return;
      const controls = [...panel.current.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]')].filter(node => node.getClientRects().length);
      const first = controls[0], last = controls.at(-1);
      if (!controls.length) { event.preventDefault(); panel.current.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return h('div', { className: 'dshw w-overlay', onClick: event => { if (!busy && event.target === event.currentTarget) onClose(); } },
      h(Styles, { key: 'styles' }),
      h('section', { ref: panel, className: cx('w-dialog', className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': id, tabIndex: -1, onKeyDown: keydown },
        h('header', { className: 'w-dialog-header' }, h('h2', { id }, title), h(IconButton, { icon: 'close', label: closeLabel, disabled: busy, onClick: onClose })), h('div', { className: 'w-dialog-body' }, children)));
  }
  function register(ctx, { id, label, icon, component, inject, order = 50 }) {
    // The two slots are optional. Existing settings and manual tools still load
    // in hosts without a workbench, while RC.3 owns navigation/pinning itself.
    ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: id, inject: () => ({ ...(inject?.() || {}), workbench: true }) }, component));
    ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id, order, label }, function WorkbenchIcon({ size }) { return h(Icon, { name: icon, size }); }));
  }
  const styles = `
.dshw{--w-bg:var(--dsw-alias-bg-layer-1,#fff);--w-soft:var(--dsw-alias-bg-layer-2,#f7f8fa);--w-text:var(--dsw-alias-label-primary,#18202c);--w-muted:var(--dsw-alias-label-secondary,#667085);--w-border:var(--dsw-alias-border-l3,#e7e9ef);--w-accent:var(--dsh-plugin-workbench-accent,#4f6bdb);--w-selected:color-mix(in srgb,var(--w-accent) 10%,var(--w-bg));--w-primary:var(--w-text);--w-on-primary:var(--w-bg);container-type:inline-size;container-name:dsh-workbench;color:var(--w-text);font:14px/1.65 var(--dsh-font-family-content,system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif);min-width:0;max-width:100%;box-sizing:border-box;text-align:start;color-scheme:inherit}
.dshw *,.dshw *:before,.dshw *:after{box-sizing:border-box}.dshw h1,.dshw h2,.dshw h3,.dshw h4,.dshw p{margin:0}.dshw h1{font-size:30px;line-height:1.25;letter-spacing:-.025em;font-weight:650}.dshw h2{font-size:24px;line-height:1.35;font-weight:650;letter-spacing:-.015em;overflow-wrap:anywhere}.dshw h3,.dshw h4{font-size:16px;line-height:1.4;font-weight:600}.dshw a{color:var(--w-accent);text-underline-offset:3px;overflow-wrap:anywhere}.dshw button,.dshw input,.dshw select,.dshw textarea{font:inherit;color:inherit;max-width:100%}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select,.dshw textarea{background:var(--dsw-specific-input-major,var(--w-bg));border:1px solid var(--w-border);border-radius:8px;padding:8px 11px;min-width:0;line-height:1.5}.dshw input:not([type=checkbox]):not([type=radio]):not([type=file]),.dshw select{min-height:38px}.dshw textarea{resize:vertical}.dshw input[type=checkbox],.dshw input[type=radio]{width:16px;height:16px;flex-shrink:0;accent-color:var(--w-accent)}.dshw :focus-visible{outline:2px solid var(--w-accent);outline-offset:3px}.dshw button:disabled,.dshw input:disabled,.dshw select:disabled,.dshw textarea:disabled{opacity:.5;cursor:not-allowed}.dshw label{font-size:13px}.dshw fieldset{min-width:0;border:1px solid var(--w-border);border-radius:8px}.dshw summary{cursor:pointer;font-weight:550;list-style:none;display:flex;align-items:center;gap:8px}.dshw summary::-webkit-details-marker{display:none}.dshw summary:after{content:'';display:block;margin-inline-start:auto;width:7px;height:7px;border-inline-end:1.75px solid currentColor;border-bottom:1.75px solid currentColor;transform:rotate(45deg);flex-shrink:0}.dshw details[open]>summary:after{transform:rotate(225deg)}.dshw details>summary+*{margin-top:12px}.dshw pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.7 ui-monospace,SFMono-Regular,Consolas,monospace;max-width:100%;background:var(--w-soft);border-radius:6px;padding:14px}.dshw img,.dshw video,.dshw iframe{max-width:100%}
.w-page{display:flex;flex-direction:column;position:relative;padding:0;min-height:540px;gap:0}.w-page[data-main=true]{height:100%;min-height:0;padding:calc(24px + var(--dsh-frame-top-clearance,0px)) 28px 0 max(28px,var(--dsh-frame-leading-clearance,0px));overflow:auto}.dshw[data-main=true]{background:var(--w-bg)}.dshw.w-page,.dshw .w-body,.dshw .w-tab-panel{overflow-x:clip}.w-page-header{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;padding-bottom:22px;flex-shrink:0}.w-heading{min-width:0}.w-subtitle{margin-top:8px!important;font-size:14px;color:var(--w-muted);line-height:1.6}.w-header-actions,.w-toolbar,.w-actions{display:flex;align-items:center;flex-wrap:wrap;gap:8px;min-width:0}.w-header-actions{justify-content:flex-end}.w-body,.w-tabs-layout{display:flex;flex-direction:column;flex:1;min-height:0;min-width:0}.w-body{overflow:auto}.w-tab-panel{flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:auto}.w-tabs{display:flex;align-items:stretch;gap:20px;border-bottom:1px solid var(--w-border);flex-shrink:0;overflow-x:auto;scrollbar-width:thin}.dshw .w-tabs>button{border:0;border-bottom:2px solid transparent;background:transparent;padding:11px 8px 13px;white-space:nowrap;font-size:14px;font-weight:550;cursor:pointer;color:var(--w-muted);display:flex;align-items:center;gap:7px}.dshw .w-tabs>button[aria-selected=true]{border-bottom-color:var(--w-accent);color:var(--w-accent)}.w-count,.w-tag{font-size:12px;line-height:1.5;display:inline-flex;align-items:center;flex-shrink:0;background:var(--w-soft);border-radius:5px;padding:1px 6px;color:var(--w-muted)}.w-tabs [aria-selected=true] .w-count,.w-selected .w-tag{color:var(--w-accent);background:var(--w-selected)}
.dshw .w-button{display:inline-flex;justify-content:center;align-items:center;gap:7px;background:var(--w-bg);border:1px solid var(--w-border);border-radius:8px;padding:8px 12px;min-height:36px;line-height:1.4;font-size:14px;font-weight:500;cursor:pointer;text-decoration:none;white-space:normal}.dshw .w-button:not(:disabled):hover{background:var(--w-soft)}.dshw .w-primary{background:var(--w-primary);border-color:var(--w-primary);color:var(--w-on-primary)}.dshw .w-primary:not(:disabled):hover{background:var(--w-primary);opacity:.9}.dshw .w-ghost{background:transparent;border-color:transparent}.dshw .w-danger{color:var(--dsw-alias-state-error-primary,#b43c3c)}.dshw .w-icon-button{width:36px;min-width:36px;padding:8px}.dshw .w-button svg{flex-shrink:0}.w-muted{color:var(--w-muted);font-size:12px;line-height:1.6}.w-section{padding:24px 0;border-bottom:1px solid var(--w-border);min-width:0}.w-section>h3{margin-bottom:12px}.w-section>p+p{margin-top:8px}.w-fields{display:grid;gap:16px;min-width:0}.w-field{display:grid;gap:6px;min-width:0}.w-field>input,.w-field>select,.w-field>textarea{width:100%}.w-status{display:flex;align-items:flex-start;gap:8px;padding:11px 13px;margin:12px 0;border:1px solid var(--w-border);border-radius:8px;background:var(--w-soft);font-size:13px;overflow-wrap:anywhere;flex-shrink:0}.w-status>svg{flex-shrink:0;margin-top:2px}.w-status-error{color:var(--dsw-alias-state-error-primary,#ad3636)}.w-status-success{color:var(--dsw-alias-state-success-primary,#24794a)}.w-status-warn{color:var(--dsw-alias-state-warning-primary,#8a5a00)}.w-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;width:100%;max-width:580px;padding:48px 24px;margin:auto;min-height:280px;overflow-wrap:anywhere}.w-empty>svg{color:var(--w-muted)}.w-empty h2{font-size:20px}.w-empty .w-muted{font-size:14px}.w-empty .w-toolbar{justify-content:center}
.w-split{display:grid;grid-template-columns:minmax(240px,var(--w-list-width)) minmax(0,1fr);min-height:460px;flex:1;min-width:0}.w-master{min-width:0;border-inline-end:1px solid var(--w-border);overflow:auto;padding-bottom:24px}.w-detail{min-width:0;padding:26px 28px;overflow:auto;overflow-wrap:anywhere;display:flex;flex-direction:column}.w-master-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:20px 16px}.w-search{display:flex;align-items:center;gap:8px;border:1px solid var(--w-border);border-radius:8px;padding:0 10px;min-width:0;flex:1;background:var(--w-bg)}.w-search>svg{color:var(--w-muted);flex-shrink:0}.dshw .w-search>input{border:0!important;background:transparent!important;padding:8px 0!important;width:100%;outline-offset:0}.w-row{display:flex;gap:0;min-width:0;position:relative;border-bottom:1px solid var(--w-border);border-inline-start:3px solid transparent}.w-row-select{display:flex;align-items:flex-start;padding:21px 0 0 14px}.dshw .w-row-button{display:flex;flex-direction:column;align-items:stretch;gap:7px;text-align:start;width:100%;padding:18px 18px 18px 16px;border:0;background:transparent;color:inherit;min-width:0;cursor:pointer;line-height:1.5}.dshw .w-row-button:hover{background:var(--w-soft)}.w-row-head{display:flex;align-items:flex-start;gap:10px;justify-content:space-between;min-width:0}.w-row-head>strong{font-size:14px;line-height:1.5;font-weight:600;overflow-wrap:anywhere}.w-row-meta,.w-row-description{color:var(--w-muted);font-size:12px;line-height:1.6;overflow-wrap:anywhere}.w-row-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.w-selected{background:var(--w-selected);border-inline-start-color:var(--w-accent)}.w-back{display:none!important}.w-detail-title{margin-bottom:12px!important}.w-detail-meta{color:var(--w-muted);font-size:13px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.w-detail-footer{padding:24px 0;display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:auto;border-top:1px solid var(--w-border)}.w-detail-footer .w-muted{flex:1;min-width:160px}.w-definition{display:grid;grid-template-columns:minmax(80px,120px) minmax(0,1fr);gap:8px 16px;font-size:14px;margin:20px 0}.w-definition dt{color:var(--w-muted)}.w-definition dd{margin:0;min-width:0;overflow-wrap:anywhere}
.w-switch-label{display:inline-flex;align-items:center;gap:8px;font-size:13px;position:relative;cursor:pointer}.w-switch-label>input{position:absolute;opacity:0;inset-inline-end:0;width:36px!important;height:22px!important;margin:0;cursor:pointer}.w-switch-track{width:36px;height:22px;border-radius:12px;display:block;background:var(--w-border);border:1px solid var(--w-border);pointer-events:none;padding:2px;transition:background .15s}.w-switch-track:before{content:'';display:block;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 2px #0002;transition:transform .15s}.w-switch-label>input:checked+.w-switch-track{background:var(--w-accent);border-color:var(--w-accent)}.w-switch-label>input:checked+.w-switch-track:before{transform:translateX(14px)}.w-switch-label>input:focus-visible+.w-switch-track{outline:2px solid var(--w-accent);outline-offset:3px}.w-switch-label:has(>input:disabled){opacity:.5;cursor:not-allowed}
.w-overlay{position:fixed;inset:0;background:#0005;display:flex;justify-content:flex-end;z-index:1000;padding:12px;overflow:auto}.w-dialog{width:min(620px,100%);max-height:100%;display:flex;flex-direction:column;min-height:0;background:var(--w-bg);color:var(--w-text);border:1px solid var(--w-border);border-radius:12px;box-shadow:0 18px 70px #0003}.w-dialog-header{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 24px;border-bottom:1px solid var(--w-border);flex-shrink:0}.w-dialog-header>h2{font-size:20px}.w-dialog-body{overflow:auto;padding:20px 24px;min-height:0}.w-editor-grid{display:grid;grid-template-columns:210px minmax(0,1fr) 300px;min-height:500px;flex:1}.w-editor-list{padding:20px 12px;border-inline-end:1px solid var(--w-border);min-width:0}.w-editor-canvas{background:var(--w-soft);padding:20px;min-width:0;display:flex;flex-direction:column;gap:14px}.w-editor-inspector{padding:24px;border-inline-start:1px solid var(--w-border);min-width:0;overflow:auto}.w-editor-inspector h3{margin-bottom:18px}.w-preview-empty{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;aspect-ratio:16/9;min-height:180px;background:var(--w-soft);border:1px solid var(--w-border);border-radius:8px;padding:24px;color:var(--w-muted)}.w-content-pad{padding:24px 0}.w-stack{display:flex;flex-direction:column;gap:16px;min-width:0}.w-scroll-x{overflow:auto;max-width:100%}
@container dsh-workbench (max-width:1000px){.w-editor-grid{grid-template-columns:160px minmax(0,1fr)}.w-editor-inspector{grid-column:1/-1;border-inline-start:0;border-top:1px solid var(--w-border)}.w-header-actions{max-width:60%}.w-split{grid-template-columns:minmax(240px,32%) minmax(0,1fr)}}
@container dsh-workbench (max-width:760px){.w-page-header{gap:14px;flex-wrap:wrap;padding-bottom:18px}.w-heading{flex:1;min-width:170px}.dshw h1{font-size:24px}.w-header-actions{max-width:100%;justify-content:flex-start}.w-subtitle{font-size:13px}.w-tabs{gap:12px}.dshw .w-tabs>button{padding:10px 4px 12px}.w-split{display:block;min-height:360px}.w-split[data-selected=false]>.w-detail{display:none}.w-split[data-selected=true]>.w-master{display:none}.w-master{border-inline-end:0}.w-detail{padding:20px 0}.w-back{display:inline-flex!important;align-self:flex-start;margin:0 0 16px!important}.w-detail h2{font-size:22px}.w-master-toolbar{padding:16px 0}.dshw .w-row-button{padding:16px 10px}.w-detail-footer{position:static}.w-detail-footer .w-muted{flex-basis:100%}.w-editor-grid{display:flex;flex-direction:column}.w-editor-list{border-inline-end:0;border-bottom:1px solid var(--w-border);padding:16px 0}.w-editor-canvas{padding:16px 0;background:var(--w-bg)}.w-editor-inspector{padding:20px 0}.w-dialog-header,.w-dialog-body{padding:16px}.w-button{min-height:40px}.w-definition{grid-template-columns:80px minmax(0,1fr)}}
@media(max-width:700px){.w-page[data-main=true]{padding:calc(16px + var(--dsh-frame-top-clearance,0px)) 16px 0 max(16px,var(--dsh-frame-leading-clearance,0px))}.w-overlay{padding:8px}.w-dialog{width:100%}}
@media(prefers-reduced-motion:reduce){.dshw *,.dshw *:before{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;
  function Styles() { return h('style', null, styles); }
  return { Icon, Button, IconButton, Page, Tabs, Status, Empty, Split, Row, Search, Switch, Dialog, Styles, register, styles };
}

/* One update control per plugin. Only transport, idle guards and installation
 * coordination are shared; no global update page or update-all action exists. */
function __stardustUpdatesGuards() {
  const key = Symbol.for('stardustlc.plugin-updates.guards.v1');
  return globalThis[key] ||= { values: new Map(), listeners: new Set(), viewListeners: new Set(), clients: new Set() };
}
function __stardustUpdatesGuard(React, name, { dirty = false, busy = false, retainOnClose = false } = {}) {
  const token = React.useRef(null);
  if (!token.current) token.current = {};
  React.useLayoutEffect(() => {
    const pool = __stardustUpdatesGuards();
    if (!dirty && !busy) for (const [key, value] of pool.values) if (value.name === name && value.orphan) pool.values.delete(key);
    pool.values.set(token.current, { name, dirty: !!dirty, busy: !!busy, retainOnClose, orphan: false });
    for (const listener of pool.listeners) listener();
  }, [name, !!dirty, !!busy, retainOnClose]);
  React.useEffect(() => () => {
    const pool = __stardustUpdatesGuards(), value = pool.values.get(token.current);
    if (value?.retainOnClose && (value.dirty || value.busy)) value.orphan = true;
    else pool.values.delete(token.current);
    for (const listener of pool.listeners) listener();
  }, []);
}
function __StardustPluginUpdatesFooter({ React, name }) {
  const [, render] = React.useState(0), pool = __stardustUpdatesGuards();
  React.useEffect(() => { const fn = () => render(value => value + 1); pool.viewListeners.add(fn); return () => pool.viewListeners.delete(fn); }, []);
  const client = [...pool.clients].find(client => typeof client.Footer === 'function' && client.has(name));
  if (!client) return null;
  return React.createElement(client.Footer, { name });
}
function __stardustUpdatesFooter(React, name) {
  return React.createElement(__StardustPluginUpdatesFooter, { key: 'plugin-updates', React, name });
}
function __stardustUpdatesInlinePage(React, element, name) {
  return React.cloneElement(element, null, element.props.children, __stardustUpdatesFooter(React, name));
}
function __stardustUpdatesDetailName(subject, rows) {
  if (!subject || !['bundle', 'row'].includes(subject.kind)) return null;
  if (subject.kind === 'row' && subject.pkg?.name === '@stardustlc/dsh-suite') {
    const component = rows.find(row => row.bundledBy === subject.pkg.name && (subject.row?.moduleName === row.name || subject.row?.moduleName?.startsWith(row.name + '/')));
    if (component) return component.name;
  }
  return rows.some(row => row.name === subject.pkg?.name) ? subject.pkg.name : null;
}
function __stardustUpdatesNativeFormState(document) {
  let dirty = false, busy = false;
  for (const scope of document.querySelectorAll('[data-plugin-detail],[data-plugin-row-detail]')) for (const button of scope.querySelectorAll('button')) {
    if (!button.getClientRects().length || button.closest('.plugin-updates-footer')) continue;
    const label = (button.getAttribute('aria-label') || button.textContent || '').trim();
    if (/^(?:正在保存|保存中|Saving)(?:[.…\s]|$)/i.test(label) || button.getAttribute('aria-busy') === 'true') busy = true;
    if (!button.disabled && button.getAttribute('aria-disabled') !== 'true' && /^(?:保存(?:更改|设置|配置)?|Save(?: changes| settings| configuration)?)(?:\s+(?:Ctrl|⌘|Enter|↵).*)?$/i.test(label)) dirty = true;
  }
  return { dirty, busy };
}
function __stardustUpdatesDisplayRows(next, known) {
  for (const row of next.rows) known.set(row.name, row);
  if (!['verifying', 'installing', 'cancelling', 'unknown', 'restore-failed'].includes(next.job?.state)) return next;
  const rows = [...next.rows];
  for (const row of known.values()) if ((row.name === next.job.name || row.bundledBy === next.job.name) && !rows.some(item => item.name === row.name)) rows.push({ ...row, updating: true });
  return { ...next, rows };
}
function __stardustUpdatesSuiteRows(next, participants) {
  // Transitive Suite rows identify the migration entry in existing workbenches.
  const suite = next.rows.find(row => row.name === '@stardustlc/dsh-suite' && row.enabled);
  if (!suite) return next;
  const rows = [...next.rows], names = new Set(rows.map(row => row.name));
  for (const item of participants) if (item.suiteComponent && item.packageVersion && item.label && !names.has(item.name)) {
    names.add(item.name);
    rows.push({ name: item.name, version: item.packageVersion, enabled: true, sourceKind: 'suite', loadError: false, label: item.label, labelEn: item.labelEn, bundledBy: suite.name });
  }
  return { ...next, rows };
}
function __stardustUpdatesWrap(definition, participant) {
  return { ...definition, factory(require) {
    const original = definition.factory(require);
    if (!original || typeof original !== 'object') return original;
    const React = require('react');
    return { ...original, apply(ctx, ...args) {
      const result = original.apply?.call(this, ctx, ...args);
      // The optional alpha.3 slot stays dormant in older hosts; its scoped
      // injection unregisters naturally when the plugin is unloaded.
      if (participant.iconData && participant.sectionIds?.length && typeof ctx.inject === 'function') ctx.inject(['slots'], host => {
        for (const id of new Set(participant.sectionIds)) host.slots.inject('settings.section.icon', () => host.slots.register({ name: 'settings.section.icon', id }, function PluginSettingsIcon({ size = 20 }) {
          return React.createElement('img', { src: participant.iconData, alt: '', 'aria-hidden': true, width: size, height: size, style: { objectFit: 'contain', display: 'block', flexShrink: 0 } });
        }));
      });
      if (typeof ctx.inject === 'function') ctx.inject(['slots', 'locale', 'remote', 'remote.pluginManager'], host => __stardustUpdatesJoin(host, React, require, participant));
      return result;
    } };
  } };
}
function __stardustUpdatesJoin(host, React, require, participant) {
  const key = Symbol.for('stardustlc.plugin-updates.client.v1'), pools = globalThis[key] ||= new WeakMap(), root = host.root || host;
  if (typeof root.plugin !== 'function') return;
  let record = pools.get(root);
  if (!record) {
    record = { refs: new Map(), timer: null, version: participant.version, alive: true, hold: false, uiRevision: 3, migration: Promise.resolve() };
    pools.set(root, record);
    __stardustUpdatesActivate(record, pools, root, React, require);
  } else if ((record.uiRevision || 0) < 3 && !record.upgrading) {
    // The first loaded participant may still own a pre-footer client. Keep
    // its references and draft guards, wait for any admitted install, then
    // replace that one client fiber instead of running two window heartbeats.
    const shared = record;
    const previousMigration = record.migration;
    record.upgrading = record.migration = Promise.resolve(previousMigration).then(async () => {
      while (shared.alive && shared.hold) await new Promise(resolve => setTimeout(resolve, 500));
      if (!shared.alive || !shared.refs.size) return;
      await shared.fiber?.dispose?.();
      if (!shared.refs.size) return;
      shared.alive = true; shared.uiRevision = 3; pools.set(root, shared);
      __stardustUpdatesActivate(shared, pools, root, React, require);
    }).catch(() => { /* The original page remains usable if host disposal fails. */ });
  }
  clearTimeout(record.timer);
  const ref = {}; record.refs.set(ref, participant);
  host.effect(() => () => {
    record.refs.delete(ref);
    const stop = () => {
      if (record.refs.size || !record.alive) return;
      if (record.hold) { record.timer = setTimeout(stop, 1000); return; }
      record.alive = false; Promise.resolve(record.fiber?.dispose?.()).catch(() => {});
    };
    if (!record.refs.size) record.timer = setTimeout(stop, 1000);
  });
}
function __stardustUpdatesActivate(shared, pools, root, React, require) {
  shared.fiber = root.plugin({ name: 'stardustlc-plugin-updates-client', inject: ['slots', 'locale', 'remote', 'remote.pluginManager'], apply(ctx) {
    const client = __stardustUpdatesClient(ctx, React, require, shared);
    ctx.effect(() => () => { shared.alive = false; client.dispose(); if (pools.get(root) === shared) pools.delete(root); });
  } });
  Promise.resolve(shared.fiber).catch(() => { shared.alive = false; if (pools.get(root) === shared) pools.delete(root); });
}
function __stardustUpdatesClient(ctx, React, require, shared) {
  const h = React.createElement, W = createWorkbenchUI(React), route = new URL('api/stardustlc/plugin-updates', document.baseURI);
  const { useState, useEffect } = React, id = crypto.randomUUID(), listeners = new Set(), pool = __stardustUpdatesGuards(), requests = new Set(), notified = new Set(), knownRows = new Map();
  let alive = true, registered = false, state = null, lastInteraction = Date.now(), inPoll = false, manualOperation = false, legacyHint = null;
  const language = () => String(ctx.locale?.getSnapshot?.().active || '').startsWith('en') ? 'en' : 'zh';
  const t = (zh, en) => language() === 'en' ? en : zh;
  const preferences = name => state?.preferences.packages[name] || { checkEnabled: true, autoInstall: false, deferredUntil: 0, ignoredVersion: null };
  const rowFor = name => state?.rows.find(row => row.name === name);
  const activeJob = () => ['verifying', 'installing', 'cancelling'].includes(state?.job?.state);
  function notify() { shared.hold = manualOperation || activeJob(); for (const listener of listeners) listener(); for (const listener of pool.viewListeners) listener(); }
  async function api(body = { action: 'state' }) {
    const controller = new AbortController(); requests.add(controller);
    const timeout = setTimeout(() => controller.abort(), ['check', 'check-when-due'].includes(body.action) ? 95000 : 45000);
    try {
      const response = await fetch(route, { method: 'POST', credentials: 'same-origin', cache: 'no-store', signal: controller.signal, headers: { 'content-type': 'application/json', 'x-stardustlc-updates': '1' }, body: JSON.stringify(body) });
      let data; try { data = await response.json(); } catch { throw new Error('service-unavailable'); }
      if (!response.ok || !data.ok) throw new Error(response.status === 403 ? 'owner-required' : data.code || 'service-unavailable');
      return data.value;
    } catch (error) { if (error?.name === 'AbortError') throw new Error('service-unavailable'); throw error; }
    finally { clearTimeout(timeout); requests.delete(controller); }
  }
  function pageState(manual = manualOperation) {
    const values = [...pool.values.values()], nativeForm = __stardustUpdatesNativeFormState(document);
    const dialog = [...document.querySelectorAll('[role="dialog"],dialog[open]')].some(node => node.getClientRects().length && !(manual && (node.closest('.plugin-updates-footer') || node.querySelector('.plugin-updates-footer'))));
    return { action: 'heartbeat', id, dirty: nativeForm.dirty || values.some(value => value.dirty), busy: nativeForm.busy || values.some(value => value.busy) || dialog, idleForMs: Math.min(86400000, Math.max(0, Date.now() - lastInteraction)) };
  }
  const heartbeat = () => api(pageState());
  function interaction() { lastInteraction = Date.now(); if (registered && alive) void heartbeat().catch(() => {}); }
  const guardChanged = () => { if (registered && alive) void heartbeat().catch(() => {}); };
  for (const event of ['pointerdown', 'keydown', 'input']) document.addEventListener(event, interaction, { capture: true, passive: true });
  pool.listeners.add(guardChanged);
  const close = () => { void fetch(route, { method: 'POST', credentials: 'same-origin', keepalive: true, headers: { 'content-type': 'application/json', 'x-stardustlc-updates': '1' }, body: JSON.stringify({ action: 'client-close', id }) }).catch(() => {}); };
  window.addEventListener('pagehide', close);
  async function refresh() { const next = await api(); if (alive) { state = __stardustUpdatesDisplayRows(__stardustUpdatesSuiteRows(next, shared.refs.values()), knownRows); notify(); } return next; }
  function useSnapshot() {
    const [, render] = useState(0);
    useEffect(() => { const fn = () => render(value => value + 1); listeners.add(fn); const stop = ctx.locale?.subscribe?.(fn); return () => { listeners.delete(fn); stop?.(); }; }, []);
    return state;
  }
  function message(code) {
    return ({
      'page-dirty': t('有未保存的修改。请先保存或放弃修改，再更新。', 'Save or discard unsaved changes before updating.'),
      'page-busy': t('有页面操作或对话框尚未结束，请完成后再试。', 'Finish the active page operation or close its dialog, then retry.'),
      'page-not-ready': t('还有窗口状态未确认，或旧版插件尚未提供状态保护。请刷新相关窗口，必要时先手动更新旧版插件。', 'A window state is unknown or an older plugin lacks state protection. Refresh the affected windows and manually update legacy plugins if needed.'),
      busy: t('DSH 正在执行任务或安装，请等操作结束。', 'DSH is running a task or installation. Wait for it to finish.'),
      'activity-unknown': t('无法确认任务是否空闲，已暂停安装。', 'Installation paused because task activity is unknown.'),
      'restart-required': t('更新服务需要重启后继续。请在方便时手动重启 DSH。', 'The updater needs a restart. Restart DSH manually when convenient.'),
      'operation-unconfirmed': t('上次安装未确认或恢复失败。请在官方插件管理中检查并修复，之后手动重启 DSH。', 'The last installation is unconfirmed or recovery failed. Check and repair it in native plugin management, then restart DSH manually.'),
      'check-first': t('检查结果已过期，请重新检查。', 'This check expired. Check again.'),
      'release-changed': t('发布信息已变化，本次未安装。请重新检查。', 'Release metadata changed. Nothing was installed; check again.'),
      'preferences-conflict': t('另一个窗口修改了偏好，已刷新，请重试。', 'Preferences changed in another window. They have been refreshed; retry.'),
      'preferences-unreadable': t('更新偏好文件无法读取，自动安装已关闭。请检查当前 profile 的 stardustlc-plugin-updates.json。', 'Preferences could not be read. Automatic installation is off. Check stardustlc-plugin-updates.json in this profile.'),
      'no-update': t('版本已变化或暂不兼容，请重新检查。', 'The version changed or is incompatible. Check again.'),
      'source-not-registry': t('本地源码、Git 等安装，请通过原安装方式更新。', 'Update local, Git and other external sources through their original installation method.'),
      'managed-by-suite': t('先将 Suite 组件迁移为独立安装。', 'Convert Suite components to independent installations first.'),
      'suite-hmr-required': t('切换安装方式需要宿主启用热重载。', 'Converting Suite requires Host hot reload.'),
      'suite-inventory-changed': t('套件与独立插件的安装状态或 Loader 条目不一致，请在原生插件详情检查。', 'Suite and standalone bundle inventory or Loader entries differ. Review native plugin details.'),
      'suite-stage-failed': t('切换安装方式时宿主报告失败，请在插件管理中查看详情。', 'The Host reported a conversion failure. See native plugin management for details.'),
      'suite-recovery-required': t('Suite 的上次切换等待恢复。', 'The previous Suite conversion needs recovery.'),
      'suite-recovery-unreadable': t('Suite 恢复记录无法读取，请在原生插件管理中检查已安装组件。', 'The Suite recovery record is unreadable. Check the installed bundles in native plugin management.'),
      'owner-required': t('只有 profile 拥有者能管理更新。', 'Only the profile owner can manage updates.'),
      'version-mismatch': t('宿主装入的版本与目标不同。请重新检查版本和软件源策略。', 'The installed version differs from the target. Check the release and registry policy.'),
      'unexpected-package': t('宿主装入的包或版本与目标不同。请检查版本和软件源策略。', 'The installed package or version differed from the target. Check the release and registry policy.'),
      'version-unconfirmed': t('尚未确认新版已加载，请在插件详情中检查当前版本。', 'The new version could not be confirmed. Check the installed version in plugin details.'),
      'build-blocked': t('构建脚本等待批准。请查看原生插件管理中的安装提示。', 'Build scripts await approval. Review the install details in native plugin management.'),
    })[code] || t('操作未完成，请刷新后重试。DSH 不会因此自动重启。', 'The operation could not be completed. Refresh and retry. DSH will not restart automatically.');
  }
  // releaseOf() keeps the failing engine/peer range check as a stable code; say which
  // environment has to change instead of only reporting that the release is incompatible.
  function requirement(release) {
    return ({
      'dsh-version': t('需要换成与该版本匹配的 DSH 本体', 'it needs a different DSH version'),
      'node-version': t('需要换成与该版本匹配的 Node.js', 'it needs a different Node.js version'),
      deprecated: t('作者已把这个版本标记为弃用', 'the author marked this release as deprecated'),
      'not-bundle': t('这个版本不是可加载的 DSH 插件包', 'this release is not a loadable DSH plugin bundle'),
    })[release?.reason] || t('发布元数据的兼容范围与当前环境不符', 'its published compatibility range does not match this environment');
  }
  function jobLabel(job) {
    if (job.mode === 'migration') {
      return ({
        complete: t('Suite 已切换为独立安装', 'Suite components are now installed independently'),
        'restart-required': t('切换配置已保存，等待重启', 'Conversion saved. Restart Harness to finish'),
        restored: t('切换失败，已恢复 Suite', 'Conversion failed; Suite restored'),
        'restore-failed': t('恢复 Suite 失败', 'Suite recovery failed'),
        cancelled: t('已取消切换', 'Conversion cancelled'),
        failed: t('切换失败', 'Conversion failed'),
      })[job.state] || ({
        checking: t('正在核对 Suite 组件', 'Checking Suite components'),
        installing: t('正在准备独立插件', 'Preparing independent bundles'),
        applying: t('正在切换加载方式', 'Switching bundle activation'),
        restoring: t('正在恢复 Suite', 'Restoring Suite'),
      })[job.phase];
    }
    if (job.state === 'installing') {
      const phase = ({
        checking: t('宿主正在检查版本', 'Host checking release'),
        removing: t('正在卸载旧版', 'Unloading the previous version'),
        applying: t('正在加载新版', 'Loading the new version'),
        restoring: t('正在恢复旧版', 'Restoring the previous version'),
      })[job.phase];
      if (phase) return phase;
    }
    return ({ verifying: t('正在核对版本', 'Verifying release'), installing: t('正在安装', 'Installing'), cancelling: t('正在请求取消', 'Requesting cancellation'), complete: t('已更新', 'Updated'), 'restart-required': t('已安装，等待你手动重启', 'Installed; manual restart needed'), restored: t('更新未成功，已恢复原版本', 'Update failed; previous version restored'), 'restore-failed': t('恢复未成功，请检查官方插件管理', 'Recovery failed; check native plugin management'), unknown: t('结果未确认，请检查官方插件管理', 'Result unconfirmed; check native plugin management'), cancelled: t('已取消', 'Cancelled'), failed: t('更新未成功', 'Update failed') })[job.state] || job.state;
  }
  function FooterFrame({ name, label, subtitle, actions, children }) {
    return h('section', { className: 'dshw plugin-updates-footer', 'data-plugin-update-footer': name, 'aria-label': label + t(' · 版本与更新', ' · Version and updates') },
      h('style', null, W.styles),
      h('style', null, '.plugin-updates-footer{box-sizing:border-box;flex-shrink:0;margin-top:28px;padding-top:18px;border-top:1px solid var(--dsw-alias-border-l3,#e5e7eb);min-width:0;max-width:100%;color:var(--dsw-alias-label-primary,#202124)}.plugin-updates-footer .updates-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px}.plugin-updates-footer h2{font-size:14px;line-height:22px;margin:0;font-weight:600}.plugin-updates-footer .updates-subtitle,.plugin-updates-footer .updates-version{font:12px/1.6 ui-monospace,monospace;overflow-wrap:anywhere;margin:4px 0}.plugin-updates-footer .updates-options{margin-top:12px}.plugin-updates-footer .updates-options>summary{cursor:pointer;font-size:12px;line-height:22px;color:var(--dsw-alias-label-secondary,#657080)}.plugin-updates-footer .updates-options>summary:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#6b79df);outline-offset:4px}.plugin-updates-footer .updates-settings{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px;padding:14px 0 0}.plugin-updates-footer .updates-note{margin:5px 0 0;font-size:12px;line-height:1.6}.plugin-updates-footer>.w-section{margin:10px 0 0;padding:0;border:0}.plugin-updates-footer .w-toolbar{margin-top:10px!important}.plugin-updates-footer .w-switch-label{max-width:100%;gap:12px;align-items:flex-start}.plugin-updates-footer .w-switch-track{flex-shrink:0}.plugin-updates-footer .updates-notes{margin-top:12px;padding:12px;border:1px solid var(--dsw-alias-border-l3,#e5e7eb);border-radius:10px}.plugin-updates-footer .updates-notes pre{white-space:pre-wrap;overflow-wrap:anywhere;max-height:240px;overflow:auto;font:12px/1.7 ui-monospace,monospace}.plugin-updates-footer .w-overlay{z-index:1002}@media(max-width:600px){.plugin-updates-footer .updates-head{gap:8px}.plugin-updates-footer .w-toolbar{gap:6px;flex-wrap:wrap}.plugin-updates-footer .w-button{max-width:100%}}'),
      h('div', { className: 'updates-head' }, h('div', null, h('h2', null, t('版本与更新', 'Version and updates')), h('p', { className: 'updates-subtitle w-muted' }, subtitle)), actions), children);
  }
  function Panel({ name }) {
    const snapshot = useSnapshot(), [error, setError] = useState(''), [working, setWorking] = useState(false), [checking, setChecking] = useState(false), [dialog, setDialog] = useState(null), [selectedVersion, setSelectedVersion] = useState(null), [notes, setNotes] = useState(null), [notesOpen, setNotesOpen] = useState(false), [loadingNotes, setLoadingNotes] = useState(false);
    const row = rowFor(name), target = name, prefs = preferences(name);
    const suiteEntry = !!row?.bundledBy || (name === '@stardustlc/dsh-suite' && row?.enabled);
    const managed = row?.sourceKind === 'registry' && !suiteEntry;
    const latestJob = snapshot?.job;
    const job = latestJob?.name === name || latestJob?.mode === 'migration' && (latestJob.requestedName === name || suiteEntry && activeJob()) ? latestJob : null;
    useEffect(() => {
      if (managed && prefs.checkEnabled) void api({ action: 'check-when-due', name }).then(refresh).catch(() => {});
    }, [name, managed, prefs.checkEnabled]);
    async function perform(callback) { setError(''); setWorking(true); try { await callback(); await refresh(); } catch (error) { setError(error.message); await refresh().catch(() => {}); } finally { setWorking(false); } }
    async function save(changes, consent) { await api({ action: 'preferences', name: target, revision: state.preferences.revision, changes, consent }); }
    async function check() { setError(''); setChecking(true); try { await api({ action: 'check', name: target }); await refresh(); } catch (error) { setError(error.message); } finally { setChecking(false); } }
    async function runOperation(request) {
      setDialog(null); manualOperation = true; notify();
      await perform(async () => {
        try {
          await heartbeat();
          const started = await api(request);
          while (alive) {
            await new Promise(resolve => setTimeout(resolve, 800)); await heartbeat(); await refresh();
            if (state.job?.id !== started.id) throw new Error('operation-unconfirmed');
            if (!activeJob()) break;
          }
        } finally { manualOperation = false; notify(); }
      });
    }
    async function showNotes() {
      if (notesOpen) { setNotesOpen(false); return; }
      setNotesOpen(true); setNotes(null); setLoadingNotes(true); setError('');
      try { setNotes(await api({ action: 'notes', name: target, version: row.release.version })); } catch (error) { setError(error.message); } finally { setLoadingNotes(false); }
    }
    if (!snapshot) return h(W.Status, null, t('正在读取更新状态…', 'Loading update status…'));
    const ownPage = pageState(true), unconfirmed = ['unknown', 'restore-failed'].includes(snapshot.job?.state);
    const pageBusy = ownPage.busy || (snapshot.pages.clients || []).some(client => client.id !== id && client.busy);
    const busy = working || activeJob() || snapshot.updaterRestart || snapshot.preferenceError || !snapshot.activity.known
      || snapshot.activity.busy || snapshot.pages.dirty || ownPage.dirty || pageBusy || !snapshot.pages.known;
    const installLocked = busy || unconfirmed || !!snapshot.suiteRecovery;
    const checkingThis = checking || snapshot.checkingNames?.includes(target);
    const canMigrate = snapshot.suiteMigration && !installLocked && !snapshot.pendingRestart;
    const canRecover = snapshot.suiteRecovery?.version && snapshot.suiteMigration && !busy && !snapshot.pendingRestart;
    const showUpdate = managed && row.available;
    const canConfirm = showUpdate && row.release.version === selectedVersion && !installLocked && !row.loadError;
    function progress() {
      if (!job) return null;
      const result = job.outcome?.result;
      const reason = job.reason || (result?.pendingBuilds || result?.failureKind === 'build-blocked' ? 'build-blocked' : result?.error?.code);
      const canCancel = activeJob() && !['applying', 'restoring'].includes(job.phase);
      return h('section', { className: 'w-section', role: 'status', 'aria-label': t('更新进度', 'Update progress') },
        h('h3', null, jobLabel(job)),
        job.to && h('p', { className: 'w-muted' }, job.from + ' → ' + job.to + (job.mode === 'automatic' ? t(' · 自动补丁', ' · Automatic patch') : '')),
        job.total && activeJob() && h('p', { className: 'w-muted' }, job.completed + ' / ' + job.total),
        reason && h(W.Status, { tone: 'error' }, message(reason)),
        canCancel && h(W.Button, { disabled: job.state === 'cancelling', onClick: () => perform(() => api({ action: 'cancel', id: job.id })) }, t('取消', 'Cancel')));
    }
    function windowControls() {
      if (!(snapshot.pages.clients || []).some(client => !client.fresh)) return null;
      return h('div', null,
        h(W.Status, null, h('p', null, t('有窗口已断开，无法确认是否还有未保存修改。仍在使用的窗口请先保存并刷新；已关闭的窗口可以手动重新确认。', 'A disconnected window may contain unsaved changes. Save and refresh windows still in use. If they are closed, you can confirm that manually.')), h(W.Button, { onClick: () => setDialog('windows') }, t('重新确认已关闭的窗口', 'Confirm closed windows'))),
        dialog === 'windows' && h(W.Dialog, { title: t('断开的窗口都已关闭？', 'Are the disconnected windows closed?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
          h('div', { className: 'w-stack' }, h('p', null, t('只清除超过 45 秒未回应的其他窗口记录。请先确认它们已经关闭；仍在使用的窗口请保存修改并刷新。当前或仍在回应的窗口保护会保留。', 'Only other windows silent for over 45 seconds are cleared. Confirm that they are closed; save and refresh windows still in use. Current and responsive windows remain protected.')), h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')), h(W.Button, { onClick: () => { setDialog(null); void perform(() => api({ ...pageState(true), action: 'reconfirm-windows', confirmation: 'other-stale-windows-are-closed' })); } }, t('已关闭，重新确认状态', 'They are closed; reconfirm'))))));
    }
    function recoveryControls() {
      if (!snapshot.suiteRecovery) return null;
      if (snapshot.suiteRecovery.restartRequired) return h(W.Status, null, t('请重启 Harness。下次启动时会核对独立插件是否已加载。', 'Restart Harness. It will verify that the individual plugins loaded at startup.'));
      return h('div', null,
        h(W.Status, null, snapshot.suiteRecovery.awaitingVerification
          ? t('正在核对独立插件的加载状态。若仍有插件无法加载，可以恢复 Suite。', 'Checking the individual plugins. Recover Suite if any still fail to load.')
          : message(snapshot.suiteRecovery.error || 'suite-recovery-required')),
        snapshot.suiteRecovery.version && h(W.Button, { disabled: !canRecover, onClick: () => setDialog('recovery') }, t('恢复 Suite', 'Recover Suite')),
        dialog === 'recovery' && h(W.Dialog, { title: t('恢复上次 Suite 切换？', 'Recover the previous Suite conversion?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
          h('div', { className: 'w-stack' },
            h('p', null, t('Harness 会核对当前组件状态，并按需恢复切换前的安装方式。', 'Harness checks the current component state and recovers the previous installation if needed.')),
            h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')),
              h(W.Button, { variant: 'primary', disabled: !canRecover, onClick: () => runOperation({ action: 'recover-suite', name, confirmation: 'restore-previous-suite' }) }, t('确认恢复', 'Recover'))))));
    }
    if (!row) return recoveryControls() || progress() || h(W.Status, null, t('此插件尚未安装或已从当前 profile 移除。', 'This plugin is not installed in the current profile.'));
    const title = language() === 'en' ? row.labelEn : row.label;
    if (suiteEntry) return h(FooterFrame, { name, label: title, subtitle: name + ' · ' + row.version, actions: h(W.Button, { variant: 'primary', disabled: !canMigrate, onClick: () => setDialog('migration') }, t('切换为独立安装', 'Use independent installations')) },
      h(W.Status, null, snapshot.suiteMigration ? t('组件随 Suite 安装。切换后即可单独更新。', 'These components are installed by Suite. Convert them for per-plugin updates.') : message('suite-hmr-required')),
      (snapshot.pages.dirty || ownPage.dirty) && h(W.Status, null, message('page-dirty')),
      (snapshot.activity.busy || pageBusy) && h(W.Status, null, message(snapshot.activity.busy ? 'busy' : 'page-busy')),
      snapshot.pendingRestart && h(W.Status, null, message('restart-required')),
      error && h(W.Status, { tone: 'error' }, message(error)),
      unconfirmed && h(W.Status, { tone: 'error' }, message('operation-unconfirmed')),
      windowControls(),
      recoveryControls(),
      progress(),
      dialog === 'migration' && h(W.Dialog, { title: t('将 Suite 组件切换为独立安装？', 'Convert Suite components to independent installations?'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
        h('div', { className: 'w-stack' }, h('p', null, t('Harness 会卸载旧 Suite 包，以当前版本登记各组件并恢复配置。切换期间组件会暂时卸载。', 'Harness removes the old Suite bundle and registers the components independently at the same versions with their existing settings. The components unload during the conversion.')),
          h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')), h(W.Button, { variant: 'primary', disabled: !canMigrate, onClick: () => runOperation({ action: 'migrate-suite', name, confirmation: 'convert-suite-to-independent-bundles' }) }, t('确认切换', 'Convert installations'))))));
    const status = row.sourceKind !== 'registry' ? t('请通过原安装方式更新', 'Update through the original installation method') : row.loadError ? t('加载异常，请先检查原生插件管理', 'Loading error. Check native plugin management') : row.error ? t('检查失败，可以重试', 'Check failed. Try again') : row.release && !row.release.compatible ? 'v' + row.release.version + ' · ' + requirement(row.release) + (row.release.required ? ' (' + row.release.required + ')' : '') : row.available ? (prefs.ignoredVersion === row.release.version ? t('已忽略提醒，仍可手动更新', 'Reminder ignored. Manual update available') : t('有兼容的新版本', 'Compatible update available')) : row.checkedAt ? t('当前已是最新稳定版', 'Latest stable version') : t('尚未检查', 'Not checked yet');
    const checkButton = variant => h(W.Button, { variant, icon: 'refresh', disabled: checkingThis || !managed, onClick: check }, checkingThis ? t('正在检查…', 'Checking…') : t('检查更新', 'Check for updates'));
    const primary = showUpdate
      ? h(W.Button, { variant: 'primary', icon: 'download', disabled: installLocked || row.loadError, onClick: () => { setSelectedVersion(row.release.version); setDialog('install'); } }, t('更新至 v', 'Update to v') + row.release.version)
      : managed ? checkButton() : null;
    return h(FooterFrame, { name, label: title, subtitle: name + ' · ' + row.version, actions: primary },
      h('section', { className: 'w-section' },
        h('p', { className: 'w-muted updates-note' }, status),
        showUpdate && row.blockedRelease && h('p', { className: 'w-muted updates-note' }, 'v' + row.blockedRelease.version + ' · ' + requirement(row.blockedRelease) + (row.blockedRelease.required ? ' (' + row.blockedRelease.required + ')' : '')),
        !row.enabled && h('p', { className: 'w-muted' }, t('当前已停用。', 'Currently disabled.')),
        row.checkedAt && h('p', { className: 'w-muted updates-note' }, t('上次检查 ', 'Last checked ') + new Date(row.checkedAt).toLocaleString(language() === 'en' ? 'en-US' : 'zh-CN')),
        h('div', { className: 'w-toolbar' },
          showUpdate && checkButton('ghost'),
          row.release && h(W.Button, { variant: 'ghost', onClick: showNotes, 'aria-expanded': notesOpen }, t('更新记录', 'Release notes')),
          showUpdate && h(W.Button, { variant: 'ghost', disabled: working, onClick: () => perform(() => api({ action: 'later', name: target, revision: state.preferences.revision })) }, t('明天再提醒', 'Remind me tomorrow')),
          showUpdate && prefs.ignoredVersion !== row.release.version && h(W.Button, { variant: 'ghost', disabled: working, onClick: () => perform(() => api({ action: 'ignore', name: target, revision: state.preferences.revision, version: row.release.version })) }, t('忽略此版本提醒', 'Ignore this reminder')))),
      notesOpen && h('section', { className: 'updates-notes', 'aria-label': t('更新记录', 'Release notes') }, h('strong', null, target + ' · ' + (notes?.version || row.release?.version || '')), loadingNotes ? h('p', null, t('正在读取…', 'Loading…')) : notes?.text ? h('pre', null, notes.text) : h('p', null, t('未找到此版本的独立更新记录。', 'No separate notes were found for this version.')), notes?.url && h('a', { href: notes.url, target: '_blank', rel: 'noreferrer noopener' }, t('查看仓库更新记录', 'View repository changelog'))),
      h('details', { className: 'updates-options' }, h('summary', null, t('更新选项', 'Update options'), ' · ', prefs.checkEnabled ? t('自动检查：开', 'Checks: on') : t('自动检查：关', 'Checks: off'), ' · ', prefs.autoInstall ? t('自动安装：开', 'Install: on') : t('自动安装：关', 'Install: off')), h('section', { className: 'updates-settings', 'aria-label': t('这个插件的更新偏好', 'Update preferences for this plugin') },
        h('div', null, h(W.Switch, { label: t('自动检查这个插件的更新', 'Automatically check this plugin'), checked: prefs.checkEnabled, disabled: working || !!snapshot.preferenceError || row.sourceKind !== 'registry', onChange: event => perform(() => save({ checkEnabled: event.target.checked })) }), h('p', { className: 'w-muted updates-note' }, t('默认开启，后台每 15 分钟检查。', 'On by default. Checks run every 15 minutes.'))),
        h('div', null, h(W.Switch, { label: t('空闲时自动安装这个插件的补丁', 'Install patches for this plugin while idle'), checked: prefs.autoInstall, disabled: working || !!snapshot.preferenceError || row.sourceKind !== 'registry', onChange: event => event.target.checked ? setDialog('automatic') : perform(() => save({ autoInstall: false })) }), h('p', { className: 'w-muted updates-note' }, t('默认关闭。明确开启后，仅空闲且没有未保存修改时安装兼容补丁。其他插件的开关不变。', 'Off by default. Explicitly enable compatible patches while idle with no unsaved changes. Other plugins’ settings stay unchanged.'))))),
      error && h(W.Status, { tone: 'error' }, message(error)), snapshot.preferenceError && h(W.Status, { tone: 'error' }, message('preferences-unreadable')),
      snapshot.pendingRestart && h(W.Status, null, snapshot.updaterRestart ? message('restart-required') : t('已有更新等待手动重启后生效。你可以继续工作，自动安装已暂停。', 'Some updates need a manual restart. Continue your work; automatic installation is paused.')),
      prefs.autoInstall && snapshot.autoReady === false && h(W.Status, null, message('page-not-ready')),
      windowControls(),
      (snapshot.pages.dirty || ownPage.dirty) && h(W.Status, null, message('page-dirty')), (snapshot.activity.busy || pageBusy) && h(W.Status, null, message(snapshot.activity.busy ? 'busy' : 'page-busy')),
      prefs.deferredUntil > Date.now() && h(W.Status, null, t('此插件已推迟提醒和自动安装 24 小时，仍可手动更新。', 'Reminders and automatic installation for this plugin are deferred for 24 hours. Manual updates remain available.')),
      unconfirmed && h(W.Status, { tone: 'error' }, message('operation-unconfirmed')),
      recoveryControls(),
      progress(),
      ['automatic', 'install'].includes(dialog) && h(W.Dialog, { title: dialog === 'automatic' ? t('允许这个插件自动安装补丁？', 'Allow automatic patches for this plugin?') : t('确认更新此插件', 'Confirm this plugin update'), closeLabel: t('关闭', 'Close'), onClose: () => setDialog(null) },
        dialog === 'automatic' ? h('div', { className: 'w-stack' }, h('p', null, (language() === 'en' ? row.labelEn : row.label) + ' · ' + target), h('p', null, t('你正在主动启用这个插件的自动安装。只处理兼容的稳定补丁；有任务、未保存修改、未知窗口或等待重启时暂停。', 'You are explicitly enabling automatic installation for this plugin. Only compatible stable patches qualify; running tasks, unsaved changes, unknown windows or a pending restart pause it.')), h('p', null, t('不会自动重启 DSH，其他插件不会跟着开启。可随时关闭。', 'DSH will not restart automatically, and other plugins will not be enabled for automatic updates. Turn it off anytime.')), h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('保持关闭', 'Keep off')), h(W.Button, { variant: 'primary', onClick: () => { setDialog(null); void perform(() => save({ checkEnabled: true, autoInstall: true }, 'enable-idle-patch-updates')); } }, t('允许此插件自动安装补丁', 'Allow patches for this plugin')))) :
        h('div', { className: 'w-stack' }, h('p', { className: 'updates-version' }, target + ' · ' + row.version + ' → ' + selectedVersion),
          h('p', null, selectedVersion === row.release?.version ? t('Harness 会重新加载此插件。需要重启时，更新区会显示宿主结果。', 'Harness reloads this plugin. If a restart is needed, it appears in the update result.') : message('check-first')),
          h('div', { className: 'w-toolbar' }, h(W.Button, { onClick: () => setDialog(null) }, t('取消', 'Cancel')),
            h(W.Button, { variant: 'primary', disabled: !canConfirm, onClick: () => runOperation({ action: 'install', name, version: selectedVersion, confirmation: 'update-installed-plugin' }) }, t('安装此版本', 'Install this version')))))
    );
  }
  function NativeFooter({ subject }) {
    const snapshot = useSnapshot(), name = __stardustUpdatesDetailName(subject, snapshot?.rows || []);
    return name ? h(Panel, { name }) : null;
  }
  function Reminder() {
    useSnapshot();
    const row = state?.rows.find(row => { const prefs = preferences(row.name); return row.available && !row.updating && !row.bundledBy && prefs.checkEnabled && prefs.deferredUntil <= Date.now() && prefs.ignoredVersion !== row.release.version && !notified.has(row.name + '@' + row.release.version); });
    if (!row && !legacyHint) return null;
    let Toast; try { Toast = require('@deepseek-ai/dsh-client-ui-primitives').Toast; } catch { return null; }
    if (!Toast) return null;
    const hint = legacyHint, key = hint ? 'legacy-' + hint : row.name + '@' + row.release.version;
    return h(Toast, { key, text: hint ? hint + t('：请打开「插件」中的此插件详情页，在底部管理更新。', ': open its details in Plugins to manage updates at the bottom.') : (language() === 'en' ? row.labelEn : row.label) + t('有新版本，可在页面底部查看。', ' has an update. Review it at the bottom of its page.'), icon: h(W.Icon, { name: 'refresh', size: 18 }), holdMs: 7000, onDone: () => { if (hint) legacyHint = null; else notified.add(key); notify(); } });
  }
  function register() {
    if (!alive) return;
    if (!registered) {
      registered = true; pool.clients.add(client);
      ctx.slots.inject('plugins.detail.section', () => ctx.slots.register({ name: 'plugins.detail.section', id: 'stardustlc.plugin-update-footer', order: 1000 }, NativeFooter));
      ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'stardustlc.plugin-update-reminder' }, Reminder));
      notify();
    }
  }
  async function poll() {
    if (inPoll || !alive || !shared.refs.size) return;
    inPoll = true;
    try { await refresh(); register(); await heartbeat(); }
    catch { /* Owner-only controls stay absent for guests and unsupported hosts. */ }
    finally { inPoll = false; }
  }
  const timer = setInterval(() => { void poll(); }, 15000), first = setTimeout(() => { void poll(); }, 100);
  const client = { t, Footer: Panel, Button: W.Button, open(name) { const footer = [...document.querySelectorAll('[data-plugin-update-footer]')].find(node => node.getAttribute('data-plugin-update-footer') === name); if (footer) footer.scrollIntoView({ block: 'end', behavior: 'smooth' }); else { legacyHint = name; notify(); } }, has: name => registered && !!rowFor(name), row: rowFor, dispose() {
    close(); alive = false; clearTimeout(first); clearInterval(timer); pool.clients.delete(client);
    pool.listeners.delete(guardChanged); listeners.clear();
    for (const event of ['pointerdown', 'keydown', 'input']) document.removeEventListener(event, interaction, true);
    window.removeEventListener('pagehide', close);
    for (const controller of requests) controller.abort();
    for (const listener of pool.viewListeners) listener();
  } };
  return client;
}

/* STARDUSTLC_UPDATE_CLIENT_BODY_START */
window.__ModuleLoader__.load(__stardustUpdatesWrap({id:"dsh-minimal-ptc",factory:require=>({apply(){}})},{"name":"dsh-minimal-ptc","version":"0.1.0","hasWorkbench":false,"packageVersion":"0.6.10","label":"极简 PTC","labelEn":"Minimal PTC","suiteComponent":true,"sectionIds":[],"iconData":"data:image/webp;base64,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"}));

/* STARDUSTLC_UPDATE_CLIENT_BODY_END */
})();
