"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46022:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Sync Token Supply",hide_table_of_contents:!1,sidebar_position:2},i="Sync BEP2 and BEP20 Token Supply",o={unversionedId:"sync",id:"sync",isDocsHomePage:!1,title:"Sync BEP2 and BEP20 Token Supply",description:"Prerequisite",source:"@site/docs/sync.md",sourceDirName:".",slug:"/sync",permalink:"/docs/sync",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/sync.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Sync Token Supply",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Token Circulation Model",permalink:"/docs/circulation-model"},next:{title:"Upgradable BEP20 Contracts on BSC",permalink:"/docs/proxy"}},p=[{value:"Prerequisite",id:"prerequisite",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"What happens under the hood",id:"what-happens-under-the-hood",children:[],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2},{value:"Mirror With MyEtherWallet",id:"mirror-with-myetherwallet",children:[],level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sync-bep2-and-bep20-token-supply"},"Sync BEP2 and BEP20 Token Supply"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"This BEP20 token is ",(0,r.kt)("a",{parentName:"p",href:"/docs/mirror"},"mirrored")," to a BEP2 token."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"For a BEP20 token which has been mirrored to BC, anyone can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync")," method to balance the total supply on BC and BSC. Thus, the total supply among two Blockchains will remain the same."),(0,r.kt)("h2",{id:"what-happens-under-the-hood"},"What happens under the hood"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify there is already mirrored"),(0,r.kt)("li",{parentName:"ul"},"Check the total supply and token symbol is valid"),(0,r.kt)("li",{parentName:"ul"},"Send a cross-chain package to modify a BEP2 token total supply on Binance Chain")),(0,r.kt)("p",null,"After syncing, the total supply on BC and BSC are the same."),(0,r.kt)("h2",{id:"fee-table"},"Fee Table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fee Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncFee"),(0,r.kt)("td",{parentName:"tr",align:null},"it's 0.002BNB on mainnet now")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relayFee"),(0,r.kt)("td",{parentName:"tr",align:null},"it's 0.002BNB on mainnet now")))),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"syncFee")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"relayFee")," can be changed by on-chain governance"),(0,r.kt)("p",null,"To query ",(0,r.kt)("inlineCode",{parentName:"p"},"syncFee")," from system contract;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Tokenmanager")," ",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008#readContract"},"Contract")," with the latest ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/bnb-chain/bsc-genesis-contract/master/abi/tokenmanager.abi"},"ABI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query ",(0,r.kt)("inlineCode",{parentName:"p"},"syncFee")," function"))),(0,r.kt)("p",null,"Fee= result/1e18"),(0,r.kt)("p",null,"To query ",(0,r.kt)("inlineCode",{parentName:"p"},"relayFee")," from system contract;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenHub")," ",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001004#readContract"},"Contract")," with the latest ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/bnb-chain/bsc-genesis-contract/master/abi/tokenhub.abi"},"ABI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Query ",(0,r.kt)("inlineCode",{parentName:"p"},"getMiniRelayFee")," function"))),(0,r.kt)("p",null,"Fee= result/1e18"),(0,r.kt)("h2",{id:"mirror-with-myetherwallet"},"Mirror With MyEtherWallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"Tokenmanager")," Contract")),(0,r.kt)("p",null,"Use the latest ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/abi/tokenmanager.abi"},"ABI")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/SYyvWVcLHELSE72JSXqBwMJB6Y50jMz5HgH6irmCbyxGwr-W_Hz-vbm4IqWXAqE2hvCAXaqNKfs28ZhGFtMrMrDgWvDfEkHPunnSuxSKPpLBtuxmiX-b5yRjfczENJxKDrqSAYWy",alt:"img"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"sync")," function and fill-in with your BEP20 address")),(0,r.kt)("p",null,"The value here should be no less than  ",(0,r.kt)("inlineCode",{parentName:"p"},"syncFee"),"+ ",(0,r.kt)("inlineCode",{parentName:"p"},"relayFee"),"."),(0,r.kt)("p",null,"Time stamp should be greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())"),". The difference should be between 120 and 86400. It's recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())+1000")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/EIgRKIBY8unMsuSBa88jY_EXdJeO1WtaXTQLV905AZmPJDsN72chHcPZrDEWOeD8m1a1awEwP43Uh0eFURLXSKQvnfc3J9YzWLYuBvAeVwIwicKfLUZlCkvkR0NdWxkYWAQKa3Ii",alt:"img"})),(0,r.kt)("p",null,"All set!"))}s.isMDXComponent=!0}}]);