(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Gr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},we=[],Et=()=>{},bs=()=>!1,ys=/^on[^a-z]/,Vn=t=>ys.test(t),Zr=t=>t.startsWith("onUpdate:"),rt=Object.assign,Qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_s=Object.prototype.hasOwnProperty,U=(t,e)=>_s.call(t,e),M=Array.isArray,ke=t=>Xn(t)==="[object Map]",Yi=t=>Xn(t)==="[object Set]",j=t=>typeof t=="function",et=t=>typeof t=="string",ta=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",Wi=t=>J(t)&&j(t.then)&&j(t.catch),Ki=Object.prototype.toString,Xn=t=>Ki.call(t),xs=t=>Xn(t).slice(8,-1),Vi=t=>Xn(t)==="[object Object]",ea=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ws=/-(\w)/g,Ce=qn(t=>t.replace(ws,(e,n)=>n?n.toUpperCase():"")),ks=/\B([A-Z])/g,Ne=qn(t=>t.replace(ks,"-$1").toLowerCase()),Xi=qn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ur=qn(t=>t?`on${Xi(t)}`:""),Xe=(t,e)=>!Object.is(t,e),Sn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ar=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let za;const Or=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function na(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=et(r)?Cs(r):na(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(et(t))return t;if(J(t))return t}}const As=/;(?![^(]*\))/g,Os=/:([^]+)/,Es=/\/\*[^]*?\*\//g;function Cs(t){const e={};return t.replace(Es,"").split(As).forEach(n=>{if(n){const r=n.split(Os);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ra(t){let e="";if(et(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=ra(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Is=Gr(Ps);function qi(t){return!!t||t===""}const Ts=t=>et(t)?t:t==null?"":M(t)||J(t)&&(t.toString===Ki||!j(t.toString))?JSON.stringify(t,Ji,2):String(t),Ji=(t,e)=>e&&e.__v_isRef?Ji(t,e.value):ke(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Yi(e)?{[`Set(${e.size})`]:[...e.values()]}:J(e)&&!M(e)&&!Vi(e)?String(e):e;let _t;class Ss{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ns(t,e=_t){e&&e.active&&e.effects.push(t)}function Ms(){return _t}const aa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gi=t=>(t.w&Gt)>0,Zi=t=>(t.n&Gt)>0,Fs=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gt},Rs=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Gi(a)&&!Zi(a)?a.delete(t):e[n++]=a,a.w&=~Gt,a.n&=~Gt}e.length=n}},Er=new WeakMap;let $e=0,Gt=1;const Cr=30;let wt;const ue=Symbol(""),Pr=Symbol("");class ia{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ns(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,qt=!0,Gt=1<<++$e,$e<=Cr?Fs(this):Da(this),this.fn()}finally{$e<=Cr&&Rs(this),Gt=1<<--$e,wt=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Qi=[];function Me(){Qi.push(qt),qt=!1}function Fe(){const t=Qi.pop();qt=t===void 0?!0:t}function mt(t,e,n){if(qt&&wt){let r=Er.get(t);r||Er.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=aa()),to(a)}}function to(t,e){let n=!1;$e<=Cr?Zi(t)||(t.n|=Gt,n=!Gi(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function $t(t,e,n,r,a,i){const o=Er.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&M(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":M(t)?ea(n)&&s.push(o.get("length")):(s.push(o.get(ue)),ke(t)&&s.push(o.get(Pr)));break;case"delete":M(t)||(s.push(o.get(ue)),ke(t)&&s.push(o.get(Pr)));break;case"set":ke(t)&&s.push(o.get(ue));break}if(s.length===1)s[0]&&Ir(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ir(aa(l))}}function Ir(t,e){const n=M(t)?t:[...t];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ls=Gr("__proto__,__v_isRef,__isVue"),eo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ta)),js=oa(),zs=oa(!1,!0),Ds=oa(!0),Ua=$s();function $s(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Me();const r=B(this)[e].apply(this,n);return Fe(),r}}),t}function Us(t){const e=B(this);return mt(e,"has",t),e.hasOwnProperty(t)}function oa(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(t?e?rl:oo:e?io:ao).get(r))return r;const o=M(r);if(!t){if(o&&U(Ua,a))return Reflect.get(Ua,a,i);if(a==="hasOwnProperty")return Us}const s=Reflect.get(r,a,i);return(ta(a)?eo.has(a):Ls(a))||(t||mt(r,"get",a),e)?s:lt(s)?o&&ea(a)?s:s.value:J(s)?t?so(s):on(s):s}}const Bs=no(),Hs=no(!0);function no(t=!1){return function(n,r,a,i){let o=n[r];if(Pe(o)&&lt(o)&&!lt(a))return!1;if(!t&&(!Dn(a)&&!Pe(a)&&(o=B(o),a=B(a)),!M(n)&&lt(o)&&!lt(a)))return o.value=a,!0;const s=M(n)&&ea(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Xe(a,o)&&$t(n,"set",r,a):$t(n,"add",r,a)),l}}function Ys(t,e){const n=U(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&$t(t,"delete",e,void 0),r}function Ws(t,e){const n=Reflect.has(t,e);return(!ta(e)||!eo.has(e))&&mt(t,"has",e),n}function Ks(t){return mt(t,"iterate",M(t)?"length":ue),Reflect.ownKeys(t)}const ro={get:js,set:Bs,deleteProperty:Ys,has:Ws,ownKeys:Ks},Vs={get:Ds,set(t,e){return!0},deleteProperty(t,e){return!0}},Xs=rt({},ro,{get:zs,set:Hs}),sa=t=>t,Jn=t=>Reflect.getPrototypeOf(t);function hn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(e!==i&&mt(a,"get",e),mt(a,"get",i));const{has:o}=Jn(a),s=r?sa:n?ca:qe;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function gn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(t!==a&&mt(r,"has",t),mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function vn(t,e=!1){return t=t.__v_raw,!e&&mt(B(t),"iterate",ue),Reflect.get(t,"size",t)}function Ba(t){t=B(t);const e=B(this);return Jn(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Ha(t,e){e=B(e);const n=B(this),{has:r,get:a}=Jn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Xe(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function Ya(t){const e=B(this),{has:n,get:r}=Jn(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&$t(e,"delete",t,void 0),i}function Wa(){const t=B(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function bn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=e?sa:t?ca:qe;return!t&&mt(s,"iterate",ue),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function yn(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),o=ke(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?sa:e?ca:qe;return!e&&mt(i,"iterate",l?Pr:ue),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function qs(){const t={get(i){return hn(this,i)},get size(){return vn(this)},has:gn,add:Ba,set:Ha,delete:Ya,clear:Wa,forEach:bn(!1,!1)},e={get(i){return hn(this,i,!1,!0)},get size(){return vn(this)},has:gn,add:Ba,set:Ha,delete:Ya,clear:Wa,forEach:bn(!1,!0)},n={get(i){return hn(this,i,!0)},get size(){return vn(this,!0)},has(i){return gn.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:bn(!0,!1)},r={get(i){return hn(this,i,!0,!0)},get size(){return vn(this,!0)},has(i){return gn.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yn(i,!1,!1),n[i]=yn(i,!0,!1),e[i]=yn(i,!1,!0),r[i]=yn(i,!0,!0)}),[t,n,e,r]}const[Js,Gs,Zs,Qs]=qs();function la(t,e){const n=e?t?Qs:Zs:t?Gs:Js;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const tl={get:la(!1,!1)},el={get:la(!1,!0)},nl={get:la(!0,!1)},ao=new WeakMap,io=new WeakMap,oo=new WeakMap,rl=new WeakMap;function al(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function il(t){return t.__v_skip||!Object.isExtensible(t)?0:al(xs(t))}function on(t){return Pe(t)?t:fa(t,!1,ro,tl,ao)}function ol(t){return fa(t,!1,Xs,el,io)}function so(t){return fa(t,!0,Vs,nl,oo)}function fa(t,e,n,r,a){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=il(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Ae(t){return Pe(t)?Ae(t.__v_raw):!!(t&&t.__v_isReactive)}function Pe(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function lo(t){return Ae(t)||Pe(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function fo(t){return zn(t,"__v_skip",!0),t}const qe=t=>J(t)?on(t):t,ca=t=>J(t)?so(t):t;function co(t){qt&&wt&&(t=B(t),to(t.dep||(t.dep=aa())))}function uo(t,e){t=B(t);const n=t.dep;n&&Ir(n)}function lt(t){return!!(t&&t.__v_isRef===!0)}function mo(t){return sl(t,!1)}function sl(t,e){return lt(t)?t:new ll(t,e)}class ll{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:qe(e)}get value(){return co(this),this._value}set value(e){const n=this.__v_isShallow||Dn(e)||Pe(e);e=n?e:B(e),Xe(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qe(e),uo(this))}}function ht(t){return lt(t)?t.value:t}const fl={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return lt(a)&&!lt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function po(t){return Ae(t)?t:new Proxy(t,fl)}class cl{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ia(e,()=>{this._dirty||(this._dirty=!0,uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return co(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ul(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=Et):(r=t.get,a=t.set),new cl(r,a,i||!a,n)}function Jt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Gn(i,e,n)}return a}function Ct(t,e,n,r){if(j(t)){const i=Jt(t,e,n,r);return i&&Wi(i)&&i.catch(o=>{Gn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Ct(t[i],e,n,r));return a}function Gn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,s]);return}}dl(t,n,a,r)}function dl(t,e,n,r=!0){console.error(t)}let Je=!1,Tr=!1;const ot=[];let Nt=0;const Oe=[];let jt=null,oe=0;const ho=Promise.resolve();let ua=null;function ml(t){const e=ua||ho;return t?e.then(this?t.bind(this):t):e}function pl(t){let e=Nt+1,n=ot.length;for(;e<n;){const r=e+n>>>1;Ge(ot[r])<t?e=r+1:n=r}return e}function da(t){(!ot.length||!ot.includes(t,Je&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?ot.push(t):ot.splice(pl(t.id),0,t),go())}function go(){!Je&&!Tr&&(Tr=!0,ua=ho.then(bo))}function hl(t){const e=ot.indexOf(t);e>Nt&&ot.splice(e,1)}function gl(t){M(t)?Oe.push(...t):(!jt||!jt.includes(t,t.allowRecurse?oe+1:oe))&&Oe.push(t),go()}function Ka(t,e=Je?Nt+1:0){for(;e<ot.length;e++){const n=ot[e];n&&n.pre&&(ot.splice(e,1),e--,n())}}function vo(t){if(Oe.length){const e=[...new Set(Oe)];if(Oe.length=0,jt){jt.push(...e);return}for(jt=e,jt.sort((n,r)=>Ge(n)-Ge(r)),oe=0;oe<jt.length;oe++)jt[oe]();jt=null,oe=0}}const Ge=t=>t.id==null?1/0:t.id,vl=(t,e)=>{const n=Ge(t)-Ge(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bo(t){Tr=!1,Je=!0,ot.sort(vl);const e=Et;try{for(Nt=0;Nt<ot.length;Nt++){const n=ot[Nt];n&&n.active!==!1&&Jt(n,null,14)}}finally{Nt=0,ot.length=0,vo(),Je=!1,ua=null,(ot.length||Oe.length)&&bo()}}function bl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||V;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||V;v&&(a=n.map(w=>et(w)?w.trim():w)),m&&(a=n.map(Ar))}let s,l=r[s=ur(e)]||r[s=ur(Ce(e))];!l&&i&&(l=r[s=ur(Ne(e))]),l&&Ct(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Ct(c,t,6,a)}}function yo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!j(t)){const l=c=>{const u=yo(c,e,!0);u&&(s=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(J(t)&&r.set(t,null),null):(M(i)?i.forEach(l=>o[l]=null):rt(o,i),J(t)&&r.set(t,o),o)}function Zn(t,e){return!t||!Vn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Ne(e))||U(t,e))}let kt=null,Qn=null;function $n(t){const e=kt;return kt=t,Qn=t&&t.type.__scopeId||null,e}function ma(t){Qn=t}function pa(){Qn=null}function yl(t,e=kt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ni(-1);const i=$n(e);let o;try{o=t(...a)}finally{$n(i),r._d&&ni(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:w,ctx:z,inheritAttrs:N}=t;let $,k;const O=$n(t);try{if(n.shapeFlag&4){const I=a||r;$=St(u.call(I,I,m,i,w,v,z)),k=l}else{const I=e;$=St(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=e.props?l:_l(l)}}catch(I){Ye.length=0,Gn(I,t,1),$=tt(me)}let F=$;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:H}=F;I.length&&H&7&&(o&&I.some(Zr)&&(k=xl(k,o)),F=Ie(F,k))}return n.dirs&&(F=Ie(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),$=F,$n(O),$}const _l=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vn(n))&&((e||(e={}))[n]=t[n]);return e},xl=(t,e)=>{const n={};for(const r in t)(!Zr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Va(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Zn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Va(r,o,c):!0:!!o;return!1}function Va(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Zn(n,i))return!0}return!1}function kl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Al=t=>t.__isSuspense;function Ol(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):gl(t)}const _n={};function Nn(t,e,n){return _o(t,e,n)}function _o(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=Ms()===((s=st)==null?void 0:s.scope)?st:null;let c,u=!1,m=!1;if(lt(t)?(c=()=>t.value,u=Dn(t)):Ae(t)?(c=()=>t,r=!0):M(t)?(m=!0,u=t.some(I=>Ae(I)||Dn(I)),c=()=>t.map(I=>{if(lt(I))return I.value;if(Ae(I))return le(I);if(j(I))return Jt(I,l,2)})):j(t)?e?c=()=>Jt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ct(t,l,3,[w])}:c=Et,e&&r){const I=c;c=()=>le(I())}let v,w=I=>{v=O.onStop=()=>{Jt(I,l,4)}},z;if(Qe)if(w=Et,e?n&&Ct(e,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=wf();z=I.__watcherHandles||(I.__watcherHandles=[])}else return Et;let N=m?new Array(t.length).fill(_n):_n;const $=()=>{if(O.active)if(e){const I=O.run();(r||u||(m?I.some((H,at)=>Xe(H,N[at])):Xe(I,N)))&&(v&&v(),Ct(e,l,3,[I,N===_n?void 0:m&&N[0]===_n?[]:N,w]),N=I)}else O.run()};$.allowRecurse=!!e;let k;a==="sync"?k=$:a==="post"?k=()=>dt($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),k=()=>da($));const O=new ia(c,k);e?n?$():N=O.run():a==="post"?dt(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Qr(l.scope.effects,O)};return z&&z.push(F),F}function El(t,e,n){const r=this.proxy,a=et(t)?t.includes(".")?xo(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=st;Te(this);const s=_o(a,i.bind(r),n);return o?Te(o):de(),s}function xo(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function le(t,e){if(!J(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))le(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)le(t[n],e);else if(Yi(t)||ke(t))t.forEach(n=>{le(n,e)});else if(Vi(t))for(const n in t)le(t[n],e);return t}function mr(t,e){const n=kt;if(n===null)return t;const r=rr(n)||n.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,l,c=V]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&le(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return t}function re(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Me(),Ct(l,n,8,[t.el,s,t,e]),Fe())}}function Re(t,e){return j(t)?(()=>rt({name:t.name},e,{setup:t}))():t}const Mn=t=>!!t.type.__asyncLoader,wo=t=>t.type.__isKeepAlive;function Cl(t,e){ko(t,"a",e)}function Pl(t,e){ko(t,"da",e)}function ko(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(tr(e,r,n),n){let a=n.parent;for(;a&&a.parent;)wo(a.parent.vnode)&&Il(r,e,n,a),a=a.parent}}function Il(t,e,n,r){const a=tr(e,t,r,!0);Ao(()=>{Qr(r[e],a)},n)}function tr(t,e,n=st,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Me(),Te(n);const s=Ct(e,n,t,o);return de(),Fe(),s});return r?a.unshift(i):a.push(i),i}}const Yt=t=>(e,n=st)=>(!Qe||t==="sp")&&tr(t,(...r)=>e(...r),n),Tl=Yt("bm"),Sl=Yt("m"),Nl=Yt("bu"),Ml=Yt("u"),Fl=Yt("bum"),Ao=Yt("um"),Rl=Yt("sp"),Ll=Yt("rtg"),jl=Yt("rtc");function zl(t,e=st){tr("ec",t,e)}const Dl=Symbol.for("v-ndc");function $l(t,e,n,r){let a;const i=n&&n[r];if(M(t)||et(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(J(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Sr=t=>t?Lo(t)?rr(t)||t.proxy:Sr(t.parent):null,He=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>da(t.update)),$nextTick:t=>t.n||(t.n=ml.bind(t.proxy)),$watch:t=>El.bind(t)}),pr=(t,e)=>t!==V&&!t.__isScriptSetup&&U(t,e),Ul={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(pr(r,e))return o[e]=1,r[e];if(a!==V&&U(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,i[e];if(n!==V&&U(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const u=He[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==V&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return pr(a,e)?(a[e]=n,!0):r!==V&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==V&&U(t,o)||pr(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(He,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xa(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nr=!0;function Bl(t){const e=ha(t),n=t.proxy,r=t.ctx;Nr=!1,e.beforeCreate&&qa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:w,updated:z,activated:N,deactivated:$,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:I,render:H,renderTracked:at,renderTriggered:it,errorCaptured:bt,serverPrefetch:vt,expose:Rt,inheritAttrs:je,components:un,directives:dn,filters:lr}=e;if(c&&Hl(c,r,null),o)for(const G in o){const W=o[G];j(W)&&(r[G]=W.bind(n))}if(a){const G=a.call(n,n);J(G)&&(t.data=on(G))}if(Nr=!0,i)for(const G in i){const W=i[G],ee=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):Et,mn=!j(W)&&j(W.set)?W.set.bind(n):Et,ne=ie({get:ee,set:mn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>ne.value,set:Pt=>ne.value=Pt})}if(s)for(const G in s)Oo(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{ql(W,G[W])})}u&&qa(u,t,"c");function ft(G,W){M(W)?W.forEach(ee=>G(ee.bind(n))):W&&G(W.bind(n))}if(ft(Tl,m),ft(Sl,v),ft(Nl,w),ft(Ml,z),ft(Cl,N),ft(Pl,$),ft(zl,bt),ft(jl,at),ft(Ll,it),ft(Fl,O),ft(Ao,I),ft(Rl,vt),M(Rt))if(Rt.length){const G=t.exposed||(t.exposed={});Rt.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:ee=>n[W]=ee})})}else t.exposed||(t.exposed={});H&&t.render===Et&&(t.render=H),je!=null&&(t.inheritAttrs=je),un&&(t.components=un),dn&&(t.directives=dn)}function Hl(t,e,n=Et){M(t)&&(t=Mr(t));for(const r in t){const a=t[r];let i;J(a)?"default"in a?i=Fn(a.from||r,a.default,!0):i=Fn(a.from||r):i=Fn(a),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qa(t,e,n){Ct(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oo(t,e,n,r){const a=r.includes(".")?xo(n,r):()=>n[r];if(et(t)){const i=e[t];j(i)&&Nn(a,i)}else if(j(t))Nn(a,t.bind(n));else if(J(t))if(M(t))t.forEach(i=>Oo(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Nn(a,i,t)}}function ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,e,o)),J(e)&&i.set(e,l),l}function Un(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Un(t,i,n,!0),a&&a.forEach(o=>Un(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Yl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Yl={data:Ja,props:Ga,emits:Ga,methods:Ue,computed:Ue,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Ue,directives:Ue,watch:Kl,provide:Ja,inject:Wl};function Ja(t,e){return e?t?function(){return rt(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Wl(t,e){return Ue(Mr(t),Mr(e))}function Mr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Ue(t,e){return t?rt(Object.create(null),t,e):e}function Ga(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:rt(Object.create(null),Xa(t),Xa(e??{})):e}function Kl(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function Eo(){return{app:null,config:{isNativeTag:bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Xl(t,e){return function(r,a=null){j(r)||(r=rt({},r)),a!=null&&!J(a)&&(a=null);const i=Eo(),o=new Set;let s=!1;const l=i.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:kf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=tt(r,a);return v.appContext=i,u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,rr(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Bn=l;try{return c()}finally{Bn=null}}};return l}}let Bn=null;function ql(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Fn(t,e,n=!1){const r=st||kt;if(r||Bn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Jl(t,e,n,r=!1){const a={},i={};zn(i,nr,1),t.propsDefaults=Object.create(null),Co(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:ol(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Gl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=B(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Zn(t.emitsOptions,v))continue;const w=e[v];if(l)if(U(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const z=Ce(v);a[z]=Fr(l,s,z,w,t,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{Co(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Ne(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Fr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m))&&(delete i[m],c=!0)}c&&$t(t,"set","$attrs")}function Co(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(Tn(l))continue;const c=e[l];let u;a&&U(a,u=Ce(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Zn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||V;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Fr(a,l,m,c[m],t,!U(c,m))}}return o}function Fr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Te(a),r=c[n]=l.call(null,e),de())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ne(n))&&(r=!0))}return r}function Po(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!j(t)){const u=m=>{l=!0;const[v,w]=Po(m,e,!0);rt(o,v),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return J(t)&&r.set(t,we),we;if(M(i))for(let u=0;u<i.length;u++){const m=Ce(i[u]);Za(m)&&(o[m]=V)}else if(i)for(const u in i){const m=Ce(u);if(Za(m)){const v=i[u],w=o[m]=M(v)||j(v)?{type:v}:rt({},v);if(w){const z=ei(Boolean,w.type),N=ei(String,w.type);w[0]=z>-1,w[1]=N<0||z<N,(z>-1||U(w,"default"))&&s.push(m)}}}const c=[o,s];return J(t)&&r.set(t,c),c}function Za(t){return t[0]!=="$"}function Qa(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ti(t,e){return Qa(t)===Qa(e)}function ei(t,e){return M(e)?e.findIndex(n=>ti(n,t)):j(e)&&ti(e,t)?0:-1}const Io=t=>t[0]==="_"||t==="$stable",ga=t=>M(t)?t.map(St):[St(t)],Zl=(t,e,n)=>{if(e._n)return e;const r=yl((...a)=>ga(e(...a)),n);return r._c=!1,r},To=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Io(a))continue;const i=t[a];if(j(i))e[a]=Zl(a,i,r);else if(i!=null){const o=ga(i);e[a]=()=>o}}},So=(t,e)=>{const n=ga(e);t.slots.default=()=>n},Ql=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),zn(e,"_",n)):To(e,t.slots={})}else t.slots={},e&&So(t,e);zn(t.slots,nr,1)},tf=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=V;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(rt(a,e),!n&&s===1&&delete a._):(i=!e.$stable,To(e,a)),o=e}else e&&(So(t,e),o={default:1});if(i)for(const s in a)!Io(s)&&!(s in o)&&delete a[s]};function Rr(t,e,n,r,a=!1){if(M(t)){t.forEach((v,w)=>Rr(v,e&&(M(e)?e[w]:e),n,r,a));return}if(Mn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,U(m,c)&&(m[c]=null)):lt(c)&&(c.value=null)),j(l))Jt(l,s,12,[o,u]);else{const v=et(l),w=lt(l);if(v||w){const z=()=>{if(t.f){const N=v?U(m,l)?m[l]:u[l]:l.value;a?M(N)&&Qr(N,i):M(N)?N.includes(i)||N.push(i):v?(u[l]=[i],U(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(u[t.k]=o))};o?(z.id=-1,dt(z,n)):z()}}}const dt=Ol;function ef(t){return nf(t)}function nf(t,e){const n=Or();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:w=Et,insertStaticContent:z}=t,N=(f,d,p,g=null,h=null,_=null,A=!1,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!De(f,d)&&(g=pn(f),Pt(f,h,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:C}=d;switch(b){case er:$(f,d,p,g);break;case me:k(f,d,p,g);break;case hr:f==null&&O(d,p,g,A);break;case xt:un(f,d,p,g,h,_,A,y,x);break;default:C&1?H(f,d,p,g,h,_,A,y,x):C&6?dn(f,d,p,g,h,_,A,y,x):(C&64||C&128)&&b.process(f,d,p,g,h,_,A,y,x,ge)}T!=null&&h&&Rr(T,f&&f.ref,_,d||f,!d)},$=(f,d,p,g)=>{if(f==null)r(d.el=s(d.children),p,g);else{const h=d.el=f.el;d.children!==f.children&&c(h,d.children)}},k=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},O=(f,d,p,g)=>{[f.el,f.anchor]=z(f.children,d,p,g,f.el,f.anchor)},F=({el:f,anchor:d},p,g)=>{let h;for(;f&&f!==d;)h=v(f),r(f,p,g),f=h;r(d,p,g)},I=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),a(f),f=p;a(d)},H=(f,d,p,g,h,_,A,y,x)=>{A=A||d.type==="svg",f==null?at(d,p,g,h,_,A,y,x):vt(f,d,h,_,A,y,x)},at=(f,d,p,g,h,_,A,y)=>{let x,b;const{type:T,props:C,shapeFlag:S,transition:R,dirs:D}=f;if(x=f.el=o(f.type,_,C&&C.is,C),S&8?u(x,f.children):S&16&&bt(f.children,x,null,g,h,_&&T!=="foreignObject",A,y),D&&re(f,null,g,"created"),it(x,f,f.scopeId,A,g),C){for(const Y in C)Y!=="value"&&!Tn(Y)&&i(x,Y,null,C[Y],_,f.children,g,h,Lt);"value"in C&&i(x,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Tt(b,g,f)}D&&re(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;K&&R.beforeEnter(x),r(x,d,p),((b=C&&C.onVnodeMounted)||K||D)&&dt(()=>{b&&Tt(b,g,f),K&&R.enter(x),D&&re(f,null,g,"mounted")},h)},it=(f,d,p,g,h)=>{if(p&&w(f,p),g)for(let _=0;_<g.length;_++)w(f,g[_]);if(h){let _=h.subTree;if(d===_){const A=h.vnode;it(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},bt=(f,d,p,g,h,_,A,y,x=0)=>{for(let b=x;b<f.length;b++){const T=f[b]=y?Xt(f[b]):St(f[b]);N(null,T,d,p,g,h,_,A,y)}},vt=(f,d,p,g,h,_,A)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:T}=d;x|=f.patchFlag&16;const C=f.props||V,S=d.props||V;let R;p&&ae(p,!1),(R=S.onVnodeBeforeUpdate)&&Tt(R,p,d,f),T&&re(d,f,p,"beforeUpdate"),p&&ae(p,!0);const D=h&&d.type!=="foreignObject";if(b?Rt(f.dynamicChildren,b,y,p,g,D,_):A||W(f,d,y,null,p,g,D,_,!1),x>0){if(x&16)je(y,d,C,S,p,g,h);else if(x&2&&C.class!==S.class&&i(y,"class",null,S.class,h),x&4&&i(y,"style",C.style,S.style,h),x&8){const K=d.dynamicProps;for(let Y=0;Y<K.length;Y++){const Q=K[Y],yt=C[Q],ve=S[Q];(ve!==yt||Q==="value")&&i(y,Q,yt,ve,h,f.children,p,g,Lt)}}x&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&je(y,d,C,S,p,g,h);((R=S.onVnodeUpdated)||T)&&dt(()=>{R&&Tt(R,p,d,f),T&&re(d,f,p,"updated")},g)},Rt=(f,d,p,g,h,_,A)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],T=x.el&&(x.type===xt||!De(x,b)||x.shapeFlag&70)?m(x.el):p;N(x,b,T,null,g,h,_,A,!0)}},je=(f,d,p,g,h,_,A)=>{if(p!==g){if(p!==V)for(const y in p)!Tn(y)&&!(y in g)&&i(f,y,p[y],null,A,d.children,h,_,Lt);for(const y in g){if(Tn(y))continue;const x=g[y],b=p[y];x!==b&&y!=="value"&&i(f,y,b,x,A,d.children,h,_,Lt)}"value"in g&&i(f,"value",p.value,g.value)}},un=(f,d,p,g,h,_,A,y,x)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:R}=d;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(T,p,g),bt(d.children,p,T,h,_,A,y,x)):C>0&&C&64&&S&&f.dynamicChildren?(Rt(f.dynamicChildren,S,p,h,_,A,y),(d.key!=null||h&&d===h.subTree)&&No(f,d,!0)):W(f,d,p,T,h,_,A,y,x)},dn=(f,d,p,g,h,_,A,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?h.ctx.activate(d,p,g,A,x):lr(d,p,g,h,_,A,x):Na(f,d,x)},lr=(f,d,p,g,h,_,A)=>{const y=f.component=pf(f,g,h);if(wo(f)&&(y.ctx.renderer=ge),hf(y),y.asyncDep){if(h&&h.registerDep(y,ft),!f.el){const x=y.subTree=tt(me);k(null,x,d,p)}return}ft(y,f,d,p,h,_,A)},Na=(f,d,p)=>{const g=d.component=f.component;if(wl(f,d,p))if(g.asyncDep&&!g.asyncResolved){G(g,d,p);return}else g.next=d,hl(g.update),g.update();else d.el=f.el,g.vnode=d},ft=(f,d,p,g,h,_,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:C,u:S,parent:R,vnode:D}=f,K=T,Y;ae(f,!1),T?(T.el=D.el,G(f,T,A)):T=D,C&&Sn(C),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Tt(Y,R,T,D),ae(f,!0);const Q=dr(f),yt=f.subTree;f.subTree=Q,N(yt,Q,m(yt.el),pn(yt),f,h,_),T.el=Q.el,K===null&&kl(f,Q.el),S&&dt(S,h),(Y=T.props&&T.props.onVnodeUpdated)&&dt(()=>Tt(Y,R,T,D),h)}else{let T;const{el:C,props:S}=d,{bm:R,m:D,parent:K}=f,Y=Mn(d);if(ae(f,!1),R&&Sn(R),!Y&&(T=S&&S.onVnodeBeforeMount)&&Tt(T,K,d),ae(f,!0),C&&cr){const Q=()=>{f.subTree=dr(f),cr(C,f.subTree,f,h,null)};Y?d.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=dr(f);N(null,Q,p,g,f,h,_),d.el=Q.el}if(D&&dt(D,h),!Y&&(T=S&&S.onVnodeMounted)){const Q=d;dt(()=>Tt(T,K,Q),h)}(d.shapeFlag&256||K&&Mn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&dt(f.a,h),f.isMounted=!0,d=p=g=null}},x=f.effect=new ia(y,()=>da(b),f.scope),b=f.update=()=>x.run();b.id=f.uid,ae(f,!0),b()},G=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Gl(f,d.props,g,p),tf(f,d.children,p),Me(),Ka(),Fe()},W=(f,d,p,g,h,_,A,y,x=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,C=d.children,{patchFlag:S,shapeFlag:R}=d;if(S>0){if(S&128){mn(b,C,p,g,h,_,A,y,x);return}else if(S&256){ee(b,C,p,g,h,_,A,y,x);return}}R&8?(T&16&&Lt(b,h,_),C!==b&&u(p,C)):T&16?R&16?mn(b,C,p,g,h,_,A,y,x):Lt(b,h,_,!0):(T&8&&u(p,""),R&16&&bt(C,p,g,h,_,A,y,x))},ee=(f,d,p,g,h,_,A,y,x)=>{f=f||we,d=d||we;const b=f.length,T=d.length,C=Math.min(b,T);let S;for(S=0;S<C;S++){const R=d[S]=x?Xt(d[S]):St(d[S]);N(f[S],R,p,null,h,_,A,y,x)}b>T?Lt(f,h,_,!0,!1,C):bt(d,p,g,h,_,A,y,x,C)},mn=(f,d,p,g,h,_,A,y,x)=>{let b=0;const T=d.length;let C=f.length-1,S=T-1;for(;b<=C&&b<=S;){const R=f[b],D=d[b]=x?Xt(d[b]):St(d[b]);if(De(R,D))N(R,D,p,null,h,_,A,y,x);else break;b++}for(;b<=C&&b<=S;){const R=f[C],D=d[S]=x?Xt(d[S]):St(d[S]);if(De(R,D))N(R,D,p,null,h,_,A,y,x);else break;C--,S--}if(b>C){if(b<=S){const R=S+1,D=R<T?d[R].el:g;for(;b<=S;)N(null,d[b]=x?Xt(d[b]):St(d[b]),p,D,h,_,A,y,x),b++}}else if(b>S)for(;b<=C;)Pt(f[b],h,_,!0),b++;else{const R=b,D=b,K=new Map;for(b=D;b<=S;b++){const pt=d[b]=x?Xt(d[b]):St(d[b]);pt.key!=null&&K.set(pt.key,b)}let Y,Q=0;const yt=S-D+1;let ve=!1,Ra=0;const ze=new Array(yt);for(b=0;b<yt;b++)ze[b]=0;for(b=R;b<=C;b++){const pt=f[b];if(Q>=yt){Pt(pt,h,_,!0);continue}let It;if(pt.key!=null)It=K.get(pt.key);else for(Y=D;Y<=S;Y++)if(ze[Y-D]===0&&De(pt,d[Y])){It=Y;break}It===void 0?Pt(pt,h,_,!0):(ze[It-D]=b+1,It>=Ra?Ra=It:ve=!0,N(pt,d[It],p,null,h,_,A,y,x),Q++)}const La=ve?rf(ze):we;for(Y=La.length-1,b=yt-1;b>=0;b--){const pt=D+b,It=d[pt],ja=pt+1<T?d[pt+1].el:g;ze[b]===0?N(null,It,p,ja,h,_,A,y,x):ve&&(Y<0||b!==La[Y]?ne(It,p,ja,2):Y--)}}},ne=(f,d,p,g,h=null)=>{const{el:_,type:A,transition:y,children:x,shapeFlag:b}=f;if(b&6){ne(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){A.move(f,d,p,ge);return}if(A===xt){r(_,d,p);for(let C=0;C<x.length;C++)ne(x[C],d,p,g);r(f.anchor,d,p);return}if(A===hr){F(f,d,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,d,p),dt(()=>y.enter(_),h);else{const{leave:C,delayLeave:S,afterLeave:R}=y,D=()=>r(_,d,p),K=()=>{C(_,()=>{D(),R&&R()})};S?S(_,D,K):K()}else r(_,d,p)},Pt=(f,d,p,g=!1,h=!1)=>{const{type:_,props:A,ref:y,children:x,dynamicChildren:b,shapeFlag:T,patchFlag:C,dirs:S}=f;if(y!=null&&Rr(y,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const R=T&1&&S,D=!Mn(f);let K;if(D&&(K=A&&A.onVnodeBeforeUnmount)&&Tt(K,d,f),T&6)vs(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}R&&re(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,h,ge,g):b&&(_!==xt||C>0&&C&64)?Lt(b,d,p,!1,!0):(_===xt&&C&384||!h&&T&16)&&Lt(x,d,p),g&&Ma(f)}(D&&(K=A&&A.onVnodeUnmounted)||R)&&dt(()=>{K&&Tt(K,d,f),R&&re(f,null,d,"unmounted")},p)},Ma=f=>{const{type:d,el:p,anchor:g,transition:h}=f;if(d===xt){gs(p,g);return}if(d===hr){I(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,x=()=>A(p,_);y?y(f.el,_,x):x()}else _()},gs=(f,d)=>{let p;for(;f!==d;)p=v(f),a(f),f=p;a(d)},vs=(f,d,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:y}=f;g&&Sn(g),h.stop(),_&&(_.active=!1,Pt(A,f,d,p)),y&&dt(y,d),dt(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Lt=(f,d,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Pt(f[A],d,p,g,h)},pn=f=>f.shapeFlag&6?pn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Fa=(f,d,p)=>{f==null?d._vnode&&Pt(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,p),Ka(),vo(),d._vnode=f},ge={p:N,um:Pt,m:ne,r:Ma,mt:lr,mc:bt,pc:W,pbc:Rt,n:pn,o:t};let fr,cr;return e&&([fr,cr]=e(ge)),{render:Fa,hydrate:fr,createApp:Xl(Fa,fr)}}function ae({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function No(t,e,n=!1){const r=t.children,a=e.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xt(a[i]),s.el=o.el),n||No(o,s)),s.type===er&&(s.el=o.el)}}function rf(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const af=t=>t.__isTeleport,xt=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),me=Symbol.for("v-cmt"),hr=Symbol.for("v-stc"),Ye=[];let At=null;function Mt(t=!1){Ye.push(At=t?null:[])}function of(){Ye.pop(),At=Ye[Ye.length-1]||null}let Ze=1;function ni(t){Ze+=t}function Mo(t){return t.dynamicChildren=Ze>0?At||we:null,of(),Ze>0&&At&&At.push(t),t}function Dt(t,e,n,r,a,i){return Mo(L(t,e,n,r,a,i,!0))}function sf(t,e,n,r,a){return Mo(tt(t,e,n,r,a,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function De(t,e){return t.type===e.type&&t.key===e.key}const nr="__vInternal",Fo=({key:t})=>t??null,Rn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||lt(t)||j(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,a=null,i=t===xt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fo(e),ref:e&&Rn(e),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:kt};return s?(va(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),Ze>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const tt=lf;function lf(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===Dl)&&(t=me),Lr(t)){const s=Ie(t,e,!0);return n&&va(s,n),Ze>0&&!i&&At&&(s.shapeFlag&6?At[At.indexOf(t)]=s:At.push(s)),s.patchFlag|=-2,s}if(yf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:s,style:l}=e;s&&!et(s)&&(e.class=ra(s)),J(l)&&(lo(l)&&!M(l)&&(l=rt({},l)),e.style=na(l))}const o=et(t)?1:Al(t)?128:af(t)?64:J(t)?4:j(t)?2:0;return L(t,e,n,r,a,o,i,!0)}function ff(t){return t?lo(t)||nr in t?rt({},t):t:null}function Ie(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?uf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Fo(s),ref:e&&e.ref?n&&a?M(a)?a.concat(Rn(e)):[a,Rn(e)]:Rn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ie(t.ssContent),ssFallback:t.ssFallback&&Ie(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cf(t=" ",e=0){return tt(er,null,t,e)}function Ro(t="",e=!1){return e?(Mt(),sf(me,null,t)):tt(me,null,t)}function St(t){return t==null||typeof t=="boolean"?tt(me):M(t)?tt(xt,null,t.slice()):typeof t=="object"?Xt(t):tt(er,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ie(t)}function va(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),va(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(nr in e)?e._ctx=kt:a===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[cf(e)]):n=8);t.children=e,t.shapeFlag|=n}function uf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=ra([e.class,r.class]));else if(a==="style")e.style=na([e.style,r.style]);else if(Vn(a)){const i=e[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Tt(t,e,n,r=null){Ct(t,e,7,[n,r])}const df=Eo();let mf=0;function pf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||df,i={uid:mf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ss(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Po(r,a),emitsOptions:yo(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bl.bind(null,i),t.ce&&t.ce(i),i}let st=null,ba,be,ri="__VUE_INSTANCE_SETTERS__";(be=Or()[ri])||(be=Or()[ri]=[]),be.push(t=>st=t),ba=t=>{be.length>1?be.forEach(e=>e(t)):be[0](t)};const Te=t=>{ba(t),t.scope.on()},de=()=>{st&&st.scope.off(),ba(null)};function Lo(t){return t.vnode.shapeFlag&4}let Qe=!1;function hf(t,e=!1){Qe=e;const{props:n,children:r}=t.vnode,a=Lo(t);Jl(t,n,a,e),Ql(t,r);const i=a?gf(t,e):void 0;return Qe=!1,i}function gf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fo(new Proxy(t.ctx,Ul));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?bf(t):null;Te(t),Me();const i=Jt(r,t,0,[t.props,a]);if(Fe(),de(),Wi(i)){if(i.then(de,de),e)return i.then(o=>{ai(t,o,e)}).catch(o=>{Gn(o,t,0)});t.asyncDep=i}else ai(t,i,e)}else jo(t,e)}function ai(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=po(e)),jo(t,n)}let ii;function jo(t,e,n){const r=t.type;if(!t.render){if(!e&&ii&&!r.render){const a=r.template||ha(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=rt(rt({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}t.render=r.render||Et}Te(t),Me(),Bl(t),Fe(),de()}function vf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function bf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return vf(t)},slots:t.slots,emit:t.emit,expose:e}}function rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(po(fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in He)return He[n](t)},has(e,n){return n in e||n in He}}))}function yf(t){return j(t)&&"__vccOpts"in t}const ie=(t,e)=>ul(t,e,Qe);function _f(t,e,n){const r=arguments.length;return r===2?J(e)&&!M(e)?Lr(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),tt(t,e,n))}const xf=Symbol.for("v-scx"),wf=()=>Fn(xf),kf="3.3.4",Af="http://www.w3.org/2000/svg",se=typeof document<"u"?document:null,oi=se&&se.createElement("template"),Of={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?se.createElementNS(Af,t):se.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>se.createTextNode(t),createComment:t=>se.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>se.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${t}</svg>`:t;const s=oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ef(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cf(t,e,n){const r=t.style,a=et(n);if(n&&!a){if(e&&!et(e))for(const i in e)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const si=/\s*!important$/;function jr(t,e,n){if(M(n))n.forEach(r=>jr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pf(t,e);si.test(n)?t.setProperty(Ne(r),n.replace(si,""),"important"):t[r]=n}}const li=["Webkit","Moz","ms"],gr={};function Pf(t,e){const n=gr[e];if(n)return n;let r=Ce(e);if(r!=="filter"&&r in t)return gr[e]=r;r=Xi(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in t)return gr[e]=i}return e}const fi="http://www.w3.org/1999/xlink";function If(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fi,e.slice(6,e.length)):t.setAttributeNS(fi,e,n);else{const i=Is(e);n==null||i&&!qi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Tf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ye(t,e,n,r){t.addEventListener(e,n,r)}function Sf(t,e,n,r){t.removeEventListener(e,n,r)}function Nf(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Mf(e);if(r){const c=i[e]=Lf(r,a);ye(t,s,c,l)}else o&&(Sf(t,s,o,l),i[e]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(ci.test(t)){e={};let r;for(;r=t.match(ci);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ne(t.slice(2)),e]}let vr=0;const Ff=Promise.resolve(),Rf=()=>vr||(Ff.then(()=>vr=0),vr=Date.now());function Lf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(jf(r,n.value),e,5,[r])};return n.value=t,n.attached=Rf(),n}function jf(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ui=/^on[a-z]/,zf=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?Ef(t,r,a):e==="style"?Cf(t,n,r):Vn(e)?Zr(e)||Nf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Df(t,e,r,a))?Tf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),If(t,e,r,a))};function Df(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ui.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ui.test(e)&&et(n)?!1:e in t}const di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Sn(e,n):e};function $f(t){t.target.composing=!0}function mi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br={created(t,{modifiers:{lazy:e,trim:n,number:r}},a){t._assign=di(a);const i=r||a.props&&a.props.type==="number";ye(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),i&&(s=Ar(s)),t._assign(s)}),n&&ye(t,"change",()=>{t.value=t.value.trim()}),e||(ye(t,"compositionstart",$f),ye(t,"compositionend",mi),ye(t,"change",mi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:a}},i){if(t._assign=di(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(a||t.type==="number")&&Ar(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Uf=rt({patchProp:zf},Of);let pi;function Bf(){return pi||(pi=ef(Uf))}const Hf=(...t)=>{const e=Bf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Yf(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Yf(t){return et(t)?document.querySelector(t):t}const We=on({value:"",setValue(t){this.value=t}}),zr=on({value:"",setValue(t){this.value=t}}),Wf=t=>(ma("data-v-becbf0ea"),t=t(),pa(),t),Kf={class:"video-player"},Vf=["src","width"],Xf=["src"],qf={class:"video-input"},Jf=Wf(()=>L("label",{for:"video-input"},"Upload your video here:",-1)),Gf=Re({__name:"VideoPlayer",setup(t){let e=Math.min(720,screen.width-20);const n=mo(""),r=a=>{const i=a.target.files[0];i&&(zr.setValue(i.name.split(".")[0]),n.value=URL.createObjectURL(i))};return(a,i)=>(Mt(),Dt("div",Kf,[L("video",{src:n.value,controls:"",width:ht(e),autoplay:""},[ht(We)?(Mt(),Dt("track",{key:0,src:ht(We).value,kind:"subtitles",srclang:"en",label:"English",default:""},null,8,Xf)):Ro("",!0)],8,Vf),L("div",qf,[Jf,L("input",{type:"file",ref:"fileInput",onChange:r,accept:"video/*",name:"video-input"},null,544)])]))}});const sn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Zf=sn(Gf,[["__scopeId","data-v-becbf0ea"]]);function Qf(t){let e=`WEBVTT

`;return t.forEach((n,r)=>{const a=n.start,i=n.end,o=n.caption;e+=`${r+1}
${a} --> ${i}
${o}

`}),e}function tc(t){const n=t.replace(/\r\n|\r|\n/g,`
`).split(`

`),r=[];return n.forEach((a,i)=>{const o=a.split(`
`);if(o.length<3)return;r.push(""+i);const s=o[1].split(" --> ");r.push(s.map(l=>l.replace(".",",")).join(" --> "));for(let l=2;l<o.length;l++)r.push(o[l]);r.push("")}),r.join(`
`)}const ec=Re({__name:"DownloadButton",props:{url:{},filetype:{},filename:{}},setup(t){const e=t,n=()=>{const r=document.createElement("a");r&&(r.href=e.url,r.download=(e.filename?e.filename:"captions")+"."+e.filetype,r.target="_blank",r.click())};return(r,a)=>(Mt(),Dt("button",{onClick:n},"Download as "+Ts(r.filetype),1))}});const hi=sn(ec,[["__scopeId","data-v-3085a119"]]),zo=t=>(ma("data-v-d9ae5462"),t=t(),pa(),t),nc={class:"caption-container"},rc={class:"table"},ac=zo(()=>L("colgroup",null,[L("col",{class:"time"}),L("col",{class:"captions"}),L("col",{class:"time"}),L("col")],-1)),ic=zo(()=>L("thead",null,[L("tr",null,[L("th",null,"Start"),L("th",null,"Caption"),L("th",null,"End"),L("th",{class:"display-none"},"Operation Buttons")])],-1)),oc={class:"time-length"},sc=["id","name","onUpdate:modelValue"],lc=["for"],fc=["id","name","onUpdate:modelValue"],cc=["for"],uc=["id","name","onUpdate:modelValue"],dc=["for"],mc=["onClick"],pc={key:0,class:"downloads-container"},hc=Re({__name:"Captions",setup(t){const e=mo({arr:[]}),n=(s,l)=>s+l,r=()=>{let s="00:00:00.000";const l=e.value.arr.length-1;l>=0&&(s=e.value.arr[l].end),e.value.arr[e.value.arr.length-1],e.value.arr.push({start:s,caption:"",end:s})},a=s=>e.value.arr.splice(s,1);let i="";const o=()=>{const s=Qf(e.value.arr);console.log(s);const l=tc(s);We.setValue(URL.createObjectURL(new Blob([s],{type:"text/vtt"}))),i=URL.createObjectURL(new Blob([l],{type:"text/srt"}))};return(s,l)=>(Mt(),Dt("div",nc,[L("table",rc,[ac,ic,L("tbody",null,[(Mt(!0),Dt(xt,null,$l(e.value.arr,(c,u)=>(Mt(),Dt("tr",{key:u,class:"tr-inputs"},[L("td",oc,[mr(L("input",{type:"text",id:n("timestamp_start",u),name:n("timestamp_start",u),"onUpdate:modelValue":m=>c.start=m},null,8,sc),[[br,c.start]]),L("label",{for:n("timestamp_start",u),class:"display-none"},"Caption Start Timing",8,lc)]),L("td",null,[mr(L("textarea",{id:n("caption",u),name:n("caption",u),"onUpdate:modelValue":m=>c.caption=m,wrap:"soft",rows:"1",class:"captions"},null,8,fc),[[br,c.caption]]),L("label",{for:n("caption",u),class:"display-none"},"Caption Start",8,cc)]),L("td",null,[mr(L("input",{type:"text",id:n("timestamp_end",u),name:n("timestamp_end",u),"onUpdate:modelValue":m=>c.end=m},null,8,uc),[[br,c.end]]),L("label",{for:n("timestamp_end",u),class:"display-none"},"Caption End Timing",8,dc)]),L("td",null,[L("button",{onClick:m=>a(u),title:"Delete this timestamp"}," 🗑 ",8,mc)])]))),128)),L("tr",null,[L("td",{colspan:"4"},[L("button",{onClick:r,title:"Add a new time stamp"},"+")])]),L("tr",null,[L("td",{colspan:"4"},[L("button",{onClick:o,title:"Add a new time stamp"}," Confirm Changes ")])])])]),ht(We).value?(Mt(),Dt("div",pc,[tt(hi,{filename:ht(zr).value,filetype:"vtt",url:ht(We).value},null,8,["filename","url"]),tt(hi,{filename:ht(zr).value,filetype:"srt",url:ht(i)},null,8,["filename","url"])])):Ro("",!0)]))}});const gc=sn(hc,[["__scopeId","data-v-d9ae5462"]]);function gi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gi(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hn(t){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hn(t)}function vc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bc(t,e,n){return e&&vi(t.prototype,e),n&&vi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ya(t,e){return _c(t)||wc(t,e)||Do(t,e)||Ac()}function ln(t){return yc(t)||xc(t)||Do(t)||kc()}function yc(t){if(Array.isArray(t))return Dr(t)}function _c(t){if(Array.isArray(t))return t}function xc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Do(t,e){if(t){if(typeof t=="string")return Dr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(t,e)}}function Dr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},_a={},$o={},Uo=null,Bo={mark:bi,measure:bi};try{typeof window<"u"&&(_a=window),typeof document<"u"&&($o=document),typeof MutationObserver<"u"&&(Uo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var Oc=_a.navigator||{},yi=Oc.userAgent,_i=yi===void 0?"":yi,Zt=_a,q=$o,xi=Uo,xn=Bo;Zt.document;var Wt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Ho=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),wn,kn,An,On,En,Ut="___FONT_AWESOME___",$r=16,Yo="fa",Wo="svg-inline--fa",pe="data-fa-i2svg",Ur="data-fa-pseudo-element",Ec="data-fa-pseudo-element-pending",xa="data-prefix",wa="data-icon",wi="fontawesome-i2svg",Cc="async",Pc=["HTML","HEAD","STYLE","SCRIPT"],Ko=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",ka=[X,Z];function fn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[X]}})}var tn=fn((wn={},nt(wn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(wn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),wn)),en=fn((kn={},nt(kn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(kn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),kn)),nn=fn((An={},nt(An,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(An,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),An)),Ic=fn((On={},nt(On,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(On,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),On)),Tc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Vo="fa-layers-text",Sc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nc=fn((En={},nt(En,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(En,Z,{900:"fass",400:"fasr",300:"fasl"}),En)),Xo=[1,2,3,4,5,6,7,8,9,10],Mc=Xo.concat([11,12,13,14,15,16,17,18,19,20]),Fc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(en[X]).map(rn.add.bind(rn));Object.keys(en[Z]).map(rn.add.bind(rn));var Rc=[].concat(ka,ln(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Xo.map(function(t){return"".concat(t,"x")})).concat(Mc.map(function(t){return"w-".concat(t)})),Ke=Zt.FontAwesomeConfig||{};function Lc(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var zc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zc.forEach(function(t){var e=ya(t,2),n=e[0],r=e[1],a=jc(Lc(n));a!=null&&(Ke[r]=a)})}var qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yo,replacementClass:Wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ke.familyPrefix&&(Ke.cssPrefix=Ke.familyPrefix);var Se=E(E({},qo),Ke);Se.autoReplaceSvg||(Se.observeMutations=!1);var P={};Object.keys(qo).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){Se[t]=n,Ve.forEach(function(r){return r(P)})},get:function(){return Se[t]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){Se.cssPrefix=e,Ve.forEach(function(n){return n(P)})},get:function(){return Se.cssPrefix}});Zt.FontAwesomeConfig=P;var Ve=[];function Dc(t){return Ve.push(t),function(){Ve.splice(Ve.indexOf(t),1)}}var Vt=$r,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $c(t){if(!(!t||!Wt)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var Uc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var t=12,e="";t-- >0;)e+=Uc[Math.random()*62|0];return e}function Le(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Aa(t){return t.classList?Le(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Jo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Jo(t[n]),'" ')},"").trim()}function ar(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oa(t){return t.size!==Ft.size||t.x!==Ft.x||t.y!==Ft.y||t.rotate!==Ft.rotate||t.flipX||t.flipY}function Hc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Yc(t){var e=t.transform,n=t.width,r=n===void 0?$r:n,a=t.height,i=a===void 0?$r:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ho?l+="translate(".concat(e.x/Vt-r/2,"em, ").concat(e.y/Vt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Wc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var t=Yo,e=Wo,n=P.cssPrefix,r=P.replacementClass,a=Wc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function yr(){P.autoAddCss&&!ki&&($c(Go()),ki=!0)}var Kc={mixout:function(){return{dom:{css:Go,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},Bt=Zt||{};Bt[Ut]||(Bt[Ut]={});Bt[Ut].styles||(Bt[Ut].styles={});Bt[Ut].hooks||(Bt[Ut].hooks={});Bt[Ut].shims||(Bt[Ut].shims=[]);var Ot=Bt[Ut],Zo=[],Vc=function t(){q.removeEventListener("DOMContentLoaded",t),Yn=1,Zo.map(function(e){return e()})},Yn=!1;Wt&&(Yn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Yn||q.addEventListener("DOMContentLoaded",Vc));function Xc(t){Wt&&(Yn?setTimeout(t,0):Zo.push(t))}function cn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Jo(t):"<".concat(e," ").concat(Bc(r),">").concat(i.map(cn).join(""),"</").concat(e,">")}function Ai(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},_r=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?qc(n,a):n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function Jc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Br(t){var e=Jc(t);return e.length===1?e[0].toString(16):null}function Gc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(e);typeof Ot.hooks.addPack=="function"&&!a?Ot.hooks.addPack(t,Oi(e)):Ot.styles[t]=E(E({},Ot.styles[t]||{}),i),t==="fas"&&Hr("fa",e)}var Cn,Pn,In,_e=Ot.styles,Zc=Ot.shims,Qc=(Cn={},nt(Cn,X,Object.values(nn[X])),nt(Cn,Z,Object.values(nn[Z])),Cn),Ea=null,Qo={},ts={},es={},ns={},rs={},tu=(Pn={},nt(Pn,X,Object.keys(tn[X])),nt(Pn,Z,Object.keys(tn[Z])),Pn);function eu(t){return~Rc.indexOf(t)}function nu(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!eu(a)?a:null}var as=function(){var e=function(i){return _r(_e,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};Qo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ts=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),rs=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _e||P.autoFetchSvg,r=_r(Zc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});es=r.names,ns=r.unicodes,Ea=ir(P.styleDefault,{family:P.familyDefault})};Dc(function(t){Ea=ir(t.styleDefault,{family:P.familyDefault})});as();function Ca(t,e){return(Qo[t]||{})[e]}function ru(t,e){return(ts[t]||{})[e]}function ce(t,e){return(rs[t]||{})[e]}function is(t){return es[t]||{prefix:null,iconName:null}}function au(t){var e=ns[t],n=Ca("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return Ea}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function ir(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?X:n,a=tn[r][t],i=en[r][t]||en[r][a],o=t in Ot.styles?t:null;return i||o||null}var Ei=(In={},nt(In,X,Object.keys(nn[X])),nt(In,Z,Object.keys(nn[Z])),In);function or(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},nt(e,X,"".concat(P.cssPrefix,"-").concat(X)),nt(e,Z,"".concat(P.cssPrefix,"-").concat(Z)),e),o=null,s=X;(t.includes(i[X])||t.some(function(c){return Ei[X].includes(c)}))&&(s=X),(t.includes(i[Z])||t.some(function(c){return Ei[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=nu(P.cssPrefix,u);if(_e[u]?(u=Qc[s].includes(u)?Ic[s][u]:u,o=u,c.prefix=u):tu[s].indexOf(u)>-1?(o=u,c.prefix=ir(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[X]&&u!==i[Z]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?is(c.iconName):{},w=ce(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_e.far&&_e.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Pa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(_e.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var iu=function(){function t(){vc(this,t),this.definitions={}}return bc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Hr(s,o[s]);var l=nn[X][s];l&&Hr(l,o[s]),as()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Ci=[],xe={},Ee={},ou=Object.keys(Ee);function su(t,e){var n=e.mixoutsTo;return Ci=t,xe={},Object.keys(Ee).forEach(function(r){ou.indexOf(r)===-1&&delete Ee[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}r.provides&&r.provides(Ee)}),n}function Yr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xe[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function he(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=xe[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ee[t]?Ee[t].apply(null,e):void 0}function Wr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=ce(n,e)||e,Ai(os.definitions,n,e)||Ai(Ot.styles,n,e)}var os=new iu,lu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,he("noAuto")},fu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(he("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Xc(function(){uu({autoReplaceSvgRoot:n}),he("watch",e)})}},cu={icon:function(e){if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ce(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ir(e[0]);return{prefix:r,iconName:ce(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(Tc))){var a=or(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qt(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Qt();return{prefix:i,iconName:ce(i,e)||e}}}},gt={noAuto:lu,config:P,dom:fu,parse:cu,library:os,findIconDefinition:Wr,toHtml:cn},uu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ot.styles).length>0||P.autoFetchSvg)&&Wt&&P.autoReplaceSvg&&gt.dom.i2svg({node:r})};function sr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return cn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wt){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function du(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function mu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ia(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,w=v===void 0?!1:v,z=r.found?r:n,N=z.width,$=z.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(vt){return m.classes.indexOf(vt)===-1}).filter(function(vt){return vt!==""||!!vt}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat($)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/$*16*.0625,"em")}:{};w&&(F.attributes[pe]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||an())},children:[l]}),delete F.attributes.title);var H=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),at=r.found&&n.found?Ht("generateAbstractMask",H)||{children:[],attributes:{}}:Ht("generateAbstractIcon",H)||{children:[],attributes:{}},it=at.children,bt=at.attributes;return H.children=it,H.attributes=bt,s?mu(H):du(H)}function Pi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pe]="");var u=E({},o.styles);Oa(a)&&(u.transform=Yc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=ar(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function pu(t){var e=t.content,n=t.title,r=t.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xr=Ot.styles;function Kr(t){var e=t[0],n=t[1],r=t.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var hu={found:!1,width:512,height:512};function gu(t,e){!Ko&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Vr(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(Ht("missingIconAbstract"),n==="fa"){var i=is(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&xr[e]&&xr[e][t]){var o=xr[e][t];return r(Kr(o))}gu(t,e),r(E(E({},hu),{},{icon:P.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Xr=P.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:Ii,measure:Ii},Be='FA "6.4.2"',vu=function(e){return Xr.mark("".concat(Be," ").concat(e," begins")),function(){return ss(e)}},ss=function(e){Xr.mark("".concat(Be," ").concat(e," ends")),Xr.measure("".concat(Be," ").concat(e),"".concat(Be," ").concat(e," begins"),"".concat(Be," ").concat(e," ends"))},Ta={begin:vu,end:ss},Ln=function(){};function Ti(t){var e=t.getAttribute?t.getAttribute(pe):null;return typeof e=="string"}function bu(t){var e=t.getAttribute?t.getAttribute(xa):null,n=t.getAttribute?t.getAttribute(wa):null;return e&&n}function yu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function _u(){if(P.autoReplaceSvg===!0)return jn.replace;var t=jn[P.autoReplaceSvg];return t||jn.replace}function xu(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function wu(t){return q.createElement(t)}function ls(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?xu:wu:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(ls(o,{ceFn:r}))}),a}function ku(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(ls(a),n)}),n.getAttribute(pe)===null&&P.keepOriginalSource){var r=q.createComment(ku(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Aa(n).indexOf(P.replacementClass))return jn.replace(e);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return cn(s)}).join(`
`);n.setAttribute(pe,""),n.innerHTML=o}};function Si(t){t()}function fs(t,e){var n=typeof e=="function"?e:Ln;if(t.length===0)n();else{var r=Si;P.mutateApproach===Cc&&(r=Zt.requestAnimationFrame||Si),r(function(){var a=_u(),i=Ta.begin("mutate");t.map(a),i(),n()})}}var Sa=!1;function cs(){Sa=!0}function qr(){Sa=!1}var Wn=null;function Ni(t){if(xi&&P.observeMutations){var e=t.treeCallback,n=e===void 0?Ln:e,r=t.nodeCallback,a=r===void 0?Ln:r,i=t.pseudoElementsCallback,o=i===void 0?Ln:i,s=t.observeMutationsRoot,l=s===void 0?q:s;Wn=new xi(function(c){if(!Sa){var u=Qt();Le(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~Fc.indexOf(m.attributeName))if(m.attributeName==="class"&&bu(m.target)){var v=or(Aa(m.target)),w=v.prefix,z=v.iconName;m.target.setAttribute(xa,w||u),z&&m.target.setAttribute(wa,z)}else yu(m.target)&&a(m.target)})}}),Wt&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Au(){Wn&&Wn.disconnect()}function Ou(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Eu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=or(Aa(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ru(a.prefix,t.innerText)||Ca(a.prefix,Br(t.innerText))),!a.iconName&&P.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Cu(t){var e=Le(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||an()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Eu(t),r=n.iconName,a=n.prefix,i=n.rest,o=Cu(t),s=Yr("parseNodeAttributes",{},t),l=e.styleParser?Ou(t):[];return E({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Iu=Ot.styles;function us(t){var e=P.autoReplaceSvg==="nest"?Mi(t,{styleParser:!1}):Mi(t);return~e.extra.classes.indexOf(Vo)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}var te=new Set;ka.map(function(t){te.add("fa-".concat(t))});Object.keys(tn[X]).map(te.add.bind(te));Object.keys(tn[Z]).map(te.add.bind(te));te=ln(te);function Fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(wi,"-").concat(m))},a=function(m){return n.remove("".concat(wi,"-").concat(m))},i=P.autoFetchSvg?te:ka.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Iu));i.includes("fa")||i.push("fa");var o=[".".concat(Vo,":not([").concat(pe,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(pe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Le(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ta.begin("onTree"),c=s.reduce(function(u,m){try{var v=us(m);v&&u.push(v)}catch(w){Ko||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){fs(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Tu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;us(t).then(function(n){n&&fs([n],e)})}function Su(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Wr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Wr(a||{})),t(r,E(E({},n),{},{mask:a}))}}var Nu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ft:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,z=w===void 0?null:w,N=n.classes,$=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,I=F===void 0?{}:F;if(e){var H=e.prefix,at=e.iconName,it=e.icon;return sr(E({type:"icon"},e),function(){return he("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(z||an()):(O["aria-hidden"]="true",O.focusable="false")),Ia({icons:{main:Kr(it),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:at,transform:E(E({},Ft),a),symbol:o,title:v,maskId:u,titleId:z,extra:{attributes:O,styles:I,classes:$}})})}},Mu={mixout:function(){return{icon:Su(Nu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=Tu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Fi(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,z){Promise.all([Vr(a,s),u.iconName?Vr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var $=ya(N,2),k=$[0],O=$[1];w([n,Ia({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Oa(o)&&(c=Ht("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Fu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){he("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(ln(i)).join(" ")},children:o}]})}}}},Ru={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return sr({type:"counter",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),pu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(ln(s))}})})}}}},Lu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ft:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,w=v===void 0?{}:v;return sr({type:"text",content:n},function(){return he("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:E(E({},Ft),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(ln(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ho){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ju=new RegExp('"',"ug"),Ri=[1105920,1112319];function zu(t){var e=t.replace(ju,""),n=Gc(e,0),r=n>=Ri[0]&&n<=Ri[1],a=e.length===2?e[0]===e[1]:!1;return{value:Br(a?e[0]:e),isSecondary:r||a}}function Li(t,e){var n="".concat(Ec).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Le(t.children),o=i.filter(function(it){return it.getAttribute(Ur)===e})[0],s=Zt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Sc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:Nc[v][c],z=zu(m),N=z.value,$=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=Ca(w,N),F=O;if(k){var I=au(N);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!$&&(!o||o.getAttribute(xa)!==w||o.getAttribute(wa)!==F)){t.setAttribute(n,F),o&&t.removeChild(o);var H=Pu(),at=H.extra;at.attributes[Ur]=e,Vr(O,w).then(function(it){var bt=Ia(E(E({},H),{},{icons:{main:it,mask:Pa()},prefix:w,iconName:F,extra:at,watchable:!0})),vt=q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(vt,t.firstChild):t.appendChild(vt),vt.outerHTML=bt.map(function(Rt){return cn(Rt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Du(t){return Promise.all([Li(t,"::before"),Li(t,"::after")])}function $u(t){return t.parentNode!==document.head&&!~Pc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ur)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ji(t){if(Wt)return new Promise(function(e,n){var r=Le(t.querySelectorAll("*")).filter($u).map(Du),a=Ta.begin("searchPseudoElements");cs(),Promise.all(r).then(function(){a(),qr(),e()}).catch(function(){a(),qr(),n()})})}var Uu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&ji(a)}}},zi=!1,Bu={mixout:function(){return{dom:{unwatch:function(){cs(),zi=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Yr("mutationObserverCallbacks",{}))},noAuto:function(){Au()},watch:function(n){var r=n.observeMutationsRoot;zi?qr():Ni(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function $i(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Yu(t){return t.tag==="g"?t.children:[t]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Pa();return i.prefix||(i.prefix=Qt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,w=Hc({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},wr),{},{fill:"white"})},N=u.children?{children:u.children.map($i)}:{},$={tag:"g",attributes:E({},w.inner),children:[$i(E({tag:u.tag,attributes:E(E({},u.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[$]},O="mask-".concat(s||an()),F="clip-".concat(s||an()),I={tag:"mask",attributes:E(E({},wr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Yu(v)},I]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},wr)}),{children:r,attributes:a}}}},Ku={provides:function(e){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xu=[Kc,Mu,Fu,Ru,Lu,Uu,Bu,Hu,Wu,Ku,Vu];su(Xu,{mixoutsTo:gt});gt.noAuto;gt.config;gt.library;gt.dom;var Jr=gt.parse;gt.findIconDefinition;gt.toHtml;var qu=gt.icon;gt.layer;gt.text;gt.counter;function Ui(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function zt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ui(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Kn(t){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kn(t)}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ju(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Gu(t,e){if(t==null)return{};var n=Ju(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ds={exports:{}};(function(t){(function(e){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var I,H=0,at=0;if(u(O))for(I=[],at=O.length;H<at;H++)I.push(n(k,O[H],F));else{I={};for(var it in O)Object.prototype.hasOwnProperty.call(O,it)&&(I[k(it,F)]=n(k,O[it],F))}return I},r=function(k,O){O=O||{};var F=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(F)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},u=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(I,H){return F(I,k,H)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=$:e.humps=$})(Zu)})(ds);var Qu=ds.exports,td=["class","style"];function ed(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Qu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function nd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ms(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ms(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=nd(u);break;case"style":l.style=ed(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Gu(n,td);return _f(t.tag,zt(zt(zt({},e),{},{class:a.class,style:zt(zt({},a.style),o)},a.attrs),s),r)}var ps=!1;try{ps=!0}catch{}function rd(){if(!ps&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function kr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function ad(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(e,"fa-".concat(t.size),t.size!==null),ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ut(e,"fa-pull-".concat(t.pull),t.pull!==null),ut(e,"fa-swap-opacity",t.swapOpacity),ut(e,"fa-bounce",t.bounce),ut(e,"fa-shake",t.shake),ut(e,"fa-beat",t.beat),ut(e,"fa-fade",t.fade),ut(e,"fa-beat-fade",t.beatFade),ut(e,"fa-flash",t.flash),ut(e,"fa-spin-pulse",t.spinPulse),ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bi(t){if(t&&Kn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jr.icon)return Jr.icon(t);if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Hi=Re({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=ie(function(){return Bi(e.icon)}),i=ie(function(){return kr("classes",ad(e))}),o=ie(function(){return kr("transform",typeof e.transform=="string"?Jr.transform(e.transform):e.transform)}),s=ie(function(){return kr("mask",Bi(e.mask))}),l=ie(function(){return qu(a.value,zt(zt(zt(zt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Nn(l,function(u){if(!u)return rd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ie(function(){return l.value?ms(l.value.abstract[0],{},r):null});return function(){return c.value}}}),id={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},od={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const hs=t=>(ma("data-v-cd3248a1"),t=t(),pa(),t),sd={class:"Introduction"},ld=hs(()=>L("h1",null,"Video Captionator",-1)),fd=hs(()=>L("p",null," Make subtitles for your video and save the file as vtt or srt. You can upload a video to preview your captions with the video or just use it as a caption file generator. ",-1)),cd={class:"icons"},ud={href:"https://github.com/kushal-chandar",target:"_blank",rel:"noopener noreferrer"},dd={href:"https://www.linkedin.com/in/kushal-chandar",target:"_blank",rel:"noopener noreferrer"},md=Re({__name:"Introduction",setup(t){return(e,n)=>(Mt(),Dt("div",sd,[ld,fd,L("div",cd,[L("a",ud,[tt(ht(Hi),{icon:ht(od),size:"2x",class:"icon github-icon"},null,8,["icon"])]),L("a",dd,[tt(ht(Hi),{icon:ht(id),size:"2x",class:"icon linkedin-icon"},null,8,["icon"])])])]))}});const pd=sn(md,[["__scopeId","data-v-cd3248a1"]]),hd={class:"player-container"},gd=Re({__name:"App",setup(t){return(e,n)=>(Mt(),Dt(xt,null,[tt(pd),L("div",hd,[tt(gc),tt(Zf)])],64))}});const vd=sn(gd,[["__scopeId","data-v-9afe5d6e"]]);Hf(vd).mount("#app");
