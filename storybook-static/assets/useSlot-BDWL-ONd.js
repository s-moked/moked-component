import{r as n,a as y}from"./index-DQDNmYQF.js";import{r as F,m as g,a as E}from"./useSlotProps-C7FO6O8m.js";import{u as T}from"./createSimplePaletteValueFilter-BoWLPMif.js";let I=0;function k(e){const[t,r]=n.useState(e),a=e||t;return n.useEffect(()=>{t==null&&(I+=1,r(`mui-${I}`))},[t]),a}const v={...y},P=v.useId;function D(e){if(P!==void 0){const t=P();return e??t}return k(e)}function G({controlled:e,default:t,name:r,state:a="value"}){const{current:o}=n.useRef(e!==void 0),[f,l]=n.useState(t),p=o?e:f,u=n.useCallback(s=>{o||l(s)},[]);return[p,u]}function L(e,t){const{className:r,elementType:a,ownerState:o,externalForwardedProps:f,internalForwardedProps:l,...p}=t,{component:u,slots:s={[e]:void 0},slotProps:S={[e]:void 0},...C}=f,d=s[e]||a,c=F(S[e],o),{props:{component:i,...R},internalRef:b}=g({className:r,...p,externalForwardedProps:e==="root"?C:void 0,externalSlotProps:c}),w=T(b,c==null?void 0:c.ref,t.ref),m=e==="root"?i||u:i,x=E(d,{...e==="root"&&!u&&!s[e]&&l,...e!=="root"&&!s[e]&&l,...R,...m&&{as:m},ref:w},o);return[d,x]}export{D as a,L as b,G as u};