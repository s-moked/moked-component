import{r as i}from"./index-DQDNmYQF.js";import{a as u,g as p,s as g,c as I,b as x,m as M}from"./createSimplePaletteValueFilter-BoWLPMif.js";import{j as d}from"./jsx-runtime-BBa0EPuc.js";import{u as f}from"./DefaultPropsProvider--BYy5BQi.js";const L=i.createContext({});function R(s){return p("MuiList",s)}u("MuiList",["root","padding","dense","subheader"]);const S=s=>{const{classes:t,disablePadding:e,dense:o,subheader:a}=s;return x({root:["root",!e&&"padding",o&&"dense",a&&"subheader"]},R,t)},y=g("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,!e.disablePadding&&t.padding,e.dense&&t.dense,e.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:s})=>!s.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:s})=>s.subheader,style:{paddingTop:0}}]}),E=i.forwardRef(function(t,e){const o=f({props:t,name:"MuiList"}),{children:a,className:r,component:l="ul",dense:n=!1,disablePadding:c=!1,subheader:h,...b}=o,v=i.useMemo(()=>({dense:n}),[n]),m={...o,component:l,dense:n,disablePadding:c},C=S(m);return d.jsx(L.Provider,{value:v,children:d.jsxs(y,{as:l,className:I(C.root,r),ref:e,ownerState:m,...b,children:[h,a]})})});function w(s){return p("MuiListItemIcon",s)}const k=u("MuiListItemIcon",["root","alignItemsFlexStart"]),P=s=>{const{alignItems:t,classes:e}=s;return x({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},w,e)},U=g("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(M(({theme:s})=>({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),B=i.forwardRef(function(t,e){const o=f({props:t,name:"MuiListItemIcon"}),{className:a,...r}=o,l=i.useContext(L),n={...o,alignItems:l.alignItems},c=P(n);return d.jsx(U,{className:I(c.root,a),ownerState:n,ref:e,...r})});export{L,E as a,B as b,k as l};