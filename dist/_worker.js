var Et=Object.defineProperty;var Ge=e=>{throw TypeError(e)};var St=(e,t,s)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>St(e,typeof t!="symbol"?t+"":t,s),Ne=(e,t,s)=>t.has(e)||Ge("Cannot "+s);var n=(e,t,s)=>(Ne(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,a)=>(Ne(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),b=(e,t,s)=>(Ne(e,t,"access private method"),s);var Ke=(e,t,s,a)=>({set _(i){f(e,t,i,s)},get _(){return n(e,t,a)}});var qe=(e,t,s)=>(a,i)=>{let r=-1;return l(0);async function l(c){if(c<=r)throw new Error("next() called multiple times");r=c;let o,d=!1,h;if(e[c]?(h=e[c][0][0],a.req.routeIndex=c):h=c===e.length&&i||void 0,h)try{o=await h(a,()=>l(c+1))}catch(u){if(u instanceof Error&&t)a.error=u,o=await t(u,a),d=!0;else throw u}else a.finalized===!1&&s&&(o=await s(a));return o&&(a.finalized===!1||d)&&(a.res=o),a}},Rt=Symbol(),Ot=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,r=(e instanceof ct?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?jt(e,{all:s,dot:a}):{}};async function jt(e,t){const s=await e.formData();return s?Ct(s,t):{}}function Ct(e,t){const s=Object.create(null);return e.forEach((a,i)=>{t.all||i.endsWith("[]")?At(s,i,a):s[i]=a}),t.dot&&Object.entries(s).forEach(([a,i])=>{a.includes(".")&&(Pt(s,a,i),delete s[a])}),s}var At=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let a=e;const i=t.split(".");i.forEach((r,l)=>{l===i.length-1?a[r]=s:((!a[r]||typeof a[r]!="object"||Array.isArray(a[r])||a[r]instanceof File)&&(a[r]=Object.create(null)),a=a[r])})},it=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},_t=e=>{const{groups:t,path:s}=Tt(e),a=it(s);return Dt(a,t)},Tt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const i=`@${a}`;return t.push([i,s]),i}),{groups:t,path:e}},Dt=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(a)){e[i]=e[i].replace(a,t[s][1]);break}}return e},Ce={},Ht=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Ce[a]||(s[2]?Ce[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ce[a]=[e,s[1],!0]),Ce[a]}return null},Le=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Vt=e=>Le(e,decodeURI),rt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const i=t.charCodeAt(a);if(i===37){const r=t.indexOf("?",a),l=t.indexOf("#",a),c=r===-1?l===-1?void 0:l:l===-1?r:Math.min(r,l),o=t.slice(s,c);return Vt(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(i===63||i===35)break}return t.slice(s,a)},It=e=>{const t=rt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),nt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))a+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&a===""?s.push("/"):s.push(a);const r=i.replace("?","");a+="/"+r,s.push(a)}else a+="/"+i}),s.filter((i,r,l)=>l.indexOf(i)===r)},Me=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Le(e,ot):e):e,lt=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let l=e.indexOf("?",8);if(l===-1)return;for(e.startsWith(t,l+1)||(l=e.indexOf(`&${t}`,l+1));l!==-1;){const c=e.charCodeAt(l+t.length+1);if(c===61){const o=l+t.length+2,d=e.indexOf("&",o);return Me(e.slice(o,d===-1?void 0:d))}else if(c==38||isNaN(c))return"";l=e.indexOf(`&${t}`,l+1)}if(a=/[%+]/.test(e),!a)return}const i={};a??(a=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const l=e.indexOf("&",r+1);let c=e.indexOf("=",r);c>l&&l!==-1&&(c=-1);let o=e.slice(r+1,c===-1?l===-1?void 0:l:c);if(a&&(o=Me(o)),r=l,o==="")continue;let d;c===-1?d="":(d=e.slice(c+1,l===-1?void 0:l),a&&(d=Me(d))),s?(i[o]&&Array.isArray(i[o])||(i[o]=[]),i[o].push(d)):i[o]??(i[o]=d)}return t?i[t]:i},Nt=lt,Mt=(e,t)=>lt(e,t,!0),ot=decodeURIComponent,We=e=>Le(e,ot),le,C,F,dt,ht,$e,L,Qe,ct=(Qe=class{constructor(e,t="/",s=[[]]){m(this,F);p(this,"raw");m(this,le);m(this,C);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,L,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const i=Object.keys(t)[0];return i?t[i].then(r=>(i==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,C,s),f(this,le,{})}param(e){return e?b(this,F,dt).call(this,e):b(this,F,ht).call(this)}query(e){return Nt(this.url,e)}queries(e){return Mt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ot(this,e))}json(){return n(this,L).call(this,"text").then(e=>JSON.parse(e))}text(){return n(this,L).call(this,"text")}arrayBuffer(){return n(this,L).call(this,"arrayBuffer")}blob(){return n(this,L).call(this,"blob")}formData(){return n(this,L).call(this,"formData")}addValidatedData(e,t){n(this,le)[e]=t}valid(e){return n(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Rt](){return n(this,C)}get matchedRoutes(){return n(this,C)[0].map(([[,e]])=>e)}get routePath(){return n(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,C=new WeakMap,F=new WeakSet,dt=function(e){const t=n(this,C)[0][this.routeIndex][1][e],s=b(this,F,$e).call(this,t);return s&&/\%/.test(s)?We(s):s},ht=function(){const e={},t=Object.keys(n(this,C)[0][this.routeIndex][1]);for(const s of t){const a=b(this,F,$e).call(this,n(this,C)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?We(a):a)}return e},$e=function(e){return n(this,C)[1]?n(this,C)[1][e]:e},L=new WeakMap,Qe),Ft={Stringify:1},ut=async(e,t,s,a,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(i?i[0]+=e:i=[e],Promise.all(r.map(c=>c({phase:t,buffer:i,context:a}))).then(c=>Promise.all(c.filter(Boolean).map(o=>ut(o,t,!1,a,i))).then(()=>i[0]))):Promise.resolve(e)},$t="text/plain; charset=UTF-8",Fe=(e,t)=>({"Content-Type":e,...t}),be=(e,t)=>new Response(e,t),ye,ke,V,oe,I,O,Ee,ce,de,Y,Se,Re,z,re,Ze,Lt=(Ze=class{constructor(e,t){m(this,z);m(this,ye);m(this,ke);p(this,"env",{});m(this,V);p(this,"finalized",!1);p(this,"error");m(this,oe);m(this,I);m(this,O);m(this,Ee);m(this,ce);m(this,de);m(this,Y);m(this,Se);m(this,Re);p(this,"render",(...e)=>(n(this,ce)??f(this,ce,t=>this.html(t)),n(this,ce).call(this,...e)));p(this,"setLayout",e=>f(this,Ee,e));p(this,"getLayout",()=>n(this,Ee));p(this,"setRenderer",e=>{f(this,ce,e)});p(this,"header",(e,t,s)=>{this.finalized&&f(this,O,be(n(this,O).body,n(this,O)));const a=n(this,O)?n(this,O).headers:n(this,Y)??f(this,Y,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});p(this,"status",e=>{f(this,oe,e)});p(this,"set",(e,t)=>{n(this,V)??f(this,V,new Map),n(this,V).set(e,t)});p(this,"get",e=>n(this,V)?n(this,V).get(e):void 0);p(this,"newResponse",(...e)=>b(this,z,re).call(this,...e));p(this,"body",(e,t,s)=>b(this,z,re).call(this,e,t,s));p(this,"text",(e,t,s)=>!n(this,Y)&&!n(this,oe)&&!t&&!s&&!this.finalized?new Response(e):b(this,z,re).call(this,e,t,Fe($t,s)));p(this,"json",(e,t,s)=>b(this,z,re).call(this,JSON.stringify(e),t,Fe("application/json",s)));p(this,"html",(e,t,s)=>{const a=i=>b(this,z,re).call(this,i,t,Fe("text/html; charset=UTF-8",s));return typeof e=="object"?ut(e,Ft.Stringify,!1,{}).then(a):a(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(n(this,de)??f(this,de,()=>be()),n(this,de).call(this,this)));f(this,ye,e),t&&(f(this,I,t.executionCtx),this.env=t.env,f(this,de,t.notFoundHandler),f(this,Re,t.path),f(this,Se,t.matchResult))}get req(){return n(this,ke)??f(this,ke,new ct(n(this,ye),n(this,Re),n(this,Se))),n(this,ke)}get event(){if(n(this,I)&&"respondWith"in n(this,I))return n(this,I);throw Error("This context has no FetchEvent")}get executionCtx(){if(n(this,I))return n(this,I);throw Error("This context has no ExecutionContext")}get res(){return n(this,O)||f(this,O,be(null,{headers:n(this,Y)??f(this,Y,new Headers)}))}set res(e){if(n(this,O)&&e){e=be(e.body,e);for(const[t,s]of n(this,O).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=n(this,O).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of a)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}f(this,O,e),this.finalized=!0}get var(){return n(this,V)?Object.fromEntries(n(this,V)):{}}},ye=new WeakMap,ke=new WeakMap,V=new WeakMap,oe=new WeakMap,I=new WeakMap,O=new WeakMap,Ee=new WeakMap,ce=new WeakMap,de=new WeakMap,Y=new WeakMap,Se=new WeakMap,Re=new WeakMap,z=new WeakSet,re=function(e,t,s){const a=n(this,O)?new Headers(n(this,O).headers):n(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[l,c]of r)l.toLowerCase()==="set-cookie"?a.append(l,c):a.set(l,c)}if(s)for(const[r,l]of Object.entries(s))if(typeof l=="string")a.set(r,l);else{a.delete(r);for(const c of l)a.append(r,c)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??n(this,oe);return be(e,{status:i,headers:a})},Ze),y="ALL",zt="all",Ut=["get","post","put","delete","options","patch"],ft="Can not add a route since the matcher is already built.",pt=class extends Error{},Bt="__COMPOSED_HANDLER",Gt=e=>e.text("404 Not Found",404),Ye=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},P,k,mt,_,q,Ae,Pe,he,Kt=(he=class{constructor(t={}){m(this,k);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,P,"/");p(this,"routes",[]);m(this,_,Gt);p(this,"errorHandler",Ye);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(f(this,_,t),this));p(this,"fetch",(t,...s)=>b(this,k,Pe).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,a,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),a,i)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(b(this,k,Pe).call(this,t.request,t,void 0,t.request.method))})});[...Ut,zt].forEach(r=>{this[r]=(l,...c)=>(typeof l=="string"?f(this,P,l):b(this,k,q).call(this,r,n(this,P),l),c.forEach(o=>{b(this,k,q).call(this,r,n(this,P),o)}),this)}),this.on=(r,l,...c)=>{for(const o of[l].flat()){f(this,P,o);for(const d of[r].flat())c.map(h=>{b(this,k,q).call(this,d.toUpperCase(),n(this,P),h)})}return this},this.use=(r,...l)=>(typeof r=="string"?f(this,P,r):(f(this,P,"*"),l.unshift(r)),l.forEach(c=>{b(this,k,q).call(this,y,n(this,P),c)}),this);const{strict:a,...i}=t;Object.assign(this,i),this.getPath=a??!0?t.getPath??rt:It}route(t,s){const a=this.basePath(t);return s.routes.map(i=>{var l;let r;s.errorHandler===Ye?r=i.handler:(r=async(c,o)=>(await qe([],s.errorHandler)(c,()=>i.handler(c,o))).res,r[Bt]=i.handler),b(l=a,k,q).call(l,i.method,i.path,r)}),this}basePath(t){const s=b(this,k,mt).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,a){let i,r;a&&(typeof a=="function"?r=a:(r=a.optionHandler,a.replaceRequest===!1?i=o=>o:i=a.replaceRequest));const l=r?o=>{const d=r(o);return Array.isArray(d)?d:[d]}:o=>{let d;try{d=o.executionCtx}catch{}return[o.env,d]};i||(i=(()=>{const o=ie(this._basePath,t),d=o==="/"?0:o.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(d)||"/",new Request(u,h)}})());const c=async(o,d)=>{const h=await s(i(o.req.raw),...l(o));if(h)return h;await d()};return b(this,k,q).call(this,y,ie(t,"*"),c),this}},P=new WeakMap,k=new WeakSet,mt=function(){const t=new he({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,_,n(this,_)),t.routes=this.routes,t},_=new WeakMap,q=function(t,s,a){t=t.toUpperCase(),s=ie(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,i]),this.routes.push(i)},Ae=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Pe=function(t,s,a,i){if(i==="HEAD")return(async()=>new Response(null,await b(this,k,Pe).call(this,t,s,a,"GET")))();const r=this.getPath(t,{env:a}),l=this.router.match(i,r),c=new Lt(t,{path:r,matchResult:l,env:a,executionCtx:s,notFoundHandler:n(this,_)});if(l[0].length===1){let d;try{d=l[0][0][0][0](c,async()=>{c.res=await n(this,_).call(this,c)})}catch(h){return b(this,k,Ae).call(this,h,c)}return d instanceof Promise?d.then(h=>h||(c.finalized?c.res:n(this,_).call(this,c))).catch(h=>b(this,k,Ae).call(this,h,c)):d??n(this,_).call(this,c)}const o=qe(l[0],this.errorHandler,n(this,_));return(async()=>{try{const d=await o(c);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return b(this,k,Ae).call(this,d,c)}})()},he),xt=[];function qt(e,t){const s=this.buildAllMatchers(),a=((i,r)=>{const l=s[i]||s[y],c=l[2][r];if(c)return c;const o=r.match(l[0]);if(!o)return[[],xt];const d=o.indexOf("",1);return[l[1][d],o]});return this.match=a,a(e,t)}var Te="[^/]+",ge=".*",we="(?:|/.*)",ne=Symbol(),Wt=new Set(".\\+*[^]$()");function Yt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===we?1:t===ge||t===we?-1:e===Te?1:t===Te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,X,T,ee,Jt=(ee=class{constructor(){m(this,J);m(this,X);m(this,T,Object.create(null))}insert(t,s,a,i,r){if(t.length===0){if(n(this,J)!==void 0)throw ne;if(r)return;f(this,J,s);return}const[l,...c]=t,o=l==="*"?c.length===0?["","",ge]:["","",Te]:l==="/*"?["","",we]:l.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(o){const h=o[1];let u=o[2]||Te;if(h&&o[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ne;if(d=n(this,T)[u],!d){if(Object.keys(n(this,T)).some(x=>x!==ge&&x!==we))throw ne;if(r)return;d=n(this,T)[u]=new ee,h!==""&&f(d,X,i.varIndex++)}!r&&h!==""&&a.push([h,n(d,X)])}else if(d=n(this,T)[l],!d){if(Object.keys(n(this,T)).some(h=>h.length>1&&h!==ge&&h!==we))throw ne;if(r)return;d=n(this,T)[l]=new ee}d.insert(c,s,a,i,r)}buildRegExpStr(){const s=Object.keys(n(this,T)).sort(Yt).map(a=>{const i=n(this,T)[a];return(typeof n(i,X)=="number"?`(${a})@${n(i,X)}`:Wt.has(a)?`\\${a}`:a)+i.buildRegExpStr()});return typeof n(this,J)=="number"&&s.unshift(`#${n(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,X=new WeakMap,T=new WeakMap,ee),De,Oe,et,Xt=(et=class{constructor(){m(this,De,{varIndex:0});m(this,Oe,new Jt)}insert(e,t,s){const a=[],i=[];for(let l=0;;){let c=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const d=`@\\${l}`;return i[l]=[d,o],l++,c=!0,d}),!c)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=i.length-1;l>=0;l--){const[c]=i[l];for(let o=r.length-1;o>=0;o--)if(r[o].indexOf(c)!==-1){r[o]=r[o].replace(c,i[l][1]);break}}return n(this,Oe).insert(r,t,a,n(this,De),s),a}buildRegExp(){let e=n(this,Oe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,r,l)=>r!==void 0?(s[++t]=Number(r),"$()"):(l!==void 0&&(a[Number(l)]=++t),"")),[new RegExp(`^${e}`),s,a]}},De=new WeakMap,Oe=new WeakMap,et),Qt=[/^$/,[],Object.create(null)],_e=Object.create(null);function bt(e){return _e[e]??(_e[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Zt(){_e=Object.create(null)}function es(e){var d;const t=new Xt,s=[];if(e.length===0)return Qt;const a=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[x,g])=>h?1:x?-1:u.length-g.length),i=Object.create(null);for(let h=0,u=-1,x=a.length;h<x;h++){const[g,v,A]=a[h];g?i[v]=[A.map(([j])=>[j,Object.create(null)]),xt]:u++;let E;try{E=t.insert(v,u,g)}catch(j){throw j===ne?new pt(v):j}g||(s[u]=A.map(([j,w])=>{const D=Object.create(null);for(w-=1;w>=0;w--){const[pe,Ve]=E[w];D[pe]=Ve}return[j,D]}))}const[r,l,c]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let x=0,g=s[h].length;x<g;x++){const v=(d=s[h][x])==null?void 0:d[1];if(!v)continue;const A=Object.keys(v);for(let E=0,j=A.length;E<j;E++)v[A[E]]=c[v[A[E]]]}const o=[];for(const h in l)o[h]=s[l[h]];return[r,o,i]}function ae(e,t){if(e){for(const s of Object.keys(e).sort((a,i)=>i.length-a.length))if(bt(s).test(t))return[...e[s]]}}var U,B,He,vt,tt,ts=(tt=class{constructor(){m(this,He);p(this,"name","RegExpRouter");m(this,U);m(this,B);p(this,"match",qt);f(this,U,{[y]:Object.create(null)}),f(this,B,{[y]:Object.create(null)})}add(e,t,s){var c;const a=n(this,U),i=n(this,B);if(!a||!i)throw new Error(ft);a[e]||[a,i].forEach(o=>{o[e]=Object.create(null),Object.keys(o[y]).forEach(d=>{o[e][d]=[...o[y][d]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=bt(t);e===y?Object.keys(a).forEach(d=>{var h;(h=a[d])[t]||(h[t]=ae(a[d],t)||ae(a[y],t)||[])}):(c=a[e])[t]||(c[t]=ae(a[e],t)||ae(a[y],t)||[]),Object.keys(a).forEach(d=>{(e===y||e===d)&&Object.keys(a[d]).forEach(h=>{o.test(h)&&a[d][h].push([s,r])})}),Object.keys(i).forEach(d=>{(e===y||e===d)&&Object.keys(i[d]).forEach(h=>o.test(h)&&i[d][h].push([s,r]))});return}const l=nt(t)||[t];for(let o=0,d=l.length;o<d;o++){const h=l[o];Object.keys(i).forEach(u=>{var x;(e===y||e===u)&&((x=i[u])[h]||(x[h]=[...ae(a[u],h)||ae(a[y],h)||[]]),i[u][h].push([s,r-d+o+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(n(this,B)).concat(Object.keys(n(this,U))).forEach(t=>{e[t]||(e[t]=b(this,He,vt).call(this,t))}),f(this,U,f(this,B,void 0)),Zt(),e}},U=new WeakMap,B=new WeakMap,He=new WeakSet,vt=function(e){const t=[];let s=e===y;return[n(this,U),n(this,B)].forEach(a=>{const i=a[e]?Object.keys(a[e]).map(r=>[r,a[e][r]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==y&&t.push(...Object.keys(a[y]).map(r=>[r,a[y][r]]))}),s?es(t):null},tt),G,N,st,ss=(st=class{constructor(e){p(this,"name","SmartRouter");m(this,G,[]);m(this,N,[]);f(this,G,e.routers)}add(e,t,s){if(!n(this,N))throw new Error(ft);n(this,N).push([e,t,s])}match(e,t){if(!n(this,N))throw new Error("Fatal error");const s=n(this,G),a=n(this,N),i=s.length;let r=0,l;for(;r<i;r++){const c=s[r];try{for(let o=0,d=a.length;o<d;o++)c.add(...a[o]);l=c.match(e,t)}catch(o){if(o instanceof pt)continue;throw o}this.match=c.match.bind(c),f(this,G,[c]),f(this,N,void 0);break}if(r===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(n(this,N)||n(this,G).length!==1)throw new Error("No active router has been determined yet.");return n(this,G)[0]}},G=new WeakMap,N=new WeakMap,st),ve=Object.create(null),as=e=>{for(const t in e)return!0;return!1},K,R,Q,ue,S,M,W,fe,is=(fe=class{constructor(t,s,a){m(this,M);m(this,K);m(this,R);m(this,Q);m(this,ue,0);m(this,S,ve);if(f(this,R,a||Object.create(null)),f(this,K,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},f(this,K,[i])}f(this,Q,[])}insert(t,s,a){f(this,ue,++Ke(this,ue)._);let i=this;const r=_t(s),l=[];for(let c=0,o=r.length;c<o;c++){const d=r[c],h=r[c+1],u=Ht(d,h),x=Array.isArray(u)?u[0]:d;if(x in n(i,R)){i=n(i,R)[x],u&&l.push(u[1]);continue}n(i,R)[x]=new fe,u&&(n(i,Q).push(u),l.push(u[1])),i=n(i,R)[x]}return n(i,K).push({[t]:{handler:a,possibleKeys:l.filter((c,o,d)=>d.indexOf(c)===o),score:n(this,ue)}}),i}search(t,s){var h;const a=[];f(this,S,ve);let r=[this];const l=it(s),c=[],o=l.length;let d=null;for(let u=0;u<o;u++){const x=l[u],g=u===o-1,v=[];for(let E=0,j=r.length;E<j;E++){const w=r[E],D=n(w,R)[x];D&&(f(D,S,n(w,S)),g?(n(D,R)["*"]&&b(this,M,W).call(this,a,n(D,R)["*"],t,n(w,S)),b(this,M,W).call(this,a,D,t,n(w,S))):v.push(D));for(let pe=0,Ve=n(w,Q).length;pe<Ve;pe++){const Ue=n(w,Q)[pe],$=n(w,S)===ve?{}:{...n(w,S)};if(Ue==="*"){const te=n(w,R)["*"];te&&(b(this,M,W).call(this,a,te,t,n(w,S)),f(te,S,$),v.push(te));continue}const[kt,Be,me]=Ue;if(!x&&!(me instanceof RegExp))continue;const H=n(w,R)[kt];if(me instanceof RegExp){if(d===null){d=new Array(o);let se=s[0]==="/"?1:0;for(let xe=0;xe<o;xe++)d[xe]=se,se+=l[xe].length+1}const te=s.substring(d[u]),Ie=me.exec(te);if(Ie){if($[Be]=Ie[0],b(this,M,W).call(this,a,H,t,n(w,S),$),as(n(H,R))){f(H,S,$);const se=((h=Ie[0].match(/\//))==null?void 0:h.length)??0;(c[se]||(c[se]=[])).push(H)}continue}}(me===!0||me.test(x))&&($[Be]=x,g?(b(this,M,W).call(this,a,H,t,$,n(w,S)),n(H,R)["*"]&&b(this,M,W).call(this,a,n(H,R)["*"],t,$,n(w,S))):(f(H,S,$),v.push(H)))}}const A=c.shift();r=A?v.concat(A):v}return a.length>1&&a.sort((u,x)=>u.score-x.score),[a.map(({handler:u,params:x})=>[u,x])]}},K=new WeakMap,R=new WeakMap,Q=new WeakMap,ue=new WeakMap,S=new WeakMap,M=new WeakSet,W=function(t,s,a,i,r){for(let l=0,c=n(s,K).length;l<c;l++){const o=n(s,K)[l],d=o[a]||o[y],h={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),i!==ve||r&&r!==ve))for(let u=0,x=d.possibleKeys.length;u<x;u++){const g=d.possibleKeys[u],v=h[d.score];d.params[g]=r!=null&&r[g]&&!v?r[g]:i[g]??(r==null?void 0:r[g]),h[d.score]=!0}}},fe),Z,at,rs=(at=class{constructor(){p(this,"name","TrieRouter");m(this,Z);f(this,Z,new is)}add(e,t,s){const a=nt(t);if(a){for(let i=0,r=a.length;i<r;i++)n(this,Z).insert(e,a[i],s);return}n(this,Z).insert(e,t,s)}match(e,t){return n(this,Z).search(e,t)}},Z=new WeakMap,at),gt=class extends Kt{constructor(e={}){super(e),this.router=e.router??new ss({routers:[new ts,new rs]})}},ns=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Je=(e,t=os)=>{const s=/\.([a-zA-Z0-9]+?)$/,a=e.match(s);if(!a)return;let i=t[a[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},ls={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},os=ls,cs=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),a=[];for(const i of s)i===".."&&a.length>0&&a.at(-1)!==".."?a.pop():i!=="."&&a.push(i);return a.join("/")||"."},wt={br:".br",zstd:".zst",gzip:".gz"},ds=Object.keys(wt),hs="index.html",us=e=>{const t=e.root??"./",s=e.path,a=e.join??cs;return async(i,r)=>{var h,u,x,g;if(i.finalized)return r();let l;if(e.path)l=e.path;else try{if(l=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(l))throw new Error}catch{return await((h=e.onNotFound)==null?void 0:h.call(e,i.req.path,i)),r()}let c=a(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(l):l);e.isDir&&await e.isDir(c)&&(c=a(c,hs));const o=e.getContent;let d=await o(c,i);if(d instanceof Response)return i.newResponse(d.body,d);if(d){const v=e.mimes&&Je(c,e.mimes)||Je(c);if(i.header("Content-Type",v||"application/octet-stream"),e.precompressed&&(!v||ns.test(v))){const A=new Set((u=i.req.header("Accept-Encoding"))==null?void 0:u.split(",").map(E=>E.trim()));for(const E of ds){if(!A.has(E))continue;const j=await o(c+wt[E],i);if(j){d=j,i.header("Content-Encoding",E),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((x=e.onFound)==null?void 0:x.call(e,c,i)),i.body(d)}await((g=e.onNotFound)==null?void 0:g.call(e,c,i)),await r()}},fs=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let a;t&&t.namespace?a=t.namespace:a=__STATIC_CONTENT;const i=s[e];if(!i)return null;const r=await a.get(i,{type:"stream"});return r||null},ps=e=>async function(s,a){return us({...e,getContent:async r=>fs(r,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,a)},ze=e=>ps(e);const je=new gt;je.use("/static/*",ze({root:"./"}));je.use("/manifest.json",ze({path:"./manifest.json"}));je.use("/sw.js",ze({path:"./sw.js"}));je.get("/",e=>e.html(`
<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#1e293b">
    <meta name="description" content="BDU Akademik Hesablayıcı - Semestr, ÜOMG, Yaş və İmtahan Hesablama">
    <title>BDU Akademik Hesablayıcı</title>
    
    <!-- PWA -->
    <link rel="manifest" href="/manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="BDU Hesablayıcı">
    
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <style>
        * {
            -webkit-tap-highlight-color: transparent;
        }
        
        body {
            overscroll-behavior: none;
            touch-action: pan-y;
        }
        
        .calculator-card {
            transition: all 0.3s ease;
        }
        
        .calculator-card:active {
            transform: scale(0.98);
        }
        
        .info-popup {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .whatsapp-banner {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        
        .result-animation {
            animation: slideUp 0.5s ease;
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        input[type="number"] {
            -moz-appearance: textfield;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen text-white">
    
    <!-- WhatsApp Banner -->
    <div class="whatsapp-banner fixed top-0 left-0 right-0 z-50 py-2 px-4 flex items-center justify-center gap-3 shadow-lg cursor-pointer" onclick="openWhatsApp()">
        <i class="fab fa-whatsapp text-2xl"></i>
        <span class="font-semibold text-sm">Ən ucuz sərbəst iş hazırlanması</span>
        <i class="fas fa-chevron-right text-sm"></i>
    </div>

    <!-- Main Container -->
    <div id="app" class="pt-16 pb-8 px-4 max-w-md mx-auto">
        
        <!-- Home View -->
        <div id="homeView" class="space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold mb-2">🎓 BDU Hesablayıcı</h1>
                <p class="text-slate-300 text-sm">Akademik Köməkçi Sistem</p>
            </div>

            <!-- Calculator Cards -->
            <div class="space-y-4">
                
                <!-- Semestr Calculator -->
                <div onclick="showView('semestrView')" class="calculator-card bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-calculator text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Semestr Bal Hesablama</h2>
                            <p class="text-blue-100 text-sm">Seminar, Kollekvium, Davamiyyət</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- ÜOMG Calculator -->
                <div onclick="showView('uomgView')" class="calculator-card bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-graduation-cap text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">ÜOMG Hesablama</h2>
                            <p class="text-purple-100 text-sm">Orta Müvəffəqiyyət Göstəricisi</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Exam Fee Calculator -->
                <div onclick="showView('examFeeView')" class="calculator-card bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-money-bill-wave text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">25% İmtahan Pulu</h2>
                            <p class="text-red-100 text-sm">Kəsr Pulu Hesablama</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Age Calculator -->
                <div onclick="showView('ageView')" class="calculator-card bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-birthday-cake text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Yaş Hesablayıcı</h2>
                            <p class="text-green-100 text-sm">Doğum Tarixi Hesablama</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Dictionary -->
                <div onclick="showView('dictionaryView')" class="calculator-card bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-book text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Lüğət</h2>
                            <p class="text-yellow-100 text-sm">Akademik Terminlər</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Information -->
                <div onclick="showView('infoSectionView')" class="calculator-card bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-info-circle text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Məlumat</h2>
                            <p class="text-cyan-100 text-sm">Faydalı Məlumatlar</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Quick Links -->
                <div onclick="showView('linksView')" class="calculator-card bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-link text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Sürətli Linklər</h2>
                            <p class="text-pink-100 text-sm">BDU & Sosial Şəbəkələr</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

            </div>
        </div>

        <!-- Semestr Calculator View -->
        <div id="semestrView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-blue-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">📊 Semestr Bal Hesablama</h2>
            
            <div class="space-y-4">
                <!-- Seminar Section -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Seminar Say (maks: 9)</label>
                    <input type="number" id="seminarCount" min="0" max="9" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3" placeholder="0-9">
                    <div id="seminarGrades" class="space-y-2"></div>
                </div>

                <!-- Kollekvium Section -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Kollekvium Say (maks: 4)</label>
                    <input type="number" id="kollekviumCount" min="0" max="4" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3" placeholder="0-4">
                    <div id="kollekviumGrades" class="space-y-2"></div>
                </div>

                <!-- Sərbəst İş -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Sərbəst İş Balı (0-10)</label>
                    <input type="number" id="serbestBal" min="0" max="10" step="0.1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="0-10">
                </div>

                <!-- Davamiyyət -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Dərs Saatı</label>
                    <select id="dersSaat" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3 text-white">
                        <option value="">Seçin</option>
                        <option value="30">30 saat</option>
                        <option value="45">45 saat</option>
                        <option value="60">60 saat</option>
                        <option value="75">75 saat</option>
                        <option value="90">90 saat</option>
                        <option value="105">105 saat</option>
                    </select>
                    <label class="block font-semibold mb-2">Qayıb Sayı</label>
                    <input type="number" id="qayibSay" min="0" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="0">
                </div>

                <button onclick="calculateSemestr()" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="semestrResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- ÜOMG Calculator View -->
        <div id="uomgView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-purple-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🎓 ÜOMG Hesablama</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Fənn Sayı</label>
                    <input type="number" id="fennCount" min="1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="Fənn sayı">
                    <button onclick="generateUomgFields()" class="w-full mt-3 bg-purple-600 py-2 rounded-lg">
                        <i class="fas fa-plus mr-2"></i> Sahələr Yarat
                    </button>
                </div>
                
                <div id="uomgFields" class="space-y-3"></div>

                <button id="uomgCalcBtn" onclick="calculateUomg()" class="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hidden">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="uomgResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Exam Fee Calculator View -->
        <div id="examFeeView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-red-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">💰 25% İmtahan Pulu</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">İllik Ödəniş (₼)</label>
                    <input type="number" id="illikOdenis" min="0" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="İllik ödəniş məbləği">
                </div>

                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Fənnin Kredit Sayı</label>
                    <input type="number" id="fennKredit" min="1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="Kredit sayı">
                </div>

                <button onclick="calculateExamFee()" class="w-full bg-gradient-to-r from-red-600 to-red-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="examFeeResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Age Calculator View -->
        <div id="ageView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-green-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🎂 Yaş Hesablayıcı</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Doğum Tarixi</label>
                    <input type="date" id="birthDate" class="w-full bg-white/20 rounded-lg px-4 py-2 text-white" max="${new Date().toISOString().split("T")[0]}">
                </div>

                <button onclick="calculateAge()" class="w-full bg-gradient-to-r from-green-600 to-green-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="ageResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Dictionary View -->
        <div id="dictionaryView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-yellow-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">📖 Lüğət</h2>
            
            <div class="space-y-3">
                <div class="bg-white/10 rounded-xl p-4">
                    <h3 class="font-bold text-yellow-300">Mühazirə</h3>
                    <p class="text-sm text-slate-200">Müəllimin keçdiyi dərs</p>
                </div>
            </div>
        </div>

        <!-- Information View -->
        <div id="infoSectionView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-cyan-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">ℹ️ Məlumat</h2>
            
            <div class="space-y-3">
                <div class="bg-white/10 rounded-xl p-4">
                    <h3 class="font-bold text-cyan-300">Əlaçı olmaq</h3>
                    <p class="text-sm text-slate-200">Əlaçı olmaq üçün bütün fənnlər 91+ olmalıdır</p>
                </div>
            </div>
        </div>

        <!-- Links View -->
        <div id="linksView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-pink-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🔗 Sürətli Linklər</h2>
            
            <div class="space-y-3">
                <a href="https://bdu.edu.az" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-university text-2xl text-blue-400"></i>
                        <div>
                            <h3 class="font-bold">BDU Rəsmi Sayt</h3>
                            <p class="text-xs text-slate-300">bdu.edu.az</p>
                        </div>
                    </div>
                </a>

                <a href="https://semslogin.bdu.edu.az" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-sign-in-alt text-2xl text-green-400"></i>
                        <div>
                            <h3 class="font-bold">SemsLogin</h3>
                            <p class="text-xs text-slate-300">Akademik Portal</p>
                        </div>
                    </div>
                </a>

                <a href="https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-whatsapp text-2xl text-green-500"></i>
                        <div>
                            <h3 class="font-bold">BDU WhatsApp Kanal</h3>
                            <p class="text-xs text-slate-300">Xəbərlər və Elanlar</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.instagram.com/bdu_eduaz" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-instagram text-2xl text-pink-500"></i>
                        <div>
                            <h3 class="font-bold">BDU Instagram</h3>
                            <p class="text-xs text-slate-300">@bdu_eduaz</p>
                        </div>
                    </div>
                </a>

                <a href="https://t.me/bdu_eduaz" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-telegram text-2xl text-blue-500"></i>
                        <div>
                            <h3 class="font-bold">BDU Telegram</h3>
                            <p class="text-xs text-slate-300">@bdu_eduaz</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.instagram.com/desespere_etoile" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-instagram text-2xl text-purple-500"></i>
                        <div>
                            <h3 class="font-bold">Sayt Sahibi</h3>
                            <p class="text-xs text-slate-300">@desespere_etoile</p>
                        </div>
                    </div>
                </a>

                <a href="https://t.me/+WUKxtnDjo2E5YTcy" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-telegram text-2xl text-cyan-500"></i>
                        <div>
                            <h3 class="font-bold">Tələbə Chat Qrupu</h3>
                            <p class="text-xs text-slate-300">Sosiallaşma</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>

    <!-- Info Button -->
    <div id="infoBtn" class="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700" onclick="showInfoPopup()">
        <i class="fas fa-info text-2xl"></i>
    </div>

    <!-- Info Popup -->
    <div id="infoPopup" class="hidden fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onclick="hideInfoPopup()">
        <div class="info-popup bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 max-w-sm text-center" onclick="event.stopPropagation()">
            <div class="text-6xl mb-4">✨</div>
            <p class="text-xl font-bold">O, boşluq yaradır.</p>
            <button onclick="hideInfoPopup()" class="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
                Başa düşdüm
            </button>
        </div>
    </div>

    <script src="/static/app.js"><\/script>
</body>
</html>
  `));const Xe=new gt,ms=Object.assign({"/src/index.tsx":je});let yt=!1;for(const[,e]of Object.entries(ms))e&&(Xe.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xe.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),yt=!0);if(!yt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Xe as default};
