const p=function(){const o=typeof document<"u"&&document.createElement("link").relList;return o&&o.supports&&o.supports("modulepreload")?"modulepreload":"preload"}(),h=function(i){return"/"+i},a={},v=function(o,l,E){let c=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),t=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(l.map(r=>{if(r=h(r),r in a)return;a[r]=!0;const s=r.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":p,s||(n.as="script"),n.crossOrigin="",n.href=r,t&&n.setAttribute("nonce",t),document.head.appendChild(n),s)return new Promise((m,f)=>{n.addEventListener("load",m),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}function u(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return c.then(e=>{for(const t of e||[])t.status==="rejected"&&u(t.reason);return o().catch(u)})};export{v as _};
