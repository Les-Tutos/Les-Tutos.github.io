function s(t){const n=t.replace(",",".");return parseFloat(n)}function a(t){const n=s(t);return Number.isFinite(n)}function i(t,n){const e=Math.pow(10,n);return Math.round(t*e)/e}function u(t,n){const e=t.toString(),r=n.toString(),c=e.includes(".")?e.split(".")[1].length:0,o=r.includes(".")?r.split(".")[1].length:0;return Math.max(c,o)}function l(t,n){return i(t+n,u(t,n))}export{a as i,l as s};
