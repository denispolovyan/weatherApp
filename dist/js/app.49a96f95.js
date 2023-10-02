(function(){"use strict";var t={725:function(t,e,r){var s=r(963),o=r(252);const a={class:"wrapper"},i={class:"main__block"};function n(t,e,r,s,n,c){const u=(0,o.up)("header-navbar"),d=(0,o.up)("service-navbar"),l=(0,o.up)("quantity-navbar"),_=(0,o.up)("day-forecast"),y=(0,o.up)("push-message"),h=(0,o.up)("footer-navbar");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(u,{class:"header",onLoadForecast:c.loadForecast,currentCity:t.currentCity,responseError:t.responseError},null,8,["onLoadForecast","currentCity","responseError"]),(0,o.Wm)(d,{onAddServicesToForecast:c.addServicesToForecast},null,8,["onAddServicesToForecast"]),(0,o.Wm)(l,{onSetForecastLength:c.setForecastLength,onCurrentForecastResponse:c.loadCurrentForecast},null,8,["onSetForecastLength","onCurrentForecastResponse"]),(0,o._)("main",i,[(0,o.Wm)(_,{onSetFlagForCurrentForecast:e[0]||(e[0]=e=>t.flagForCurrentForecast=!0),quantityForecast:t.quantityForecast,currentForecast:t.currentForecast,services:t.services},null,8,["quantityForecast","currentForecast","services"]),t.showPushMessage?((0,o.wg)(),(0,o.j4)(y,{key:0})):(0,o.kq)("",!0)]),(0,o.Wm)(h,{class:"footer"})])}var c=r(577),u=r.p+"img/logo.6c88f80d.png";const d=t=>((0,o.dD)("data-v-1dcc98df"),t=t(),(0,o.Cn)(),t),l={class:"header"},_={class:"header__body"},y=d((()=>(0,o._)("div",{class:"logo"},[(0,o._)("div",{class:"logo__body"},[(0,o._)("img",{class:"logo__img",src:u,alt:"logo",style:{width:"60px"}})])],-1))),h={class:"list"},v={class:"list__body"},p={class:"list__item"},w={class:"city"},F={class:"city__body"},g={class:"list__item"};function m(t,e,r,s,a,i){const n=(0,o.up)("submit-form");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",_,[y,(0,o._)("div",h,[(0,o._)("div",v,[(0,o._)("div",p,[(0,o._)("div",w,[(0,o._)("div",F,(0,c.zw)(r.currentCity||"Select city"),1)])]),(0,o._)("div",g,[(0,o.Wm)(n,{onLoadForecast:i.loadForecast,responseError:r.responseError},null,8,["onLoadForecast","responseError"])])])])])])}const f=t=>((0,o.dD)("data-v-2b017ce8"),t=t(),(0,o.Cn)(),t),C={action:"",class:"form"},b={class:"form__input"},A=f((()=>(0,o._)("button",null,"find",-1))),S=[A];function D(t,e,r,a,i,n){return(0,o.wg)(),(0,o.iD)("form",C,[(0,o._)("div",b,[(0,o.wy)((0,o._)("input",{maxlength:"20",class:(0,c.C_)({redBorder:r.responseError&&!t.currentCity}),type:"text",placeholder:"Type your city","onUpdate:modelValue":e[0]||(e[0]=e=>t.currentCity=e)},null,2),[[s.nr,t.currentCity]])]),(0,o._)("div",{class:"form__button",onClick:[e[1]||(e[1]=(0,s.iM)((e=>t.$emit("loadForecast",t.currentCity)),["prevent"])),e[2]||(e[2]=e=>t.currentCity="")]},S)])}var k={props:{responseError:{type:Boolean}},data:()=>({currentCity:""})},q=r(744);const B=(0,q.Z)(k,[["render",D],["__scopeId","data-v-2b017ce8"]]);var E=B,z={components:{SubmitForm:E},props:{currentCity:{type:String,required:!0},responseError:{type:Boolean,required:!1}},methods:{loadForecast(t){this.$emit("loadForecast",t)}}};const j=(0,q.Z)(z,[["render",m],["__scopeId","data-v-1dcc98df"]]);var x=j;const O=t=>((0,o.dD)("data-v-b6a968f8"),t=t(),(0,o.Cn)(),t),W={class:"footer__body"},L=O((()=>(0,o._)("div",{class:"list"},[(0,o._)("div",{class:"list__body"},[(0,o._)("div",{class:"list__item"},"Weather in real time"),(0,o._)("div",{class:"list__item"},"© WeatherApp")])],-1))),I=[L];function M(t,e){return(0,o.wg)(),(0,o.iD)("div",W,I)}const Q={},Z=(0,q.Z)(Q,[["render",M],["__scopeId","data-v-b6a968f8"]]);var T=Z;const U=t=>((0,o.dD)("data-v-1417ed3b"),t=t(),(0,o.Cn)(),t),$={class:"cards__wrapper"},R=["onClick"],H={class:"card"},N={class:"card__body"},P={class:"weather"},V={class:"weather__date"},Y={class:"weather__temperature"},X={class:"max-weather"},K=U((()=>(0,o._)("br",null,null,-1))),G={class:"min-weather"},J=U((()=>(0,o._)("br",null,null,-1))),tt={class:"weather__icon"},et=["src"],rt={key:0,class:"rain"},st={key:1,class:"wind"},ot={key:2,class:"humidity"},at={key:3,class:"sunphase"},it={class:"sunphase__sunrise"},nt={class:"sunphase__sunset"};function ct(t,e,r,s,a,i){const n=(0,o.up)("hour-forecast"),u=(0,o.up)("current-forecast");return(0,o.wg)(),(0,o.iD)("div",$,[Object.keys(r.currentForecast).length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,c.C_)(["cards__container",{overflowX:t.showScroll}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.quantityForecast,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.date,onClick:e=>(i.select(t.date),i.showHourForecast(t.date))},[(0,o._)("div",H,[(0,o._)("div",N,[(0,o._)("div",P,[(0,o._)("div",V,(0,c.zw)(t.date),1),(0,o._)("div",Y,[(0,o._)("div",X,[(0,o.Uk)(" max"),K,(0,o.Uk)((0,c.zw)(Math.round(t.day.maxtemp_c)),1)]),(0,o._)("div",G,[(0,o.Uk)(" min"),J,(0,o.Uk)((0,c.zw)(Math.round(t.day.mintemp_c)),1)])]),(0,o._)("div",tt,[(0,o._)("img",{src:t.day.condition.icon,alt:"weather__icon"},null,8,et)]),r.services.rain?((0,o.wg)(),(0,o.iD)("div",rt," Rain: "+(0,c.zw)(t.day.daily_chance_of_rain)+" % ",1)):(0,o.kq)("",!0),r.services.wind?((0,o.wg)(),(0,o.iD)("div",st," Wind: "+(0,c.zw)(t.day.maxwind_kph)+" kph ",1)):(0,o.kq)("",!0),r.services.humidity?((0,o.wg)(),(0,o.iD)("div",ot," Humidity: "+(0,c.zw)(t.day.avghumidity)+" % ",1)):(0,o.kq)("",!0),r.services.sunphase?((0,o.wg)(),(0,o.iD)("div",at,[(0,o._)("div",it," Rise: "+(0,c.zw)(t.astro.sunrise),1),(0,o._)("div",nt," Set: "+(0,c.zw)(t.astro.sunset),1)])):(0,o.kq)("",!0)])])])],8,R)))),128))],2)),Object.keys(r.currentForecast).length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(n,{key:1,dayForecast:t.dayForecast},null,8,["dayForecast"])),Object.keys(r.currentForecast).length?((0,o.wg)(),(0,o.j4)(u,{key:2,currentForecast:r.currentForecast},null,8,["currentForecast"])):(0,o.kq)("",!0)])}const ut={class:"card"},dt={class:"card__body"},lt={class:"weather"},_t={class:"weather-date"},yt={class:"weather__temperature_hour"},ht={class:"weather__icon"},vt=["src"];function pt(t,e,r,s,a,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["hour-forecast__container",{addOverflowX:r.dayForecast.length}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.dayForecast,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.time},[(0,o._)("div",ut,[(0,o._)("div",dt,[(0,o._)("div",lt,[(0,o._)("div",_t,(0,c.zw)(t.time.split(" ")[1]),1),(0,o._)("div",yt,(0,c.zw)(Math.round(t.temp_c))+" °C ",1),(0,o._)("div",ht,[(0,o._)("img",{src:t.condition.icon,alt:"weather__icon"},null,8,vt)])])])])])))),128))],2)}var wt={props:{dayForecast:{type:Array,required:!1}}};const Ft=(0,q.Z)(wt,[["render",pt]]);var gt=Ft;const mt={class:"current"},ft={class:"current__body"},Ct={class:"current__date"},bt={class:"current__place"},At={class:"temperature"},St={class:"current__icon"},Dt=["src"],kt={class:"current__wind"};function qt(t,e,r,s,a,i){return(0,o.wg)(),(0,o.iD)("div",mt,[(0,o._)("div",ft,[(0,o._)("div",Ct," Update time: "+(0,c.zw)(r.currentForecast.current.last_updated),1),(0,o._)("div",bt,(0,c.zw)(r.currentForecast.location.name)+" , "+(0,c.zw)(r.currentForecast.location.region),1),(0,o._)("div",At,(0,c.zw)(r.currentForecast.current.temp_c)+" °С",1),(0,o._)("div",St,[(0,o._)("img",{src:r.currentForecast.current.condition.icon,alt:"weather image"},null,8,Dt)]),(0,o._)("div",kt," Wind: "+(0,c.zw)(r.currentForecast.current.wind_kph)+" kph ",1)])])}var Bt={props:{currentForecast:{type:Object,required:!1}}};const Et=(0,q.Z)(Bt,[["render",qt],["__scopeId","data-v-7d9c9339"]]);var zt=Et,jt={components:{HourForecast:gt,CurrentForecast:zt},props:{quantityForecast:{type:Array,required:!1},currentForecast:{type:Object,required:!1},services:{type:Object,required:!1}},data:()=>({currentDate:"",dayForecast:[],showScroll:!0,clientWidth:null}),methods:{select(t){this.currentDate=t},showHourForecast(t){if(t==this.currentDate){const e=this.quantityForecast.filter((e=>e.date==t));e.forEach((t=>{this.dayForecast=t.hour}))}},getWindowSize(){this.clientWidth=window.screen.width}},watch:{quantityForecast(){this.dayForecast=[],this.quantityForecast.length<8&&this.clientWidth>800?this.showScroll=!1:this.quantityForecast.length>3&&this.clientWidth<800?this.showScroll=!0:this.quantityForecast.length<4?this.showScroll=!1:this.showScroll=!0},currentForecast(){Object.keys(this.currentForecast).length&&this.$emit("setFlagForCurrentForecast")}},mounted(){window.addEventListener("resize",this.getWindowSize),this.getWindowSize()},beforeUnmount(){window.removeEventListener("resize",this.getWindowSize)}};const xt=(0,q.Z)(jt,[["render",ct],["__scopeId","data-v-1417ed3b"]]);var Ot=xt;const Wt={class:"service"};function Lt(t,e,r,s,a,i){return(0,o.wg)(),(0,o.iD)("div",Wt,[(0,o._)("div",{class:"service__body",onClick:e[4]||(e[4]=e=>t.$emit("addServicesToForecast",t.services))},[(0,o._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.wind}]),id:"wind",onClick:e[0]||(e[0]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Wind ",2),(0,o._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.rain}]),id:"rain",onClick:e[1]||(e[1]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Rain ",2),(0,o._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.humidity}]),id:"humidity",onClick:e[2]||(e[2]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Humidity ",2),(0,o._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.sunphase}]),id:"sunphase",onClick:e[3]||(e[3]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Sunrise/Sunset ",2)])])}var It={data:()=>({services:{wind:!1,rain:!1,humidity:!1,sunphase:!1}}),methods:{setStylesForButton(t){for(let r in this.services)this.services[r]=!1;let e=t.target.id;this.services[e]=!0}}};const Mt=(0,q.Z)(It,[["render",Lt],["__scopeId","data-v-a28ae2de"]]);var Qt=Mt;const Zt={class:"quantity"},Tt={class:"quantity__body"};function Ut(t,e,r,a,i,n){return(0,o.wg)(),(0,o.iD)("div",Zt,[(0,o._)("div",Tt,[(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.now}]),id:"now",onClick:[e[0]||(e[0]=(0,s.iM)((e=>t.$emit("currentForecastResponse")),["stop"])),e[1]||(e[1]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Now ",2),(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.today}]),id:"today",onClick:[e[2]||(e[2]=(0,s.iM)((e=>t.$emit("setForecastLength",1)),["stop"])),e[3]||(e[3]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Today ",2),(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.tomorrow}]),id:"tomorrow",onClick:[e[4]||(e[4]=(0,s.iM)((e=>t.$emit("setForecastLength",2)),["stop"])),e[5]||(e[5]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Tomorrow ",2),(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.threeDays}]),id:"threeDays",onClick:[e[6]||(e[6]=(0,s.iM)((e=>t.$emit("setForecastLength",3)),["stop"])),e[7]||(e[7]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 3 days ",2),(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.sevenDays}]),id:"sevenDays",onClick:[e[8]||(e[8]=(0,s.iM)((e=>t.$emit("setForecastLength",7)),["stop"])),e[9]||(e[9]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 7 days ",2),(0,o._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.fourteenDays}]),id:"fourteenDays",onClick:[e[10]||(e[10]=(0,s.iM)((e=>t.$emit("setForecastLength",14)),["stop"])),e[11]||(e[11]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 14 days ",2)])])}var $t={data:()=>({quantity:{now:!1,today:!1,tomorrow:!1,threeDays:!0,sevenDays:!1,fourteenDays:!1}}),methods:{setStylesForButton(t){for(let r in this.quantity)this.quantity[r]=!1;let e=t.target.id;this.quantity[e]=!0}}};const Rt=(0,q.Z)($t,[["render",Ut],["__scopeId","data-v-491538e1"]]);var Ht=Rt,Nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrVWBEYIwDAxOwAY6ApuIG3QDu4E4AWzCOQEjwAbVCRghppoeOSS0B/5djqP5fr8lDQALQMScwlC0FA4n9DxmIBVELilGjMNFhYlQiwkdhaU4iXzBzp3g3TSxGxO8OwvxnVicdlLPk0aIFZAIdhxES5kIW7DKxA9WnAYzuXTnQHeiCnK+Y4o50PuZx++wHQ9+ll69Z/VixUHM4SnsMgvEjLAmmMo5wJ/hBZ+8wlEjZQwtL45r8IIDv1xgO4LgS5ZNB7qD2EdxoWxCZxl3FPb1p47x22H2Xj0zTzZCNKU5XIVYpZEqnOD4fAuR9wVsxVXzaGIrz/udBu+uhFTg9AvoZ65bzuVL895dTSBEfYB7LgAAAABJRU5ErkJggg==";const Pt=t=>((0,o.dD)("data-v-b3bebc72"),t=t(),(0,o.Cn)(),t),Vt={class:"push-message"},Yt=Pt((()=>(0,o._)("div",{class:"push-message__body"},[(0,o._)("div",{class:"push-message__title"},"Error!"),(0,o._)("div",{class:"push-message__text"}," Free API does not support such requests "),(0,o._)("img",{class:"push-message__img",src:Nt,alt:"error message"})],-1))),Xt=[Yt];function Kt(t,e){return(0,o.wg)(),(0,o.iD)("div",Vt,Xt)}const Gt={},Jt=(0,q.Z)(Gt,[["render",Kt],["__scopeId","data-v-b3bebc72"]]);var te=Jt;const ee="77b6a98ada8b4138b34193721230303",re="https://api.weatherapi.com/v1/";function se(t="Kiev",e){return fetch(`${re}forecast.json?key=${ee}&q=${t}&days=${e}`).then((t=>t.json())).then((t=>2==e?[t.forecast.forecastday.pop()]:t.forecast.forecastday)).catch((t=>t))}async function oe(t="Kiev"){return await fetch(`${re}current.json?key=${ee}&q=${t}`).then((t=>t.json())).catch((t=>t))}var ae={name:"App",components:{HeaderNavbar:x,FooterNavbar:T,DayForecast:Ot,ServiceNavbar:Qt,QuantityNavbar:Ht,PushMessage:te},data:()=>({quantityForecast:[],currentForecast:[],currentCity:"",currentCityDuplicate:"",forecastDaysQuantity:"3",services:{},responseError:!1,flagForCurrentForecast:!1,showPushMessage:!1}),methods:{async loadForecast(t){if(this.forecastDaysQuantity>3&&(this.showPushMessage=!0,setTimeout((()=>{this.showPushMessage=!1}),3e3)),this.flagForCurrentForecast&&this.currentCity!=t)return this.currentCity=t,this.forecastDaysQuantity="",void this.loadCurrentForecast();const e=await se(t,this.forecastDaysQuantity);Array.isArray(e)?(this.flagForCurrentForecast=!1,this.responseError=!1,this.quantityForecast=e,this.currentCity=t,this.currentCityDuplicate=t,this.currentForecast=[]):this.responseError=!0},async loadCurrentForecast(){const t=await oe(this.currentCity);if("object"!=typeof t||t["error"])return this.responseError=!0,void(this.currentCity=this.currentCityDuplicate);this.forecastDaysQuantity="",this.responseError=!1,this.currentForecast=t,this.currentCityDuplicate=this.currentCity},setForecastLength(t){this.forecastDaysQuantity=t},addServicesToForecast(t){this.services=t}},watch:{forecastDaysQuantity(){this.forecastDaysQuantity&&this.loadForecast(this.currentCity)}},created(){this.loadForecast("Kiev")}};const ie=(0,q.Z)(ae,[["render",n]]);var ne=ie;(0,s.ri)(ne).mount("#app")}},e={};function r(s){var o=e[s];if(void 0!==o)return o.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,s,o,a){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],a=t[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(n=!1,a<i&&(i=a));if(n){t.splice(d--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,o,a]}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/weatherApp/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,a,i=s[0],n=s[1],c=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(c)var d=c(r)}for(e&&e(s);u<i.length;u++)a=i[u],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(d)},s=self["webpackChunkweatherapp"]=self["webpackChunkweatherapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(725)}));s=r.O(s)})();
//# sourceMappingURL=app.49a96f95.js.map