var app=function(){"use strict";function n(){}function t(n,t){for(const a in t)n[a]=t[a];return n}function a(n){return n()}function s(){return Object.create(null)}function e(n){n.forEach(a)}function o(n){return"function"==typeof n}function p(n,t){return n!=n?t==t:n!==t}function c(t,...a){if(null==t)return n;const s=t.subscribe(...a);return s.unsubscribe?()=>s.unsubscribe():s}function l(n,t,a){n.$$.on_destroy.push(c(t,a))}function u(n,t,a,s){if(n){const e=i(n,t,a,s);return n[0](e)}}function i(n,a,s,e){return n[1]&&e?t(s.ctx.slice(),n[1](e(a))):s.ctx}function r(n,t,a,s,e,o,p){const c=function(n,t,a,s){if(n[2]&&s){const e=n[2](s(a));if(void 0===t.dirty)return e;if("object"==typeof e){const n=[],a=Math.max(t.dirty.length,e.length);for(let s=0;s<a;s+=1)n[s]=t.dirty[s]|e[s];return n}return t.dirty|e}return t.dirty}(t,s,e,o);if(c){const e=i(t,a,s,p);n.p(e,c)}}function d(n){const t={};for(const a in n)"$"!==a[0]&&(t[a]=n[a]);return t}function k(n,t){const a={};t=new Set(t);for(const s in n)t.has(s)||"$"===s[0]||(a[s]=n[s]);return a}function f(n,t){n.appendChild(t)}function g(n,t,a){n.insertBefore(t,a||null)}function m(n){n.parentNode.removeChild(n)}function h(n){return document.createElement(n)}function $(n){return document.createTextNode(n)}function v(){return $(" ")}function b(n,t,a,s){return n.addEventListener(t,a,s),()=>n.removeEventListener(t,a,s)}function y(n,t,a){null==a?n.removeAttribute(t):n.getAttribute(t)!==a&&n.setAttribute(t,a)}function x(n,t){const a=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in t)null==t[s]?n.removeAttribute(s):"style"===s?n.style.cssText=t[s]:"__value"===s?n.value=n[s]=t[s]:a[s]&&a[s].set?n[s]=t[s]:y(n,s,t[s])}function L(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function _(n,t,a){n.classList[a?"add":"remove"](t)}let w;function R(n){w=n}function C(){if(!w)throw new Error("Function called outside component initialization");return w}function T(){const n=C();return(t,a)=>{const s=n.$$.callbacks[t];if(s){const e=function(n,t){const a=document.createEvent("CustomEvent");return a.initCustomEvent(n,!1,!1,t),a}(t,a);s.slice().forEach((t=>{t.call(n,e)}))}}}function E(n,t){const a=n.$$.callbacks[t.type];a&&a.slice().forEach((n=>n(t)))}const M=[],j=[],H=[],S=[],G=Promise.resolve();let O=!1;function A(){O||(O=!0,G.then(q))}function P(n){H.push(n)}function N(n){S.push(n)}let D=!1;const I=new Set;function q(){if(!D){D=!0;do{for(let n=0;n<M.length;n+=1){const t=M[n];R(t),B(t.$$)}for(R(null),M.length=0;j.length;)j.pop()();for(let n=0;n<H.length;n+=1){const t=H[n];I.has(t)||(I.add(t),t())}H.length=0}while(M.length);for(;S.length;)S.pop()();O=!1,D=!1,I.clear()}}function B(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(P)}}const U=new Set;function V(n,t){n&&n.i&&(U.delete(n),n.i(t))}function z(n,t,a,s){if(n&&n.o){if(U.has(n))return;U.add(n),undefined.c.push((()=>{U.delete(n),s&&(a&&n.d(1),s())})),n.o(t)}}function F(n,t){const a={},s={},e={$$scope:1};let o=n.length;for(;o--;){const p=n[o],c=t[o];if(c){for(const n in p)n in c||(s[n]=1);for(const n in c)e[n]||(a[n]=c[n],e[n]=1);n[o]=c}else for(const n in p)e[n]=1}for(const n in s)n in a||(a[n]=void 0);return a}function J(n,t,a){const s=n.$$.props[t];void 0!==s&&(n.$$.bound[s]=a,a(n.$$.ctx[s]))}function K(n){n&&n.c()}function Q(n,t,s){const{fragment:p,on_mount:c,on_destroy:l,after_update:u}=n.$$;p&&p.m(t,s),P((()=>{const t=c.map(a).filter(o);l?l.push(...t):e(t),n.$$.on_mount=[]})),u.forEach(P)}function W(n,t){const a=n.$$;null!==a.fragment&&(e(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function X(t,a,o,p,c,l,u=[-1]){const i=w;R(t);const r=a.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:s(),dirty:u,skip_bound:!1};let k=!1;if(d.ctx=o?o(t,r,((n,a,...s)=>{const e=s.length?s[0]:a;return d.ctx&&c(d.ctx[n],d.ctx[n]=e)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](e),k&&function(n,t){-1===n.$$.dirty[0]&&(M.push(n),A(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}(t,n)),a})):[],d.update(),k=!0,e(d.before_update),d.fragment=!!p&&p(d.ctx),a.target){if(a.hydrate){const n=function(n){return Array.from(n.childNodes)}(a.target);d.fragment&&d.fragment.l(n),n.forEach(m)}else d.fragment&&d.fragment.c();a.intro&&V(t.$$.fragment),Q(t,a.target,a.anchor),q()}R(i)}class Y{$destroy(){W(this,1),this.$destroy=n}$on(n,t){const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(t),()=>{const n=a.indexOf(t);-1!==n&&a.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function Z(a){let s,o,p,c,l,u,i,r=[a[4],{type:"radio"},{id:a[1]},{value:a[2]},{checked:a[0]}],d={};for(let n=0;n<r.length;n+=1)d=t(d,r[n]);return{c(){s=h("div"),o=h("input"),p=v(),c=h("label"),l=$(a[3]),x(o,d),y(c,"for",a[1]),_(s,"svelte-radio",!0)},m(n,t){g(n,s,t),f(s,o),f(s,p),f(s,c),f(c,l),u||(i=[b(o,"focus",a[5]),b(o,"blur",a[6]),b(o,"change",a[7]),b(o,"change",a[9]),b(o,"keydown",a[8])],u=!0)},p(n,[t]){x(o,d=F(r,[16&t&&n[4],{type:"radio"},2&t&&{id:n[1]},4&t&&{value:n[2]},1&t&&{checked:n[0]}])),8&t&&L(l,n[3]),2&t&&y(c,"for",n[1])},i:n,o:n,d(n){n&&m(s),u=!1,e(i)}}}function nn(n,a,s){const e=["id","value","label","checked"];let o=k(a,e),{id:p="radio-"+Math.random().toString(36)}=a,{value:c=""}=a,{label:l="Radio button label"}=a,{checked:u=!1}=a;const i=(r="RadioGroup",C().$$.context.get(r));var r;let f;var g;g=()=>{i&&i.remove({id:p}),f&&f()},C().$$.on_destroy.push(g);return n.$$set=n=>{a=t(t({},a),d(n)),s(4,o=k(a,e)),"id"in n&&s(1,p=n.id),"value"in n&&s(2,c=n.value),"label"in n&&s(3,l=n.label),"checked"in n&&s(0,u=n.checked)},n.$$.update=()=>{15&n.$$.dirty&&void 0!==i&&(i.add({id:p,value:c,label:l,checked:u}),u&&i.toggle({id:p}),f=i.items.subscribe((n=>{void 0!==n[p]&&s(0,u=n[p].checked)})))},[u,p,c,l,o,function(t){E(n,t)},function(t){E(n,t)},function(t){E(n,t)},function(t){E(n,t)},({target:n})=>{s(0,u=n.checked)}]}class tn extends Y{constructor(n){super(),X(this,n,nn,Z,p,{id:1,value:2,label:3,checked:0})}}const an=[];function sn(t,a=n){let s;const e=[];function o(n){if(o=n,((a=t)!=a?o==o:a!==o||a&&"object"==typeof a||"function"==typeof a)&&(t=n,s)){const n=!an.length;for(let n=0;n<e.length;n+=1){const a=e[n];a[1](),an.push(a,t)}if(n){for(let n=0;n<an.length;n+=2)an[n][0](an[n+1]);an.length=0}}var a,o}return{set:o,update:function(n){o(n(t))},subscribe:function(p,c=n){const l=[p,c];return e.push(l),1===e.length&&(s=a(o)||n),p(t),()=>{const n=e.indexOf(l);-1!==n&&e.splice(n,1),0===e.length&&(s(),s=null)}}}}function en(t,a,s){const p=!Array.isArray(t),l=p?[t]:t,u=a.length<2;return{subscribe:sn(s,(t=>{let s=!1;const i=[];let r=0,d=n;const k=()=>{if(r)return;d();const s=a(p?i[0]:i,t);u?t(s):d=o(s)?s:n},f=l.map(((n,t)=>c(n,(n=>{i[t]=n,r&=~(1<<t),s&&k()}),(()=>{r|=1<<t}))));return s=!0,k(),function(){e(f),d()}})).subscribe}}const on=n=>({}),pn=n=>({});function cn(n){let a,s,e;const o=n[7].legend,p=u(o,n,n[6],pn),c=p||function(n){let t,a;return{c(){t=h("legend"),a=$(n[0])},m(n,s){g(n,t,s),f(t,a)},p(n,t){1&t&&L(a,n[0])},d(n){n&&m(t)}}}(n),l=n[7].default,i=u(l,n,n[6],null);let d=[n[4]],k={};for(let n=0;n<d.length;n+=1)k=t(k,d[n]);return{c(){a=h("fieldset"),c&&c.c(),s=v(),i&&i.c(),x(a,k),_(a,"svelte-radio-group",!0)},m(n,t){g(n,a,t),c&&c.m(a,null),f(a,s),i&&i.m(a,null),e=!0},p(n,[t]){p?p.p&&64&t&&r(p,o,n,n[6],t,on,pn):c&&c.p&&1&t&&c.p(n,t),i&&i.p&&64&t&&r(i,l,n,n[6],t,null,null),x(a,k=F(d,[16&t&&n[4]])),_(a,"svelte-radio-group",!0)},i(n){e||(V(c,n),V(i,n),e=!0)},o(n){z(c,n),z(i,n),e=!1},d(n){n&&m(a),c&&c.d(n),i&&i.d(n)}}}function ln(n,a,s){const e=["legend","value"];let o,p,c,u=k(a,e),{$$slots:i={},$$scope:r}=a,{legend:f="Radio group legend"}=a,{value:g}=a;const m=T(),h=sn({});l(n,h,(n=>s(11,p=n)));const $=en(h,(n=>Object.values(n)));l(n,$,(n=>s(10,o=n)));const v=en($,(n=>n.map((({checked:n})=>n)).join("")));let b;l(n,v,(n=>s(12,c=n)));let y=g;function x(n){h.update((t=>(Object.keys(t).forEach((a=>{t[a].checked=a===n.id})),t)))}var L,_,w;return L="RadioGroup",_={items:h,add:n=>{h.update((t=>({...t,[n.id]:n})))},toggle:x,remove:n=>{h.update((t=>(delete t[n.id],t)))}},C().$$.context.set(L,_),w=()=>{if(0===o.filter((({checked:n})=>n)).length){const n=o.filter((n=>n.value===g))[0]||o[0];h.update((t=>(t[n.id].checked=!0,t)))}},C().$$.on_mount.push(w),function(n){C().$$.after_update.push(n)}((async()=>{if(g!==y){y=g;const n=Object.values(p).filter((n=>n.value===g))[0];void 0!==n&&x(n)}if(await(A(),G),void 0!==b&&c!==b){const n=o.filter((({checked:n})=>n))[0];s(5,g=n.value),m("change",{selected:{...n}})}b=c})),n.$$set=n=>{a=t(t({},a),d(n)),s(4,u=k(a,e)),"legend"in n&&s(0,f=n.legend),"value"in n&&s(5,g=n.value),"$$scope"in n&&s(6,r=n.$$scope)},[f,h,$,v,u,g,r,i]}class un extends Y{constructor(n){super(),X(this,n,ln,cn,p,{legend:0,value:5})}}function rn(t){let a,s,e,o,p,c;return a=new tn({props:{label:"Label 1",value:"1"}}),e=new tn({props:{label:"Label 2",value:"2"}}),p=new tn({props:{label:"Label 3",value:"3"}}),{c(){K(a.$$.fragment),s=v(),K(e.$$.fragment),o=v(),K(p.$$.fragment)},m(n,t){Q(a,n,t),g(n,s,t),Q(e,n,t),g(n,o,t),Q(p,n,t),c=!0},p:n,i(n){c||(V(a.$$.fragment,n),V(e.$$.fragment,n),V(p.$$.fragment,n),c=!0)},o(n){z(a.$$.fragment,n),z(e.$$.fragment,n),z(p.$$.fragment,n),c=!1},d(n){W(a,n),n&&m(s),W(e,n),n&&m(o),W(p,n)}}}function dn(t){let a,s,e,o,p,c,l;return a=new tn({props:{label:"Label 1",value:"1"}}),e=new tn({props:{label:"Label 2",value:"2"}}),p=new tn({props:{label:"Label 3",value:"3"}}),{c(){K(a.$$.fragment),s=v(),K(e.$$.fragment),o=v(),K(p.$$.fragment),c=v()},m(n,t){Q(a,n,t),g(n,s,t),Q(e,n,t),g(n,o,t),Q(p,n,t),g(n,c,t),l=!0},p:n,i(n){l||(V(a.$$.fragment,n),V(e.$$.fragment,n),V(p.$$.fragment,n),l=!0)},o(n){z(a.$$.fragment,n),z(e.$$.fragment,n),z(p.$$.fragment,n),l=!1},d(n){W(a,n),n&&m(s),W(e,n),n&&m(o),W(p,n),n&&m(c)}}}function kn(n){let t,a,s,e,o,p,c,l,u,i,r,d,k,x,_,w,R,C,T,E,M,H,S,G,O,A,P,D,I,q,B,U,F,X,Y,Z,nn,tn,an,sn,en,on,pn,cn,ln,kn,fn,gn,mn,hn,$n,vn,bn,yn,xn,Ln,_n,wn,Rn,Cn,Tn,En,Mn;function jn(t){n[1].call(null,t)}let Hn={label:"Radio group legend",$$slots:{default:[rn]},$$scope:{ctx:n}};function Sn(t){n[3].call(null,t)}void 0!==n[0]&&(Hn.value=n[0]),_=new un({props:Hn}),j.push((()=>J(_,"value",jn)));let Gn={label:"Radio group legend",$$slots:{default:[dn]},$$scope:{ctx:n}};return void 0!==n[0]&&(Gn.value=n[0]),gn=new un({props:Gn}),j.push((()=>J(gn,"value",Sn))),gn.$on("change",n[4]),{c(){t=h("main"),a=h("h1"),a.textContent="svelte-radio",s=v(),e=h("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-radio"><img src="https://img.shields.io/npm/v/svelte-radio.svg?color=blue" alt="NPM"/></a> \n<a href="https://travis-ci.com/metonym/svelte-radio"><img src="https://travis-ci.com/metonym/svelte-radio.svg?branch=master" alt="Build"/></a>',o=v(),p=h("blockquote"),p.innerHTML="<p>Composed Radio button group component for Svelte.</p>",c=v(),l=h("h2"),l.textContent="Install",u=v(),i=h("pre"),r=v(),d=h("h2"),d.textContent="Usage",k=v(),x=h("div"),K(_.$$.fragment),R=$("\n\nvalue:\n"),C=$(n[0]),T=v(),E=h("div"),M=h("button"),M.textContent='Set value to "2"',H=v(),S=h("pre"),G=v(),O=h("h3"),O.textContent="Styling",A=v(),P=h("p"),P.innerHTML="This component is unstyled by design. Use a global class selector to style the <code>.svelte-radio-group</code> and <code>.svelte-radio</code> classes.",D=v(),I=h("pre"),q=v(),B=h("h2"),B.textContent="API",U=v(),F=h("h3"),F.textContent="RadioGroup",X=v(),Y=h("table"),Y.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">legend</td> \n<td style="text-align:left"><code>string</code></td></tr> \n<tr><td style="text-align:left">value</td> \n<td style="text-align:left"><code>string</code> or <code>number</code> (default: <code>undefined</code>)</td></tr> \n<tr><td style="text-align:left"><code>...$$restProps</code></td> \n<td style="text-align:left">(forward to the top-level <code>fieldset</code> element)</td></tr></tbody>',Z=v(),nn=h("h3"),nn.textContent="Radio",tn=v(),an=h("table"),an.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">label</td> \n<td style="text-align:left"><code>string</code></td></tr> \n<tr><td style="text-align:left">value</td> \n<td style="text-align:left"><code>string</code> or <code>number</code> (default: <code>undefined</code>)</td></tr> \n<tr><td style="text-align:left">checked</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code></td></tr> \n<tr><td style="text-align:left"><code>...$$restProps</code></td> \n<td style="text-align:left">(forward to the second-level <code>input</code> element)</td></tr></tbody>',sn=v(),en=h("h2"),en.textContent="Dispatched events",on=v(),pn=h("h3"),pn.innerHTML="<code>Radio.Group</code>",cn=v(),ln=h("table"),ln.innerHTML='<thead><tr><th style="text-align:left">Event name</th> \n<th style="text-align:left">Description</th></tr></thead> \n<tbody><tr><td style="text-align:left"><code>on:change</code></td> \n<td style="text-align:left">triggered if the selection changes</td></tr></tbody>',kn=v(),fn=h("div"),K(gn.$$.fragment),hn=h("pre"),$n=v(),vn=h("h2"),vn.textContent="TypeScript support",bn=v(),yn=h("p"),yn.textContent="Svelte version 3.31 or greater is required to use this module with TypeScript.",xn=v(),Ln=h("h2"),Ln.innerHTML='<a href="https://github.com/metonym/svelte-radio/tree/master/CHANGELOG.md">Changelog</a>',_n=v(),wn=h("h2"),wn.textContent="License",Rn=v(),Cn=h("p"),Cn.innerHTML='<a href="https://github.com/metonym/svelte-radio/tree/master/LICENSE">MIT</a>',y(i,"class","language-bash"),y(M,"type","button"),y(x,"class","code-fence"),y(S,"class","language-svelte"),y(S,"data-svelte",""),y(I,"class","language-html"),y(fn,"class","code-fence"),y(hn,"class","language-svelte"),y(hn,"data-svelte",""),y(t,"class","markdown-body")},m(m,h){g(m,t,h),f(t,a),f(t,s),f(t,e),f(t,o),f(t,p),f(t,c),f(t,l),f(t,u),f(t,i),i.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-radio\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-radio\n',f(t,r),f(t,d),f(t,k),f(t,x),Q(_,x,null),f(x,R),f(x,C),f(x,T),f(x,E),f(E,M),f(E,H),f(t,S),S.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> RadioGroup<span class="token punctuation">,</span> Radio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-radio"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Radio group legend<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 1<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 2<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 3<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n\nvalue:\n<span class="token language-javascript"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n    <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      value <span class="token operator">=</span> <span class="token string">\'2\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>Set value to "2"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',f(t,G),f(t,O),f(t,A),f(t,P),f(t,D),f(t,I),I.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">:global(.svelte-radio-group)</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #e0e0e0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">:global(.svelte-radio)</span> <span class="token punctuation">{</span>\n    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">:global(.svelte-radio label)</span> <span class="token punctuation">{</span>\n    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n',f(t,q),f(t,B),f(t,U),f(t,F),f(t,X),f(t,Y),f(t,Z),f(t,nn),f(t,tn),f(t,an),f(t,sn),f(t,en),f(t,on),f(t,pn),f(t,cn),f(t,ln),f(t,kn),f(t,fn),Q(gn,fn,null),f(t,hn),hn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioGroup</span>\n  <span class="token attr-name"><span class="token namespace">bind:</span>value</span>\n  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Radio group legend<span class="token punctuation">"</span></span>\n  <span class="token attr-name"><span class="token namespace">on:</span>change=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 1<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 2<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Label 3<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RadioGroup</span><span class="token punctuation">></span></span>\n',f(t,$n),f(t,vn),f(t,bn),f(t,yn),f(t,xn),f(t,Ln),f(t,_n),f(t,wn),f(t,Rn),f(t,Cn),Tn=!0,En||(Mn=b(M,"click",n[2]),En=!0)},p(n,[t]){const a={};32&t&&(a.$$scope={dirty:t,ctx:n}),!w&&1&t&&(w=!0,a.value=n[0],N((()=>w=!1))),_.$set(a),(!Tn||1&t)&&L(C,n[0]);const s={};32&t&&(s.$$scope={dirty:t,ctx:n}),!mn&&1&t&&(mn=!0,s.value=n[0],N((()=>mn=!1))),gn.$set(s)},i(n){Tn||(V(_.$$.fragment,n),V(gn.$$.fragment,n),Tn=!0)},o(n){z(_.$$.fragment,n),z(gn.$$.fragment,n),Tn=!1},d(n){n&&m(t),W(_),W(gn),En=!1,Mn()}}}function fn(n,t,a){let s="1";return[s,function(n){s=n,a(0,s)},()=>{a(0,s="2")},function(n){s=n,a(0,s)},n=>{console.log(n.detail)}]}return new class extends Y{constructor(n){super(),X(this,n,fn,kn,p,{})}}({target:document.body})}();
