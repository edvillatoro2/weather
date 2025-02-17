(function(e){function t(t){for(var r,i,s=t[0],o=t[1],l=t[2],h=0,d=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==c[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},c={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/weather/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const c={class:"container"},n={class:"header"},i={class:"search-bar"},s={class:"main-section"},o={key:0,class:"weather"},l={class:"temp-box"},p=["src"],h={class:"main-desc"},d={class:"temperature"},u={key:1},b={key:2,class:"forecast"},m={class:"forecast-cards"},O={class:"time"},j={class:"forcast-desc"},g={class:"desc"},f=["src"],y={class:"temp-max"},w={class:"temp-min"},v={key:0,class:"forecast"},_={class:"forecast-cards"},D={class:"date"},F={class:"forcast-desc"},x={class:"desc"},$=["src"],k={class:"temp-max"},S={class:"temp-min"};function P(e,t,a,P,M,W){return Object(r["g"])(),Object(r["d"])("div",c,[Object(r["e"])("div",n,[t[3]||(t[3]=Object(r["e"])("h1",null,"WEATHER APP",-1)),Object(r["e"])("div",i,[Object(r["k"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>M.city=e),placeholder:"Enter zipcode",class:"search-input",onKeyup:t[1]||(t[1]=Object(r["l"])((...e)=>W.search&&W.search(...e),["enter"]))},null,544),[[r["j"],M.city]]),Object(r["e"])("button",{onClick:t[2]||(t[2]=(...e)=>W.search&&W.search(...e)),class:"search-button"}," Search ")])]),Object(r["e"])("main",s,[M.weatherData?(Object(r["g"])(),Object(r["d"])("div",o,[Object(r["e"])("h2",null,Object(r["i"])(M.weatherData.name),1),Object(r["e"])("div",l,[Object(r["e"])("img",{src:W.iconUrl,alt:"Weather Icon",class:"weather-icon"},null,8,p),Object(r["e"])("span",h,Object(r["i"])(M.weatherData.weather[0].description),1),Object(r["e"])("p",d,Object(r["i"])(W.temperature)+"°",1)])])):(Object(r["g"])(),Object(r["d"])("div",u)),M.hourlyForecast.length?(Object(r["g"])(),Object(r["d"])("div",b,[Object(r["e"])("div",m,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["h"])(M.hourlyForecast,(e,a)=>(Object(r["g"])(),Object(r["d"])("div",{key:a,class:"mobile-margin"},[Object(r["e"])("div",null,[Object(r["e"])("p",O,Object(r["i"])(e.time),1),Object(r["e"])("div",j,[Object(r["e"])("p",g,Object(r["i"])(e.description),1),Object(r["e"])("img",{src:`http://api.openweathermap.org/img/w/${e.icon}.png`,alt:"Weather Icon"},null,8,f)]),Object(r["e"])("p",null,[Object(r["e"])("span",y,Object(r["i"])(e.temp_max)+"°",1),t[4]||(t[4]=Object(r["f"])("/")),Object(r["e"])("span",w,Object(r["i"])(e.temp_min)+"°",1)])])]))),128))])])):Object(r["c"])("",!0)]),M.dailyForecast.length?(Object(r["g"])(),Object(r["d"])("div",v,[Object(r["e"])("div",_,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["h"])(M.dailyForecast,(e,a)=>(Object(r["g"])(),Object(r["d"])("div",{key:a,class:"mobile-margin"},[Object(r["e"])("p",D,Object(r["i"])(e.date),1),Object(r["e"])("div",F,[Object(r["e"])("p",x,Object(r["i"])(e.description),1),Object(r["e"])("img",{src:`http://api.openweathermap.org/img/w/${e.icon}.png`,alt:"Weather Icon"},null,8,$)]),Object(r["e"])("p",null,[Object(r["e"])("span",k,Object(r["i"])(e.temp_max)+"°",1),t[5]||(t[5]=Object(r["f"])("/")),Object(r["e"])("span",S,Object(r["i"])(e.temp_min)+"°",1)])]))),128))])])):Object(r["c"])("",!0)])}a("14d9");var M=a("cee4");const W="85943dc7e40cb64bdc65d6e017c0031b";var E={name:"App",data(){return{city:"",country:"US",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp):null},iconUrl(){return this.weatherData?`http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},mounted(){this.getCurrentLocationWeather()},methods:{async getCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async e=>{const{latitude:t,longitude:a}=e.coords,r=`ht\ntp://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${a}&appid=${W}&units=imperial`;await this.getWeatherData(r)})},async getWeatherData(e){try{const t=await M["a"].get(e);this.weatherData=t.data,await this.getForecast(this.weatherData.name)}catch(t){console.error("Error geting weather data:",t)}},async getForecast(e,t){const a=`http://api.openweathermap.org/data/2.5/forecast?q=${e},${t}&appid=${W}&units=imperial`;try{const e=await M["a"].get(a),t=e.data;this.hourForecast(t),this.dayForecast(t)}catch(r){console.error("Error geting forecast data:",r)}},async search(){if(this.city){try{const e=`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${W}&units=imperial`,t=await M["a"].get(e);this.weatherData=t.data,await this.getForecast(this.weatherData.name)}catch(e){console.error("Error geting weather data:",e)}this.city=""}},hourForecast(e){this.hourlyForecast=[];for(let t=0;t<4;t++){const a=new Date(1e3*e.list[t].dt);this.hourlyForecast.push({time:a.toLocaleTimeString("en-US").replace(":00",""),temp_max:Math.floor(e.list[t].main.temp_max),temp_min:Math.floor(e.list[t].main.temp_min),description:e.list[t].weather[0].description,icon:e.list[t].weather[0].icon})}},dayForecast(e){this.dailyForecast=[];for(let t=8;t<e.list.length;t+=8){const a=new Date(1e3*e.list[t].dt);this.dailyForecast.push({date:a.toDateString("en-US"),temp_max:Math.floor(e.list[t].main.temp_max),temp_min:Math.floor(e.list[t].main.temp_min),description:e.list[t].weather[0].description,icon:e.list[t].weather[0].icon})}}}},U=(a("b15a"),a("6b0d")),C=a.n(U);const T=C()(E,[["render",P]]);var A=T;Object(r["b"])(A).mount("#app")},"5f92":function(e,t,a){},b15a:function(e,t,a){"use strict";a("5f92")}});
//# sourceMappingURL=app.970647b5.js.map