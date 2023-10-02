(function(){"use strict";var t={623:function(t,e,r){var s=r(963),a=r(252);const o={class:"wrapper"},i={class:"main__block"};function n(t,e,r,s,n,c){const u=(0,a.up)("header-navbar"),d=(0,a.up)("service-navbar"),l=(0,a.up)("quantity-navbar"),y=(0,a.up)("day-forecast"),_=(0,a.up)("push-message"),h=(0,a.up)("footer-navbar");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(u,{class:"header",onLoadForecast:c.loadForecast,currentCity:t.currentCity,responseError:t.responseError},null,8,["onLoadForecast","currentCity","responseError"]),(0,a.Wm)(d,{onAddServicesToForecast:c.addServicesToForecast},null,8,["onAddServicesToForecast"]),(0,a.Wm)(l,{onSetForecastLength:c.setForecastLength,onCurrentForecastResponse:c.loadCurrentForecast},null,8,["onSetForecastLength","onCurrentForecastResponse"]),(0,a._)("main",i,[(0,a.Wm)(y,{onSetFlagForCurrentForecast:e[0]||(e[0]=e=>t.flagForCurrentForecast=!0),quantityForecast:t.quantityForecast,currentForecast:t.currentForecast,services:t.services},null,8,["quantityForecast","currentForecast","services"]),t.showPushMessage?((0,a.wg)(),(0,a.j4)(_,{key:0})):(0,a.kq)("",!0)]),(0,a.Wm)(h,{class:"footer"})])}var c=r(577),u=r.p+"img/logo.6c88f80d.png";const d=t=>((0,a.dD)("data-v-110595ed"),t=t(),(0,a.Cn)(),t),l={class:"header__body"},y=d((()=>(0,a._)("div",{class:"logo"},[(0,a._)("div",{class:"logo__body"},[(0,a._)("img",{class:"logo__img",src:u,alt:"logo",style:{width:"60px"}})])],-1))),_={class:"list"},h={class:"list__body"},v={class:"list__item"},p={class:"city"},w={class:"city__body"},F={class:"list__item"};function g(t,e,r,s,o,i){const n=(0,a.up)("submit-form");return(0,a.wg)(),(0,a.iD)("div",l,[y,(0,a._)("div",_,[(0,a._)("div",h,[(0,a._)("div",v,[(0,a._)("div",p,[(0,a._)("div",w,(0,c.zw)(r.currentCity||"Select city"),1)])]),(0,a._)("div",F,[(0,a.Wm)(n,{onLoadForecast:i.loadForecast,responseError:r.responseError},null,8,["onLoadForecast","responseError"])])])])])}const m=t=>((0,a.dD)("data-v-2b017ce8"),t=t(),(0,a.Cn)(),t),f={action:"",class:"form"},C={class:"form__input"},b=m((()=>(0,a._)("button",null,"find",-1))),A=[b];function S(t,e,r,o,i,n){return(0,a.wg)(),(0,a.iD)("form",f,[(0,a._)("div",C,[(0,a.wy)((0,a._)("input",{maxlength:"20",class:(0,c.C_)({redBorder:r.responseError&&!t.currentCity}),type:"text",placeholder:"Type your city","onUpdate:modelValue":e[0]||(e[0]=e=>t.currentCity=e)},null,2),[[s.nr,t.currentCity]])]),(0,a._)("div",{class:"form__button",onClick:[e[1]||(e[1]=(0,s.iM)((e=>t.$emit("loadForecast",t.currentCity)),["prevent"])),e[2]||(e[2]=e=>t.currentCity="")]},A)])}var D={props:{responseError:{type:Boolean}},data:()=>({currentCity:""})},k=r(744);const q=(0,k.Z)(D,[["render",S],["__scopeId","data-v-2b017ce8"]]);var B=q,E={components:{SubmitForm:B},props:{currentCity:{type:String,required:!0},responseError:{type:Boolean,required:!1}},methods:{loadForecast(t){this.$emit("loadForecast",t)}}};const z=(0,k.Z)(E,[["render",g],["__scopeId","data-v-110595ed"]]);var j=z;const x=t=>((0,a.dD)("data-v-b6a968f8"),t=t(),(0,a.Cn)(),t),O={class:"footer__body"},W=x((()=>(0,a._)("div",{class:"list"},[(0,a._)("div",{class:"list__body"},[(0,a._)("div",{class:"list__item"},"Weather in real time"),(0,a._)("div",{class:"list__item"},"© WeatherApp")])],-1))),L=[W];function I(t,e){return(0,a.wg)(),(0,a.iD)("div",O,L)}const M={},Q=(0,k.Z)(M,[["render",I],["__scopeId","data-v-b6a968f8"]]);var Z=Q;const T=t=>((0,a.dD)("data-v-594a7211"),t=t(),(0,a.Cn)(),t),U={class:"cards__wrapper"},$=["onClick"],R={class:"card"},H={class:"card__body"},N={class:"weather"},P={class:"weather__date"},V={class:"weather__temperature"},Y={class:"max-weather"},X=T((()=>(0,a._)("br",null,null,-1))),K={class:"min-weather"},G=T((()=>(0,a._)("br",null,null,-1))),J={class:"weather__icon"},tt=["src"],et={key:0,class:"rain"},rt={key:1,class:"wind"},st={key:2,class:"humidity"},at={key:3,class:"sunphase"},ot={class:"sunphase__sunrise"},it={class:"sunphase__sunset"};function nt(t,e,r,s,o,i){const n=(0,a.up)("hour-forecast"),u=(0,a.up)("current-forecast");return(0,a.wg)(),(0,a.iD)("div",U,[Object.keys(r.currentForecast).length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,c.C_)(["cards__container",{overflowX:t.showScroll}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.quantityForecast,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.date,onClick:e=>(i.select(t.date),i.showHourForecast(t.date))},[(0,a._)("div",R,[(0,a._)("div",H,[(0,a._)("div",N,[(0,a._)("div",P,(0,c.zw)(t.date),1),(0,a._)("div",V,[(0,a._)("div",Y,[(0,a.Uk)(" max"),X,(0,a.Uk)((0,c.zw)(Math.round(t.day.maxtemp_c)),1)]),(0,a._)("div",K,[(0,a.Uk)(" min"),G,(0,a.Uk)((0,c.zw)(Math.round(t.day.mintemp_c)),1)])]),(0,a._)("div",J,[(0,a._)("img",{src:t.day.condition.icon,alt:"weather__icon"},null,8,tt)]),r.services.rain?((0,a.wg)(),(0,a.iD)("div",et," Rain: "+(0,c.zw)(t.day.daily_chance_of_rain)+" % ",1)):(0,a.kq)("",!0),r.services.wind?((0,a.wg)(),(0,a.iD)("div",rt," Wind: "+(0,c.zw)(t.day.maxwind_kph)+" kph ",1)):(0,a.kq)("",!0),r.services.humidity?((0,a.wg)(),(0,a.iD)("div",st," Humidity: "+(0,c.zw)(t.day.avghumidity)+" % ",1)):(0,a.kq)("",!0),r.services.sunphase?((0,a.wg)(),(0,a.iD)("div",at,[(0,a._)("div",ot," Rise: "+(0,c.zw)(t.astro.sunrise),1),(0,a._)("div",it," Set: "+(0,c.zw)(t.astro.sunset),1)])):(0,a.kq)("",!0)])])])],8,$)))),128))],2)),Object.keys(r.currentForecast).length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(n,{key:1,dayForecast:t.dayForecast},null,8,["dayForecast"])),Object.keys(r.currentForecast).length?((0,a.wg)(),(0,a.j4)(u,{key:2,currentForecast:r.currentForecast},null,8,["currentForecast"])):(0,a.kq)("",!0)])}const ct={class:"card"},ut={class:"card__body"},dt={class:"weather"},lt={class:"weather-date"},yt={class:"weather__temperature_hour"},_t={class:"weather__icon"},ht=["src"];function vt(t,e,r,s,o,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,c.C_)(["hour-forecast__container",{addOverflowX:r.dayForecast.length}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.dayForecast,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.time},[(0,a._)("div",ct,[(0,a._)("div",ut,[(0,a._)("div",dt,[(0,a._)("div",lt,(0,c.zw)(t.time.split(" ")[1]),1),(0,a._)("div",yt,(0,c.zw)(Math.round(t.temp_c))+" °C ",1),(0,a._)("div",_t,[(0,a._)("img",{src:t.condition.icon,alt:"weather__icon"},null,8,ht)])])])])])))),128))],2)}var pt={props:{dayForecast:{type:Array,required:!1}}};const wt=(0,k.Z)(pt,[["render",vt]]);var Ft=wt;const gt={class:"current"},mt={class:"current__body"},ft={class:"current__date"},Ct={class:"current__place"},bt={class:"temperature"},At={class:"current__icon"},St=["src"],Dt={class:"current__wind"};function kt(t,e,r,s,o,i){return(0,a.wg)(),(0,a.iD)("div",gt,[(0,a._)("div",mt,[(0,a._)("div",ft," Update time: "+(0,c.zw)(r.currentForecast.current.last_updated),1),(0,a._)("div",Ct,(0,c.zw)(r.currentForecast.location.name)+" , "+(0,c.zw)(r.currentForecast.location.region),1),(0,a._)("div",bt,(0,c.zw)(r.currentForecast.current.temp_c)+" °С",1),(0,a._)("div",At,[(0,a._)("img",{src:r.currentForecast.current.condition.icon,alt:"weather image"},null,8,St)]),(0,a._)("div",Dt," Wind: "+(0,c.zw)(r.currentForecast.current.wind_kph)+" kph ",1)])])}var qt={props:{currentForecast:{type:Object,required:!1}}};const Bt=(0,k.Z)(qt,[["render",kt],["__scopeId","data-v-7d9c9339"]]);var Et=Bt,zt={components:{HourForecast:Ft,CurrentForecast:Et},props:{quantityForecast:{type:Array,required:!1},currentForecast:{type:Object,required:!1},services:{type:Object,required:!1}},data:()=>({currentDate:"",dayForecast:[],showScroll:!0,clientWidth:null}),methods:{select(t){this.currentDate=t},showHourForecast(t){if(t==this.currentDate){const e=this.quantityForecast.filter((e=>e.date==t));e.forEach((t=>{this.dayForecast=t.hour}))}},getWindowSize(){this.clientWidth=window.screen.width}},watch:{quantityForecast(){this.dayForecast=[],this.quantityForecast.length<8&&this.clientWidth>800?this.showScroll=!1:this.quantityForecast.length>3&&this.clientWidth<800?this.showScroll=!0:this.quantityForecast.length<4?this.showScroll=!1:this.showScroll=!0},currentForecast(){Object.keys(this.currentForecast).length&&this.$emit("setFlagForCurrentForecast")}},mounted(){window.addEventListener("resize",this.getWindowSize),this.getWindowSize()},beforeUnmount(){window.removeEventListener("resize",this.getWindowSize)}};const jt=(0,k.Z)(zt,[["render",nt],["__scopeId","data-v-594a7211"]]);var xt=jt;const Ot={class:"service"};function Wt(t,e,r,s,o,i){return(0,a.wg)(),(0,a.iD)("div",Ot,[(0,a._)("div",{class:"service__body",onClick:e[4]||(e[4]=e=>t.$emit("addServicesToForecast",t.services))},[(0,a._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.wind}]),id:"wind",onClick:e[0]||(e[0]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Wind ",2),(0,a._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.rain}]),id:"rain",onClick:e[1]||(e[1]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Rain ",2),(0,a._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.humidity}]),id:"humidity",onClick:e[2]||(e[2]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Humidity ",2),(0,a._)("div",{class:(0,c.C_)(["service__item",{bgcolor:t.services.sunphase}]),id:"sunphase",onClick:e[3]||(e[3]=(...t)=>i.setStylesForButton&&i.setStylesForButton(...t))}," Sunrise/Sunset ",2)])])}var Lt={data:()=>({services:{wind:!1,rain:!1,humidity:!1,sunphase:!1}}),methods:{setStylesForButton(t){for(let r in this.services)this.services[r]=!1;let e=t.target.id;this.services[e]=!0}}};const It=(0,k.Z)(Lt,[["render",Wt],["__scopeId","data-v-11cb582a"]]);var Mt=It;const Qt={class:"quantity"},Zt={class:"quantity__body"};function Tt(t,e,r,o,i,n){return(0,a.wg)(),(0,a.iD)("div",Qt,[(0,a._)("div",Zt,[(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.now}]),id:"now",onClick:[e[0]||(e[0]=(0,s.iM)((e=>t.$emit("currentForecastResponse")),["stop"])),e[1]||(e[1]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Now ",2),(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.today}]),id:"today",onClick:[e[2]||(e[2]=(0,s.iM)((e=>t.$emit("setForecastLength",1)),["stop"])),e[3]||(e[3]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Today ",2),(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.tomorrow}]),id:"tomorrow",onClick:[e[4]||(e[4]=(0,s.iM)((e=>t.$emit("setForecastLength",2)),["stop"])),e[5]||(e[5]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," Tomorrow ",2),(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.threeDays}]),id:"threeDays",onClick:[e[6]||(e[6]=(0,s.iM)((e=>t.$emit("setForecastLength",3)),["stop"])),e[7]||(e[7]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 3 days ",2),(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.sevenDays}]),id:"sevenDays",onClick:[e[8]||(e[8]=(0,s.iM)((e=>t.$emit("setForecastLength",7)),["stop"])),e[9]||(e[9]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 7 days ",2),(0,a._)("div",{class:(0,c.C_)(["quantity__item",{bgcolor:t.quantity.fourteenDays}]),id:"fourteenDays",onClick:[e[10]||(e[10]=(0,s.iM)((e=>t.$emit("setForecastLength",14)),["stop"])),e[11]||(e[11]=(...t)=>n.setStylesForButton&&n.setStylesForButton(...t))]}," 14 days ",2)])])}var Ut={data:()=>({quantity:{now:!1,today:!1,tomorrow:!1,threeDays:!0,sevenDays:!1,fourteenDays:!1}}),methods:{setStylesForButton(t){for(let r in this.quantity)this.quantity[r]=!1;let e=t.target.id;this.quantity[e]=!0}}};const $t=(0,k.Z)(Ut,[["render",Tt],["__scopeId","data-v-f37ab666"]]);var Rt=$t,Ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrVWBEYIwDAxOwAY6ApuIG3QDu4E4AWzCOQEjwAbVCRghppoeOSS0B/5djqP5fr8lDQALQMScwlC0FA4n9DxmIBVELilGjMNFhYlQiwkdhaU4iXzBzp3g3TSxGxO8OwvxnVicdlLPk0aIFZAIdhxES5kIW7DKxA9WnAYzuXTnQHeiCnK+Y4o50PuZx++wHQ9+ll69Z/VixUHM4SnsMgvEjLAmmMo5wJ/hBZ+8wlEjZQwtL45r8IIDv1xgO4LgS5ZNB7qD2EdxoWxCZxl3FPb1p47x22H2Xj0zTzZCNKU5XIVYpZEqnOD4fAuR9wVsxVXzaGIrz/udBu+uhFTg9AvoZ65bzuVL895dTSBEfYB7LgAAAABJRU5ErkJggg==";const Nt=t=>((0,a.dD)("data-v-1ab1d98d"),t=t(),(0,a.Cn)(),t),Pt={class:"push-message"},Vt=Nt((()=>(0,a._)("div",{class:"push-message__body"},[(0,a._)("div",{class:"push-message__title"},"Error!"),(0,a._)("div",{class:"push-message__text"}," Free API does not support such requests "),(0,a._)("img",{class:"push-message__img",src:Ht,alt:"error message"})],-1))),Yt=[Vt];function Xt(t,e){return(0,a.wg)(),(0,a.iD)("div",Pt,Yt)}const Kt={},Gt=(0,k.Z)(Kt,[["render",Xt],["__scopeId","data-v-1ab1d98d"]]);var Jt=Gt;const te="77b6a98ada8b4138b34193721230303",ee="https://api.weatherapi.com/v1/";function re(t="Kiev",e){return fetch(`${ee}forecast.json?key=${te}&q=${t}&days=${e}`).then((t=>t.json())).then((t=>2==e?[t.forecast.forecastday.pop()]:t.forecast.forecastday)).catch((t=>t))}async function se(t="Kiev"){return await fetch(`${ee}current.json?key=${te}&q=${t}`).then((t=>t.json())).catch((t=>t))}var ae={name:"App",components:{HeaderNavbar:j,FooterNavbar:Z,DayForecast:xt,ServiceNavbar:Mt,QuantityNavbar:Rt,PushMessage:Jt},data:()=>({quantityForecast:[],currentForecast:[],currentCity:"",currentCityDuplicate:"",forecastDaysQuantity:"3",services:{},responseError:!1,flagForCurrentForecast:!1,showPushMessage:!1}),methods:{async loadForecast(t){if(this.forecastDaysQuantity>3&&(this.showPushMessage=!0,setTimeout((()=>{this.showPushMessage=!1}),3e3)),this.flagForCurrentForecast&&this.currentCity!=t)return this.currentCity=t,this.forecastDaysQuantity="",void this.loadCurrentForecast();const e=await re(t,this.forecastDaysQuantity);Array.isArray(e)?(this.flagForCurrentForecast=!1,this.responseError=!1,this.quantityForecast=e,this.currentCity=t,this.currentCityDuplicate=t,this.currentForecast=[]):this.responseError=!0},async loadCurrentForecast(){const t=await se(this.currentCity);if("object"!=typeof t||t["error"])return this.responseError=!0,void(this.currentCity=this.currentCityDuplicate);this.forecastDaysQuantity="",this.responseError=!1,this.currentForecast=t,this.currentCityDuplicate=this.currentCity},setForecastLength(t){this.forecastDaysQuantity=t},addServicesToForecast(t){this.services=t}},watch:{forecastDaysQuantity(){this.forecastDaysQuantity&&this.loadForecast(this.currentCity)}},created(){this.loadForecast("Kiev")}};const oe=(0,k.Z)(ae,[["render",n]]);var ie=oe;(0,s.ri)(ie).mount("#app")}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,o){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],o=t[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(n=!1,o<i&&(i=o));if(n){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,a,o]}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/weatherApp/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,i=s[0],n=s[1],c=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(c)var d=c(r)}for(e&&e(s);u<i.length;u++)o=i[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(d)},s=self["webpackChunkweatherapp"]=self["webpackChunkweatherapp"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(623)}));s=r.O(s)})();
//# sourceMappingURL=app.22a6e9b5.js.map