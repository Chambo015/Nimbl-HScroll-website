import{d as _,f as b,r as o,h as v,L as y,M as E,v as u,o as k,g as x,c as S,b as e,u as t,s as f,a as C,N as P}from"./index-b6f4d96e.js";const W="/assets/swipe-cc1a21df.png",I="/assets/swipe-toFilter-4815ec03.png",A="/assets/swipe-toSave-e210cc57.png",O="/assets/swipe-f831dfb2.webp",L="/assets/swipe-toFilter-ae2a5cef.webp",B="/assets/swipe-toSave-20dcb460.webp",M={class:"container flex gap-14 justify-between items-center max-sm:flex-col max-xl:justify-center"},R=e("h2",{class:"bg-gradient-to-b from-white to-white/50 font-rfdewi text-transparent bg-clip-text text-5xl font-black uppercase max-sm:text-2xl max-sm:text-center"}," SWIPE ",-1),$=e("p",{class:"text-2xl text-white/80 mt-8 font-gilroy max-sm:text-base max-sm:text-center max-sm:mt-4"},[P(" Be in control of the content that you receive on feed. "),e("span",{class:"mt-4 block max-sm:inline max-sm:mt-0"},"Swipe left to filter, swipe right to save")],-1),j=[R,$],N=["srcset"],V=["src"],X=["srcset"],F=["src"],Y=["srcset"],z=["src"],T=_({__name:"SwipeView",setup(D){const d=b("(max-width: 640px)"),l=o(),c=o(),p=o(),r=o(),i=o(),{onWheel:m}=v({toDownRoute:"teaser",toUpRoute:"moderation",target:l}),n=y(E(l)),h=u(()=>({transform:`translateX(${n.tilt*20}px) translateY(${n.roll*20}px)`})),g=u(()=>({transform:`translateX(${n.tilt*-20}px) translateY(${n.roll*20}px)`}));return k(()=>{if(d.value){const a=x.timeline();a.from(r.value,{autoAlpha:0,duration:1.5,xPercent:50,rotate:10,ease:"expo.inOut"}),a.from(i.value,{autoAlpha:0,duration:1.5,xPercent:-50,rotate:-10,ease:"expo.inOut"},"-=1");return}const s=x.timeline();s.from(c.value,{xPercent:100,autoAlpha:0,duration:1.5,ease:"expo.inOut"}),s.from(p.value.children,{autoAlpha:0,duration:1.5,xPercent:-100,stagger:.2,ease:"expo.inOut"},"0"),s.from(r.value,{autoAlpha:0,duration:1.5,xPercent:50,rotate:10,ease:"expo.inOut"},"-=1"),s.from(i.value,{autoAlpha:0,duration:1.5,xPercent:-50,rotate:-10,ease:"expo.inOut"},"-=1")}),(s,a)=>(C(),S("section",{ref_key:"sectionEl",ref:l,onWheel:a[0]||(a[0]=(...w)=>t(m)&&t(m)(...w)),class:"flex"},[e("div",M,[e("div",{ref_key:"contentEl",ref:p,data:"contentEl",class:"w-[500px] max-sm:w-full"},j,512),e("div",{ref_key:"mainImgEl",ref:c,data:"mainImgEl",class:"relative [&>picture]:pointer-events-none [&>picture]:select-none"},[e("picture",null,[e("source",{srcset:t(O),type:"image/webp"},null,8,N),e("img",{src:t(W),alt:"mobileImg",class:"max-h-[744px] max-2xl:max-h-[100vh] max-sm:w-[230px] max-sm:h-[380px] object-contain transition-all"},null,8,V)]),e("picture",null,[e("source",{srcset:t(L),type:"image/webp"},null,8,X),e("img",{ref_key:"leftCardEl",ref:r,data:"leftCardEl",style:f(g.value),src:t(I),alt:"swipeLeft",class:"absolute top-[5%] -left-[40%]"},null,12,F)]),e("picture",null,[e("source",{srcset:t(B),type:"image/webp"},null,8,Y),e("img",{ref_key:"rightCardEl",ref:i,data:"rightCardEl",style:f(h.value),src:t(A),alt:"swipeLeft",class:"absolute top-[5%] -right-[40%]"},null,12,z)])],512)])],544))}});export{T as default};