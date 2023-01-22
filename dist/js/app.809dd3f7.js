(function(){"use strict";var r={6899:function(r,t,e){var o=e(9242),n=e(3396),i=e(7139);const l={style:{height:"100vh"}},u={class:"container"},s=(0,n._)("div",{class:"title"},[(0,n._)("h1",null,"Shortly"),(0,n._)("p",null,"Url shortener app using Options API in Vue.js Framework")],-1),a={class:"form-control"},c={class:"form-input"},h=(0,n._)("button",{type:"submit",class:"btn-submit"},"Get link",-1),p={key:0,class:"result"},f=(0,n._)("path",{d:"M10.3529 3.8C10.8706 3.8 11.3136 3.98588 11.6819 4.35765C12.0508 4.73005 12.2353 5.1775 12.2353 5.7L12.2353 17.1C12.2353 17.6225 12.0508 18.07 11.6819 18.4424C11.3136 18.8141 10.8706 19 10.3529 19L1.88235 19C1.36471 19 0.921413 18.8141 0.552472 18.4424C0.184158 18.07 1.78692e-06 17.6225 1.74125e-06 17.1L7.44626e-07 5.7C6.98947e-07 5.1775 0.184157 4.73005 0.552471 4.35765C0.921412 3.98588 1.36471 3.8 1.88235 3.8L10.3529 3.8ZM10.3529 5.7L1.88235 5.7L1.88235 17.1L10.3529 17.1L10.3529 5.7ZM14.1176 -1.74279e-06C14.6353 -1.78804e-06 15.0786 0.185881 15.4475 0.557648C15.8158 0.930048 16 1.3775 16 1.9L16 14.25C16 14.5192 15.9096 14.7449 15.7289 14.9273C15.5489 15.1091 15.3255 15.2 15.0588 15.2C14.7922 15.2 14.5685 15.1091 14.3878 14.9273C14.2077 14.7449 14.1176 14.5192 14.1176 14.25L14.1176 1.9L4.70588 1.9C4.43922 1.9 4.21553 1.8088 4.03482 1.6264C3.85474 1.44463 3.76471 1.21916 3.76471 0.95C3.76471 0.680833 3.85474 0.455365 4.03482 0.273599C4.21553 0.091199 4.43922 -8.96673e-07 4.70588 -9.19986e-07L14.1176 -1.74279e-06Z",fill:"black"},null,-1),v=[f],d={key:1,class:"error"},b=(0,n._)("div",{class:"footer"},[(0,n._)("a",{href:"https://github.com/rustam-fozilov",target:"_blank"},"Developer: Rustam Fozilov")],-1);function g(r,t,e,f,g,w){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",u,[s,(0,n._)("div",a,[(0,n._)("div",c,[(0,n._)("form",{action:"",onSubmit:t[1]||(t[1]=(0,o.iM)(((...r)=>w.getShortUrl&&w.getShortUrl(...r)),["prevent"]))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>g.urlInput=r),type:"text",name:"urlName",placeholder:"Enter your url..."},null,512),[[o.nr,g.urlInput]]),h],32)]),g.result?((0,n.wg)(),(0,n.iD)("div",p,[(0,n.Uk)("Your url: "),(0,n._)("span",null,[(0,n.Uk)((0,i.zw)(g.shortUrl)+" ",1),((0,n.wg)(),(0,n.iD)("svg",{onClick:t[2]||(t[2]=(...r)=>w.copyToClipboard&&w.copyToClipboard(...r)),width:"16",height:"19",viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v))])])):(0,n.kq)("",!0),g.error?((0,n.wg)(),(0,n.iD)("div",d,(0,i.zw)(g.errorText),1)):(0,n.kq)("",!0)]),b])])}var w=e(6943),C={name:"App",data(){return{error:!1,result:!1,shortUrl:"",urlInput:"",errorText:""}},methods:{getShortUrl(){w.Z.post("https://t.ly/api/v1/link/shorten",{api_token:"Clo0A8CI9AF6PooLuaBdWc5yIf1uwF3WKBBXqONmY9MwqbXSzfD2wgsOwMBm",long_url:this.urlInput,domain:"https://t.ly/",include_qr_code:!1}).then((r=>{this.result=!0,this.error=!1,this.shortUrl=r.data.short_url,this.urlInput=""})).catch((r=>{this.error=!0,this.result=!1,this.errorText="Please enter correct url !"}))},copyToClipboard(){navigator.clipboard.writeText(this.shortUrl).then((()=>{console.log("Content copied to clipboard")}),(()=>{console.error("Failed to copy")}))}}},_=e(89);const m=(0,_.Z)(C,[["render",g]]);var y=m;(0,o.ri)(y).mount("#app")}},t={};function e(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return r[o](i,i.exports,e),i.exports}e.m=r,function(){var r=[];e.O=function(t,o,n,i){if(!o){var l=1/0;for(c=0;c<r.length;c++){o=r[c][0],n=r[c][1],i=r[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(e.O).every((function(r){return e.O[r](o[s])}))?o.splice(s--,1):(u=!1,i<l&&(l=i));if(u){r.splice(c--,1);var a=n();void 0!==a&&(t=a)}}return t}i=i||0;for(var c=r.length;c>0&&r[c-1][2]>i;c--)r[c]=r[c-1];r[c]=[o,n,i]}}(),function(){e.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return e.d(t,{a:t}),t}}(),function(){e.d=function(r,t){for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)}}(),function(){var r={143:0};e.O.j=function(t){return 0===r[t]};var t=function(t,o){var n,i,l=o[0],u=o[1],s=o[2],a=0;if(l.some((function(t){return 0!==r[t]}))){for(n in u)e.o(u,n)&&(e.m[n]=u[n]);if(s)var c=s(e)}for(t&&t(o);a<l.length;a++)i=l[a],e.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return e.O(c)},o=self["webpackChunkvue_url_shortener"]=self["webpackChunkvue_url_shortener"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(6899)}));o=e.O(o)})();
//# sourceMappingURL=app.809dd3f7.js.map