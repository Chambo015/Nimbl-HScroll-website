import{_ as g,u as w,H as v}from"./index-413a180c.js";import{o as x,b as f,D as b,d as y,A as V,r as a,k as H,g as t,h as m,i as d,u as e,j as h}from"./@vueuse/core-5722f488.js";import{g as p}from"./gsap-4db78ffb.js";import"./vue3-lottie-d815f3de.js";import"./axios-21b846bc.js";const k="/assets/hand_lg-e7ae3c3f.png",E="/assets/hand_lg-c5e71dd9.webp",M={},P={width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",class:"w-[25px] h-[25px]",xmlns:"http://www.w3.org/2000/svg"},I=b('<g clip-path="url(#clip0_6964_8636)"><path opacity="0.4" d="M3.58065 16.7109H0V20.2916H3.58065V16.7109Z" fill="white"></path><path opacity="0.4" d="M37.0006 16.7109H33.4199V20.2916H37.0006V16.7109Z" fill="white"></path><path opacity="0.4" d="M20.2896 33.418H16.709V36.9986H20.2896V33.418Z" fill="white"></path><path opacity="0.4" d="M20.2896 0H16.709V3.58065H20.2896V0Z" fill="white"></path><path d="M20.2896 16.7109H16.709V20.2916H20.2896V16.7109Z" fill="white"></path></g><defs><clipPath id="clip0_6964_8636"><rect width="37" height="37" fill="white"></rect></clipPath></defs>',2),O=[I];function j(u,n){return x(),f("svg",P,O)}const A=g(M,[["render",j]]),W={class:"container justify-between flex max-sm:flex-col h-full max-sm:justify-start max-sm:pt-5"},B=t("h2",{class:"bg-gradient-to-b from-white to-white/50 text-transparent bg-clip-text font-rfdewi font-black uppercase text-5xl max-sm:text-2xl max-sm:text-center"},[h(" clips"),t("span",{class:"text-2xl font-univers lowercase mx-1 max-sm:text-sm"},"to"),h("Longs ")],-1),D=t("p",{class:"w-[540px] font-gilroy text-2xl text-white mt-14 max-sm:text-base max-sm:w-full max-sm:text-center max-sm:mt-3"}," Post a short-form teaser leading to a long-form video, get the outreach of bite-sized content into your longer piece of content. ",-1),N={class:"mt-14 opacity-10 max-sm:justify-center max-sm:hidden"},Z=t("p",{class:"font-rfdewi text-2xl max-sm:text-sm font-bold"},"DOWNLOAD APP",-1),z={class:"relative"},L=["srcset"],S=["src"],$=t("div",{class:"from-transparent to-[#0F0722] bg-gradient-to-r absolute right-0 inset-y-0 w-[200px] max-sm:hidden"},null,-1),C=t("div",{class:"absolute w-[31%] z-20 h-[70%] top-[5%] left-[11%] rounded-[50px] overflow-hidden max-sm:w-[31%] max-sm:left-[11%] max-sm:rounded-3xl"},[t("video",{class:"w-full h-full max-sm:rounded-3xl",muted:"",loop:"",autoplay:""},[t("source",{src:"https://d2n3zca7e0phmo.cloudfront.net/lv_0_20230824191446.mp4",type:"video/mp4",class:"max-sm:rounded-3xl"})])],-1),X=y({__name:"TeaserView",setup(u){const n=V("(max-width: 700px)"),i=a(),s=a(),l=a(),{onWheel:r}=w({toDownRoute:"gamification",toUpRoute:"swipe",target:i});return H(()=>{if(n.value){p.from(s.value,{xPercent:100,autoAlpha:0,duration:1,rotate:180,transformOrigin:"bottom right",ease:"expo.inOut"});return}const o=p.timeline();o.from(s.value,{xPercent:100,autoAlpha:0,duration:1.5,rotate:180,transformOrigin:"bottom right",ease:"expo.inOut"}),o.from(l.value.children,{autoAlpha:0,duration:1.5,xPercent:-100,stagger:.2,ease:"expo.inOut"},"0")}),(o,c)=>(x(),f("section",{ref_key:"sectionEl",ref:i,onWheel:c[0]||(c[0]=(..._)=>e(r)&&e(r)(..._)),class:"pt-12 max-sm:pt-0"},[t("div",W,[t("div",{ref_key:"contentEl",ref:l,data:"contentEl",class:"self-center flex-shrink-0"},[B,D,t("div",N,[m(v,{class:"w-[500px] h-[95px] cursor-wait",title:"coming soon"},{icon:d(()=>[m(A,{class:"w-[37px] h-[37px]"})]),default:d(()=>[Z]),_:1})])],512),t("div",{ref_key:"mainImgEl",ref:s,data:"mainImgEl",class:"shrink-0 max-sm:mt-5 relative max-sm:w-[180%]"},[t("picture",z,[t("source",{srcset:e(E),type:"image/webp"},null,8,L),t("img",{loading:"lazy",src:e(k),alt:"handImg",class:"w-full h-full object-contain object-bottom max-sm:h-auto relative"},null,8,S)]),$,C],512)])],544))}});export{X as default};