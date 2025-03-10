import{d as H,ag as K,B as F,aF as b,by as J,H as d,i as a,W,X,n as l,w as $,c as r,e as o,g as O,V as u,ak as q,aw as M,I,ae as k,t as v,af as G,f as Q,bw as R,F as T,K as A,at as Y}from"./BDWdoQTh.js";const Z={slots:{root:"relative",wrapper:"",leading:"inline-flex items-center justify-center",leadingIcon:"size-5 shrink-0 text-(--ui-primary)",title:"text-base text-pretty font-semibold text-(--ui-text-highlighted)",description:"text-[15px] text-pretty text-(--ui-text-muted)"},variants:{orientation:{horizontal:{root:"flex items-start gap-2.5",leading:"p-0.5"},vertical:{leading:"mb-2.5"}},title:{true:{description:"mt-1"}}}},ee=G;var D;const te=b({extend:b(Z),...((D=ee.uiPro)==null?void 0:D.pageFeature)||{}}),ie=H({inheritAttrs:!1,__name:"PageFeature",props:{as:{},icon:{},title:{},description:{},orientation:{default:"horizontal"},to:{},target:{},onClick:{},class:{},ui:{}},setup(C){const t=C,i=K(),n=F(()=>te({orientation:t.orientation,title:!!t.title||!!i.title})),e=F(()=>(t.title||i.title&&J(i.title())||"Card link").trim());return(s,h)=>{var y;const w=q,P=M;return a(),d(W(X),{as:s.as,"data-orientation":s.orientation,class:l(n.value.root({class:[t.class,(y=t.ui)==null?void 0:y.root]})),onClick:s.onClick},{default:$(()=>{var g,m;return[s.icon||i.leading?(a(),r("div",{key:0,class:l(n.value.leading({class:(g=t.ui)==null?void 0:g.leading}))},[u(s.$slots,"leading",{},()=>{var c;return[s.icon?(a(),d(w,{key:0,name:s.icon,class:l(n.value.leadingIcon({class:(c=t.ui)==null?void 0:c.leadingIcon}))},null,8,["name","class"])):o("",!0)]})],2)):o("",!0),O("div",{class:l(n.value.wrapper({class:(m=t.ui)==null?void 0:m.wrapper}))},[s.to?(a(),d(P,I({key:0,"aria-label":e.value},{to:s.to,target:s.target,...s.$attrs},{class:"focus:outline-none peer",tabindex:"-1",raw:""}),{default:$(()=>h[0]||(h[0]=[O("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):o("",!0),u(s.$slots,"default",{},()=>{var c,f;return[s.title||i.title?(a(),r("div",{key:0,class:l(n.value.title({class:(c=t.ui)==null?void 0:c.title}))},[u(s.$slots,"title",{},()=>[k(v(s.title),1)])],2)):o("",!0),s.description||i.description?(a(),r("div",{key:1,class:l(n.value.description({class:(f=t.ui)==null?void 0:f.description}))},[u(s.$slots,"description",{},()=>[k(v(s.description),1)])],2)):o("",!0)]})],2)]}),_:3},8,["as","data-orientation","class","onClick"])}}}),ae=Object.assign(ie,{__name:"UPageFeature"}),se={slots:{root:"relative isolate",container:"flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",wrapper:"",headline:"mb-3",leading:"flex items-center mb-6",leadingIcon:"size-10 shrink-0 text-(--ui-primary)",title:"text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3",features:"mt-8 grid"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty",features:"gap-4"},vertical:{container:"",headline:"justify-center",leading:"justify-center",title:"text-center",description:"text-center text-balance",links:"justify-center",features:"sm:grid-cols-2 lg:grid-cols-3 gap-8"}},reverse:{true:{wrapper:"lg:order-last"}},headline:{true:{headline:"font-semibold text-(--ui-primary) flex items-center gap-1.5"}},title:{true:{description:"mt-6"}},description:{true:""},features:{true:""}},compoundVariants:[{orientation:"vertical",title:!0,class:{features:"mt-16"}},{orientation:"vertical",description:!0,class:{features:"mt-16"}},{orientation:"vertical",features:!0,class:{links:"mt-16"}}]},ne={key:2,class:"hidden lg:block"},le=G;var E;const oe=b({extend:b(se),...((E=le.uiPro)==null?void 0:E.pageSection)||{}}),re=H({__name:"PageSection",props:{as:{default:"section"},headline:{},icon:{},title:{},description:{},links:{},features:{},orientation:{default:"vertical"},reverse:{type:Boolean},class:{},ui:{}},setup(C){const t=C,i=K(),n=F(()=>{var e;return oe({orientation:t.orientation,reverse:t.reverse,title:!!t.title||!!i.title,description:!!t.description||!!i.description,features:!!((e=t.features)!=null&&e.length)||!!i.features})});return(e,s)=>{var g;const h=q,w=ae,P=Y,y=R;return a(),d(W(X),{as:e.as,"data-orientation":e.orientation,class:l(n.value.root({class:[t.class,(g=t.ui)==null?void 0:g.root]}))},{default:$(()=>{var m;return[u(e.$slots,"top"),Q(y,{class:l(n.value.container({class:(m=t.ui)==null?void 0:m.container}))},{default:$(()=>{var c,f,z,U,B,j,V,_,N,x,L;return[e.icon||i.leading||e.headline||i.headline||e.title||i.title||e.description||i.description||(c=e.features)!=null&&c.length||i.features||(f=e.links)!=null&&f.length||i.links?(a(),r("div",{key:0,class:l(n.value.wrapper({class:(z=t.ui)==null?void 0:z.wrapper}))},[e.icon||i.leading?(a(),r("div",{key:0,class:l(n.value.leading({class:(U=t.ui)==null?void 0:U.leading}))},[u(e.$slots,"leading",{},()=>{var p;return[e.icon?(a(),d(h,{key:0,name:e.icon,class:l(n.value.leadingIcon({class:(p=t.ui)==null?void 0:p.leadingIcon}))},null,8,["name","class"])):o("",!0)]})],2)):o("",!0),e.headline||i.headline?(a(),r("div",{key:1,class:l(n.value.headline({class:(B=t.ui)==null?void 0:B.headline,headline:!i.headline}))},[u(e.$slots,"headline",{},()=>[k(v(e.headline),1)])],2)):o("",!0),e.title||i.title?(a(),r("h2",{key:2,class:l(n.value.title({class:(j=t.ui)==null?void 0:j.title}))},[u(e.$slots,"title",{},()=>[k(v(e.title),1)])],2)):o("",!0),e.description||i.description?(a(),r("div",{key:3,class:l(n.value.description({class:(V=t.ui)==null?void 0:V.description}))},[u(e.$slots,"description",{},()=>[k(v(e.description),1)])],2)):o("",!0),(_=e.features)!=null&&_.length||i.features?(a(),r("ul",{key:4,class:l(n.value.features({class:(N=t.ui)==null?void 0:N.features}))},[u(e.$slots,"features",{},()=>[(a(!0),r(T,null,A(e.features,(p,S)=>(a(),d(w,I({key:S,as:"li",ref_for:!0},p),null,16))),128))])],2)):o("",!0),(x=e.links)!=null&&x.length||i.links?(a(),r("div",{key:5,class:l(n.value.links({class:(L=t.ui)==null?void 0:L.links}))},[u(e.$slots,"links",{},()=>[(a(!0),r(T,null,A(e.links,(p,S)=>(a(),d(P,I({key:S,size:"lg",ref_for:!0},p),null,16))),128))])],2)):o("",!0)],2)):o("",!0),i.default?u(e.$slots,"default",{key:1}):e.orientation==="horizontal"?(a(),r("div",ne)):o("",!0)]}),_:3},8,["class"]),u(e.$slots,"bottom")]}),_:3},8,["as","data-orientation","class"])}}}),ce=Object.assign(re,{__name:"UPageSection"});export{ce as default};
