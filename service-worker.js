if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),t={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>t[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-600ee3f1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"魔法崩坏"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.5d72cc0e.js",revision:"ff3c0e51a842492cf8dcc252ae1d1e9a"},{url:"assets/404.html.59d77cae.js",revision:"abe51695b99c0183230e21481c70e219"},{url:"assets/404.html.5af939ef.js",revision:"a851ab3f3112bffcfe2008b9395870f5"},{url:"assets/app.edcb9e1a.js",revision:"f1ae2baf0bf367e03826c9ab63f7498a"},{url:"assets/arms.html.babfa1a7.js",revision:"95514e65744d01b8a5396b2349aa0ed5"},{url:"assets/arms.html.bd3b6c10.js",revision:"9bbff85f92f337bd2367f39e5d4b475e"},{url:"assets/battle.html.06a033ef.js",revision:"7e63e72b4161a7ee29568e68b0105a4d"},{url:"assets/battle.html.b1482e2d.js",revision:"4d2185658373f875c28e101b99ee55c8"},{url:"assets/card.html.5349d48d.js",revision:"253db42463c076fb89f518a9865d6a94"},{url:"assets/card.html.fc94e48c.js",revision:"1cde5f9933b08fc8054a106fd4525ff2"},{url:"assets/enemy.html.6a5bf1c7.js",revision:"b7e7eda87c541356772d4cb3873b0515"},{url:"assets/enemy.html.8fa05981.js",revision:"75c74d55a772758f0ee6b7103f368eee"},{url:"assets/home.html.496a3339.js",revision:"4f961390c5b1a4197914e57cde4c56dc"},{url:"assets/home.html.b782aa71.js",revision:"c37ddba9a5c6cc614d58de459554ffb2"},{url:"assets/index.cecffef2.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.1a46b93d.js",revision:"87c95102e3f2705aa53182fa9004f284"},{url:"assets/index.html.32ef663d.js",revision:"05c7a2028d51e5b9d29da2a7fa761c82"},{url:"assets/index.html.62b14e7e.js",revision:"c924640a64b6e4a2910952c55f469489"},{url:"assets/index.html.9901f7ad.js",revision:"63abb940b37e607cbecf19b3f42327fd"},{url:"assets/index.html.ef7d7951.js",revision:"5894108d34d630f54440e84d3f1936e8"},{url:"assets/index.html.fdffcc35.js",revision:"019aabe7f2bad83ef66c1b9b8d0a472f"},{url:"assets/intro.html.8b38c802.js",revision:"0d4ad0ca0a67c71a8ff57a45204ee672"},{url:"assets/intro.html.b9ad7502.js",revision:"e09c88d0168a6cd3f1cf65aff20be7f5"},{url:"assets/KisaragiStation.html.4bb43fa7.js",revision:"fedf0ffa7ae423c18007d210c73ff97c"},{url:"assets/KisaragiStation.html.cb44dde9.js",revision:"8e10a28cb7702227f0499dc31920376b"},{url:"assets/Layout.e1a8ce5a.js",revision:"d044272b6c63590e06861f5e89cda198"},{url:"assets/photoswipe.esm.03eca607.js",revision:"46b7df7a8cdd49d4b0b5ca9b2abb218b"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/san.html.1248d7ff.js",revision:"79715148ba54d966ff72c410cdfa7253"},{url:"assets/san.html.d66702b8.js",revision:"d2eb98cc9ab101847db7f127caa7b265"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.fc15abff.js",revision:"e2bf1b6fcfaafad79ebbdca24993eedd"},{url:"assets/style.0c8ccf9b.css",revision:"4c42992ea8bfbba4d12b80ae937872a2"},{url:"assets/system.html.286bdcad.js",revision:"aaa990fa889725a1fa86a1334d50bb19"},{url:"assets/system.html.fea8453e.js",revision:"377fdb6b9c10fba717c611a8e173f616"},{url:"assets/updatelog.html.0dfd38eb.js",revision:"9e3eab534707242ec003c6f338b8ac59"},{url:"assets/updatelog.html.a976d910.js",revision:"494f80fbaf172be12e346f03577a1199"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"e8303fcf97827349dea87523736f5004"},{url:"404.html",revision:"b601b2241bdd878f68dbc00dce6fdca5"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
