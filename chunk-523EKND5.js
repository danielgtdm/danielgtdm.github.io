import{R as s,na as c,sa as a,t as r,va as m,x as p,y as i}from"./chunk-JM5UFH63.js";import"./chunk-2XJVAMHT.js";var l=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["app-pages"]],decls:1,vars:0,template:function(e,d){e&1&&s(0,"router-outlet")},dependencies:[a],encapsulation:2});let o=t;return o})();var u=[{path:"",component:l,children:[{path:"home",loadChildren:()=>import("./chunk-2YMJHO7M.js").then(o=>o.HomeModule)},{path:"",redirectTo:"home",pathMatch:"full"}]},{path:"**",redirectTo:"home"}],h=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forChild(u),m]});let o=t;return o})();var T=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[c,h]});let o=t;return o})();export{T as PagesModule};