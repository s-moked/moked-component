const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DmqVK_gK.js","./index-DQDNmYQF.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./iframe-5NFH4v1m.js";import{R as e,r as c}from"./index-DQDNmYQF.js";import{ak as l,al as u,am as h,an as E}from"./index-CuZs1cDZ.js";import{renderElement as d,unmountElement as x}from"./react-18-u42g1D-G.js";import"../sb-preview/runtime.js";import"./jsx-runtime-BBa0EPuc.js";import"./index-DubjsFmy.js";import"./index-Bh7QTw9R.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";var _={code:l,a:u,...h},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,n)=>{let s={..._,...r==null?void 0:r.components},a=E;return new Promise((m,i)=>{p(async()=>{const{MDXProvider:o}=await import("./index-DmqVK_gK.js");return{MDXProvider:o}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:o})=>d(e.createElement(D,{showException:i,key:Math.random()},e.createElement(o,{components:s},e.createElement(a,{context:t,docsParameter:r}))),n)).then(()=>m())})},this.unmount=t=>{x(t)}}};export{F as DocsRenderer,_ as defaultComponents};