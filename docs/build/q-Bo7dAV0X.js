import{u as Q,y as Z,v as G,n as J,z as X}from"./q-C0fFbg-x.js";import{f as _t}from"./q-C0fFbg-x.js";import{v as P,q as $,k as _,y as tt,o as et,n as ot,r as rt,z as it,l as nt,A as S,B as f,s as at,E as lt,F as st}from"./q-CScvGLep.js";import{c as x,m as z,r as B}from"./q-d_x8HemV.js";import"./q-uemlvruI.js";const ft=({track:N})=>{const[O,R,V,u,ct,A,W,E,M,w,d]=Q();async function j(){var H;const[l,k]=N(()=>[w.value,O.value]),Y=Z(""),y=d.url,n=k?"form":l.type,F=l.replaceState;let o,m,L=null,v;{o=new URL(l.dest,location),o.pathname.endsWith("/")||(o.pathname+="/");let C=P(B,z,x,o.pathname);v=G();const q=m=await $(o,v,{action:k,clearCache:!0});if(!q){w.untrackedValue={type:n,dest:o};return}const b=q.href,g=new URL(b,o);_(g,o)||(o=g,C=P(B,z,x,o.pathname));try{L=await C}catch{window.location.href=b;return}}if(L){const[C,q,b,g]=L,h=b,K=h[h.length-1],T=n==="form"&&!_(o,y);l.dest.search&&!T&&(o.search=l.dest.search),_(o,y)||(d.prevUrl=y),d.url=o,d.params={...q},w.untrackedValue={type:n,dest:o};const p=tt(m,d,h,Y);R.headings=K.headings,R.menu=g,V.value=J(h),u.links=p.links,u.meta=p.meta,u.styles=p.styles,u.scripts=p.scripts,u.title=p.title,u.frontmatter=p.frontmatter;{M.viewTransition!==!1&&(document.__q_view_transition__=!0);let D;n==="popstate"&&(D=et());const s=document.getElementById(ot)??document.documentElement;(l.scroll&&(!l.forceReload||!_(o,y))&&(n==="link"||n==="popstate")||T)&&(document.__q_scroll_restore__=()=>rt(n,o,y,s,D));const U=m==null?void 0:m.loaders,t=window;if(U&&Object.assign(W,U),it.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),A(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const r=history.pushState,a=history.replaceState,c=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||f(s),e);history.pushState=(e,i,I)=>(e=c(e),r.call(history,e,i,I)),history.replaceState=(e,i,I)=>(e=c(e),a.call(history,e,i,I))}document.body.addEventListener("click",r=>{if(r.defaultPrevented)return;const a=r.target.closest("a[href]");if(a&&!a.hasAttribute("preventdefault:click")){const c=a.getAttribute("href"),e=new URL(location.href),i=new URL(c,e);if(nt(i,e)&&_(i,e)){if(r.preventDefault(),!i.hash&&!i.href.endsWith("#")){i.href!==e.href&&history.pushState(null,"",i),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),S({...f(s),x:0,y:0}),location.reload();return}A(a.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const r=f(s);S(r)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const r=f(s);S(r),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(H=t._qCityBootstrap)==null||H.remove(),t._qCityBootstrap=void 0,at.resolve()}if(n!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const r=f(s);S(r)}lt(window,n,y,o,F),X(v).then(()=>{var c;st(v).setAttribute("q:route",C);const a=f(s);S(a),t._qCityScrollEnabled=!0,d.isNavigating=!1,(c=E.r)==null||c.call(E)})}}}j()};export{_t as _hW,ft as s_Ysfvd0zsHZc};
