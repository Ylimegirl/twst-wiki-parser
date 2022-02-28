!function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;l.push([213,1]),n()}({181:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),l=n(169),o=n(174),c=n(117),i=n(31);n(181);function u(){var e=a.a.createElement(a.a.Fragment,null,"A website to more easily upload stories from the mobile game Twisted Wonderland to the wiki.",a.a.createElement("br",null),'It formats your story chapter into text that can be pasted directly into the "source" section of the page.');return a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement(c.b,{className:"star-link",to:"/"},"TWISTED WONDERLAND STORY FORMATTER")),a.a.createElement("div",{className:"horizontal"},a.a.createElement("p",null,e),a.a.createElement("ul",{id:"navbar"},a.a.createElement("li",null,a.a.createElement(c.b,{className:"star-link",to:"/howto"},"HOW TO USE")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/Ylimegirl/twst-wiki-parser/issues"},"KNOWN ISSUES")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://twitter.com/EmilyLrig"},"CONTACT")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/Ylimegirl/twst-wiki-parser"},"GITHUB")))))}var s,m={RIDDLE:"Riddle Rosehearts",ACE:"Ace Trappola",DEUCE:"Deuce Spade",CATER:"Cater Diamond",TREY:"Trey Clover",LEONA:"Leona Kingscholar",JACK:"Jack Howl",RUGGIE:"Ruggie Bucchi",AZUL:"Azul Ashengrotto",JADE:"Jade Leech",FLOYD:"Floyd Leech",KALIM:"Kalim Al-Asim",JAMIL:"Jamil Viper",VIL:"Vil Schoenheit",EPEL:"Epel Felmier",ROOK:"Rook Hunt",IDIA:"Idia Shroud",ORTHO:"Ortho Shroud",MALLEUS:"Malleus Draconia",SEBEK:"Sebek Zigvolt",SILVER:"Silver",LILIA:"Lilia Vanrouge",GRIM:"Grim",CROWLEY:"Dire Crowley",CREWEL:"Divus Crewel",TREIN:"Mozus Trein",VARGAS:"Ashton Vargas",SAM:"Sam",CHENYA:"Chen'nya",CHEKA:"Cheka",MIRROR:"Dark Mirror",LUCIUS:"Lucius"},f="storyType",p="translator",d="tlLink",b="title",h="featuredCharacter",E="prJP",y="prEN",g={PERSONAL_STORY:"Personal Story"},v={HEADING:"HEADING",LOCATION:"LOCATION"},O=n(68),w=Object(O.pick)(m,["ACE","AZUL","CATER","DEUCE","EPEL","FLOYD","GRIM","IDIA","JACK","JADE","JAMIL","KALIM","LEONA","LILIA","MALLEUS","ORTHO","RIDDLE","ROOK","RUGGIE","SEBEK","SILVER","TREY","VIL"]);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=(C(s={},f,g.PERSONAL_STORY),C(s,p,""),C(s,d,""),C(s,E,""),C(s,y,""),C(s,b,""),s),T=Object(r.createContext)(),L=function(e){var t=e.children,n=S(Object(r.useState)({}),2),l=n[0],o=n[1],c=Object(r.useRef)(l),i=S(Object(r.useState)(JSON.parse(localStorage.getItem("details"))||j),2),u=i[0],s=i[1],m=S(Object(r.useState)(JSON.parse(localStorage.getItem("nav"))||{}),2),f={renders:l,renderRef:c,setRenders:o,details:u,setDetails:s,nav:m[0],setNav:m[1],inputRef:Object(r.useRef)(null),tlNotesRef:Object(r.useRef)(null)};return a.a.createElement(T.Provider,{value:f},t)};n(187);function N(e){var t=e.tabs,n=e.clicked,r=e.onClick;return a.a.createElement("div",{className:"tab-menu"},t.map((function(e){return a.a.createElement("button",{type:"button",key:e,className:"tablink".concat(n===e?" active":""),onClick:function(){return r(e)}},e)})))}n(188);var P=n(172),k=n.n(P);function R(e){var t=e.clicked,n=e.value,r=e.children;return a.a.createElement("div",{className:k()("tab-content","tab-content--".concat(n.replace(" ","-").toLowerCase()),{"tab-content--active":t===n})},r)}var I=n(159),D=n.n(I),x=n(160),H=n(162),M=n(122),F=n(164),_=n(165),U=n(161),B=n(175),J=n(163),G=n(176);function Y(e){var t=e.querySelectorAll("br");if(t.length>0){for(var n=t[0].parentNode,r=n.parentNode,a=0;a<t.length;a++){var l=new Range;if(l.setStart(t[a].parentNode,0),l.setEndBefore(t[a]),!l.collapsed){var o=document.createElement(n.tagName.toLowerCase());o.append(l.extractContents()),r.insertBefore(o,n)}t[a].remove()}0===n.innerHTML.length&&n.remove()}return e}function q(e){return(new DOMParser).parseFromString(e,"text/html")}var W=function(e){return Object(O.chain)(e).words().map((function(e){return Object(O.capitalize)(e)})).join(" ").value()},V=Object.values(v);function K(){var e=Object(r.useContext)(T),t=e.renderRef,n=e.setRenders,l=e.inputRef,o=window.location.href+"howto",c={plugins:[H.a,M.a,F.a,_.a,U.a,J.a,G.a],toolbar:["bold","italic","link","|","undo","redo"],autosave:{save:function(e){var r=function(e){var t=Y(q(e)),n=Array.from(t.querySelectorAll("p"),(function(e){return e.textContent})),r={};return n.forEach((function(e){if(e.includes(":")){var t=e.split(":")[0].trim();Object(O.includes)(V,t.toUpperCase())||(r[W(t)]="")}})),r}(e.getData());Object.keys(r).forEach((function(e){r[e]=t.current[e]||""})),n(r)}}},i="<p>If this is your first time using the formatter, please check the <a href='".concat(o,"'>Text Guidelines</a> to make\n        sure your text is ready.</p>\n      <p>---EXAMPLE DIALOGUE---</p>\n      <p>Bg 64207.png</p>\n      <p>Location: Dwarfs’ Mine - Campsite</p>\n      <p>Heading: —Day 2: Camp Vargas.</p>\n      <p>Jamil: This is a line said by Jamil (the line starts with his name followed by a colon).</p>\n      <p>This is another line said by Jamil.</p>\n      <p>Floyd: This is a line said by Floyd instead <strong>with some emphasis.</strong></p>\n      <p>Some Random NPC: Hello");return Object(r.useEffect)((function(){l.current.editor.editing.view.change((function(e){e.setAttribute("spellcheck","false",l.current.editor.editing.view.document.getRoot())}))}),[]),a.a.createElement(D.a,{editor:x.a,config:c,data:i,ref:l})}function z(){var e=Object(r.useContext)(T).tlNotesRef,t={plugins:[F.a,_.a,U.a,B.a,J.a,H.a,M.a],toolbar:["bold","italic","link","numberedList","|","undo","redo"]};return Object(r.useEffect)((function(){e.current.editor.editing.view.change((function(t){t.setAttribute("spellcheck","false",e.current.editor.editing.view.document.getRoot())}))}),[]),a.a.createElement(D.a,{editor:x.a,config:t,ref:e})}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=Object.values(g),ee=Object.keys(w).sort();function te(){var e=Object(r.useContext)(T),t=e.details,n=e.setDetails,l=function(e){var r=e.target,a=r.id,l=r.value;n($($({},t),{},Z({},a,l)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Story Details"),a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement("label",{htmlFor:f},"Story Type"),a.a.createElement("select",{type:"text",id:f,value:t[f],onChange:l},Q.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("span",null),a.a.createElement("div",{className:"row--half-width row--label-only"},a.a.createElement("label",{className:"label--small",id:"".concat(p,"-name-label")},"Name"),a.a.createElement("label",{className:"label--small",id:"".concat(d,"-credit-label")},"Credit link")),a.a.createElement("label",{id:"".concat(p,"-label")},"Translator"),a.a.createElement("div",{className:"row--half-width"},a.a.createElement("input",{type:"text","aria-labelledby":"".concat(p,"-label ").concat(p,"-name-label"),value:t[p],id:p,onChange:l}),a.a.createElement("input",{type:"text","aria-labelledby":"".concat(p,"-label ").concat(d,"-credit-label"),value:t[d],id:d,onChange:l})),a.a.createElement("label",{id:"".concat(E,"-label")},"Proofreaders"),a.a.createElement("div",{className:"row--half-width"},a.a.createElement("input",{type:"text","aria-labelledby":"".concat(E,"-label ").concat(E,"-name-label"),value:t[E],id:E,onChange:l}),a.a.createElement("input",{type:"text","aria-labelledby":"".concat(E,"-label ").concat(y,"-credit-label"),value:t[y],id:y,onChange:l})),a.a.createElement("label",{htmlFor:b},"Title"),a.a.createElement("input",{type:"text",id:b,value:t[b],onChange:l}),t[f]===g.PERSONAL_STORY&&a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{htmlFor:h},"Character"),a.a.createElement("select",{type:"text",id:h,value:t[h],onChange:l},a.a.createElement("option",{disabled:!0,value:!0},"- Select a character -"),ee.map((function(e){return a.a.createElement("option",{key:e,value:e},w[e])}))))))}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(){var e=Object(r.useContext)(T),t=e.renderRef,n=e.renders,l=e.setRenders,o=function(e){var r=le(le({},n),{},oe({},e.target.id,e.target.value));t.current=r,l(r)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Please paste in the Story Character template values for each character. Possible values can be found in the"," ",a.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://twistedwonderland.miraheze.org/wiki/Template:Story_Character"},"template documentation")," ","(This tab will fill out once you paste dialogue into the Text tab).",a.a.createElement("br",null),a.a.createElement("strong",null,"Dialogue from characters with blank inputs will be formatted like NPCs.")),a.a.createElement("div",{className:"tab-content__grid"},Object.entries(n).map((function(e){var t=ne(e,2),n=t[0],r=t[1];return a.a.createElement(ie,{key:n,name:n,value:r,onChange:o})}))))}function ie(e){var t=e.name,n=e.value,r=e.onChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{htmlFor:t},t),a.a.createElement("input",{id:t,onChange:r,value:n}))}function ue(e){return e.querySelectorAll("strong").forEach((function(e){e.replaceWith("'''".concat(e.textContent,"'''"))})),e.querySelectorAll("i").forEach((function(e){e.replaceWith("''".concat(e.textContent,"''"))})),e.querySelectorAll("a").forEach((function(e){e.replaceWith("[".concat(e.href," ").concat(e.textContent,"]"))})),e}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e){var t=e.inputData,n=e.tlNotesData,r=e.renders,a=e.details,l=e.onChangeDetails;!function(e){Object.entries(e).forEach((function(t){var n=se(t,2),r=n[0],a=n[1];e[r]=a.trim()}))}(a),l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a));var o=a[f],c=be(a),i=Y(q(t));localStorage.setItem("details",JSON.stringify(a));var u=i.querySelectorAll("p"),s=o===g.PERSONAL_STORY?c.personalStoryHeader():"";s+=c.tabberHeaderPlaceholder();for(var p=function(e){var t,n,r=Y(q(e));if(ue(r),"OL"===(null===(t=r.body.firstChild)||void 0===t?void 0:t.tagName.toUpperCase())){var a=Array.from(r.querySelectorAll("li"));a=a.map((function(e){return e.textContent.replace(/&nbsp;/g," ").trim()})),n=a}else{var l=Array.from(r.querySelectorAll("p")),o=/^\d+\. ?/;n=[],l.forEach((function(e){var t=e.textContent.replace(/&nbsp;/g," ").trim();o.test(t)?n.push(t.replace(o,"")):t&&(n[n.length-1]+="\n".concat(t))}))}return Object(O.compact)(n)}(n),d={output:s,partCount:0,tlNotesCount:0},b=function(e){var t=e.templates,n=e.renders,r=e.outputObj,a=e.storyType,l=e.tlNotes,o="";return function(e){var c=e.textContent.replace(/&nbsp;/g," ").trim();if(""===c)return c;if(function(e){for(var t=[".png",".gif",".jpg",".jpeg",".ico",".pdf",".svg"],n=0;n<t.length;n++)if(e.toLowerCase().endsWith(t[n]))return!0;return!1}(c))return o="",t.cgRender(c);if(function(e){return e.trim().match(/^PART \d/i)}(c))return r.partCount+=1,1===r.partCount?(r.output=r.output.replace(t.tabberHeaderPlaceholder(),t.tableEnd()+t.tabberHeader()+t.firstPartLine()+t.tableStart()),""):(o="",(a===g.PERSONAL_STORY?t.personalStoryFooter():"")+t.tableEnd()+t.partLine(r.partCount)+t.tableStart());if(e.innerHTML=function(e){var t=e.line,n=e.outputObj,r=e.tlNotes,a=t.match(/\[\d+\]/g);return null==a||a.forEach((function(e){var a="<ref>".concat(r[n.tlNotesCount],"</ref>");t=t.replace(e,a),n.tlNotesCount+=1})),t}({line:e.innerHTML,outputObj:r,tlNotes:l}),!c.includes(":"))return"\n".concat(ue(e).innerHTML,"\n\n");var i=c.split(":")[0];if(i.trim().toUpperCase()===v.LOCATION)return o="",t.locationHeading(c.slice(c.indexOf(":")+1).trim());if(i.trim().toUpperCase()===v.HEADING)return o="",t.heading(c.slice(c.indexOf(":")+1).trim());var u=e.childNodes[0].textContent,s=u;(u=u.replace(i+":",""))===s&&(u=u.replace(i,"")),0===u.trim().length?e.childNodes[0].remove():e.childNodes[0].textContent=u;var m=ue(e).innerHTML.trim();if(i!==o){var f=W(o=i);return n[f]?t.dialogueLine(n[f],m):t.npcDialogueLine(o,m)}return"\n".concat(m,"\n\n")}}({templates:c,renders:r,outputObj:d,storyType:o,tlNotes:p}),E=0;E<u.length;E++){var y=b(u[E]);d.output+=y}return s=d.output,(s+=c.tableEnd()).includes(c.tabberHeaderPlaceholder())?s=s.replace(c.tabberHeaderPlaceholder(),""):s+=c.tabberFooter(),s+=o===g.PERSONAL_STORY?c.personalStoryFooter():"",p.length&&(s+=c.tlNotes()),s+=function(e,t){var n=e[f],r=e[h],a="";return a+=n===g.PERSONAL_STORY?"\n[[Category:Personal Story]]":"",a+=r?"\n[[Category:".concat(m[r],"]]"):"",t.forEach((function(e){var t=m[e.toUpperCase()];a+=t?"\n[[Category:".concat(t," Appearances]]"):""})),a}(a,Object.keys(r))}var be=function(e){var t=e.featuredCharacter,n=e.translator,r=e.tlLink,a=e.prJP,l=(e.prEN,e.title),o={personalStoryHeader:function(){return"{{Personal Story Tabs/".concat(Object(O.capitalize)(t),"}}\n{{FanTL|tl=[").concat(r," ").concat(n,"]|prjp=").concat(a,'|pren={prEN}|story}}\n{| class="storytable imgfit"\n|- id="Top"\n! ').concat(l,"\n")},tabberHeaderPlaceholder:function(){return"tabber-placeholder\n"},tabberHeader:function(){return'<div class="themedtabber imgtabber" align="center"><Tabber>\n'},firstPartLine:function(){return"Part 1=\n"},partLine:function(e){return"|-|Part ".concat(e,"=\n")},tableStart:function(){return'{| class="storytable imgfit"\n'},cgRender:function(e){return'|-\n| colspan="3" |[[File:'.concat(e,"]]\n")},locationHeading:function(e){return'|-\n| colspan="3" class="secondaryheader"|'.concat(e,"\n")},heading:function(e){return'|-\n| colspan="3" style="text-align:center;padding:2em"|'.concat(e,"\n")},dialogueLine:function(e,t){return"|-\n|{{Story Character|".concat(e,'}}\n| colspan="2" |').concat(t,"\n")},npcDialogueLine:function(e,t){return'|-\n| class="character" style="padding:3em" |'.concat(e,'\n| colspan="2" |').concat(t,"\n")},choice:function(e,t){return'|-\n| colspan="2" class="choice" |'.concat(e,'\n| class="choice" width="50%" |').concat(t,"\n")},personalStoryFooter:function(){return"{{BottomNav}}\n"},tableEnd:function(){return"|}\n"},tabberFooter:function(){return"</Tabber></div>\n"},tlNotes:function(){return"<references />\n"}};return o};n(210);function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ye={TEXT:"Text",DETAILS:"Details",RENDERS:"Renders",TL_NOTES:"TL Notes"},ge=Object.values(ye);function ve(){var e=Object(r.useRef)(null);return a.a.createElement(L,null,a.a.createElement("div",{className:"main-page"},a.a.createElement(Oe,null),a.a.createElement(Ae,{outputRef:e}),a.a.createElement("textarea",{className:"output",ref:e,spellCheck:!1})))}var Oe=function(){var e=he(Object(r.useState)(ye.TEXT),2),t=e[0],n=e[1];return a.a.createElement("div",{className:"input"},a.a.createElement(N,{tabs:ge,clicked:t,onClick:n}),a.a.createElement(R,{value:ye.TEXT,clicked:t},a.a.createElement(K,null)),a.a.createElement(R,{value:ye.DETAILS,clicked:t},a.a.createElement(te,null)),a.a.createElement(R,{value:ye.RENDERS,clicked:t},a.a.createElement(ce,null)),a.a.createElement(R,{value:ye.TL_NOTES,clicked:t},a.a.createElement(z,null)))},we="Copy Output",Se="Copied",Ae=function(e){var t=e.outputRef,n=Object(r.useContext)(T),l=n.nav,o=n.details,c=n.setDetails,i=n.renders,u=n.inputRef,s=n.tlNotesRef,m=he(Object(r.useState)(we),2),f=m[0],p=m[1];return a.a.createElement("div",{className:"actions"},a.a.createElement("button",{type:"button",onClick:function(){p(we);var e=de({inputData:u.current.editor.getData(),tlNotesData:s.current.editor.getData(),nav:l,renders:i,details:o,onChangeDetails:c});t.current.value=e},id:"convert-button"},"CONVERT"),a.a.createElement("button",{type:"button",onClick:function(){t.current.select(),document.execCommand("copy"),p(Se)},id:"copy-button"},f))},Ce=n.p+"assets/30030dff0170af1d9b23fc785f2f5c48.png",je=n.p+"assets/41363047b9c5aeb65cf132742e14a61f.png";n(211);function Te(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"how-to-page"},a.a.createElement("h2",null,"TEXT GUIDELINES"),a.a.createElement("h3",null,"Text Tab"),a.a.createElement("p",null,"Copy and paste your translated chapter into the text box."),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"Background images")," - You can include whole-row images by inserting the EXACT file name (ex. Bg 10101.png) into the dialogue on its own line. A list of all background images can be found here:"," ",a.a.createElement("a",{href:"https://twistedwonderland.miraheze.org/wiki/Category:Story_Background_Images"},"Story Background Images")),a.a.createElement("li",null,a.a.createElement("strong",null,"Headings"),' - You can indicate scene changes in the dialogue by including a line that starts with "Location:", and mid-dialogue headings with a line that starts with "Heading:". For example, the following text:',a.a.createElement("blockquote",null,"Location: Dwarfs’ Mine - Campsite ",a.a.createElement("br",null),"Heading: —Day 2: Camp Vargas."),"will result in: ",a.a.createElement("br",null),a.a.createElement("img",{alt:"Heading types example",src:Ce})),a.a.createElement("li",null,a.a.createElement("strong",null,"Bold and italic text")," - Bold and italic text should be preserved when pasted in from a Word/Google document."),a.a.createElement("li",null,a.a.createElement("strong",null,"Links")," - Links should also be preserved when pasted in. Make sure every link is like an external one (i.e. with the https:// in front)."),a.a.createElement("li",null,a.a.createElement("strong",null,"Stories with multiple parts")," - To indicate that the story needs to be tabbed out into multiple parts like this:",a.a.createElement("br",null),a.a.createElement("img",{alt:"Different parts example",src:je}),a.a.createElement("br",null),'use a line that says "Part 1", "Part 2", etc. to indicate the dialogue following the line is in its own part:',a.a.createElement("blockquote",null,"Part 1",a.a.createElement("br",null),"Character: Some dialogue",a.a.createElement("br",null),"Part 2",a.a.createElement("br",null),"Character: Some more dialogue"),'If a story only has one part, do not specify "Part 1" in the text or the formatter will unnecessarily add code for the parts tabber.')),a.a.createElement("p",null,"Here's an example of a short dialogue:"),a.a.createElement("blockquote",null,"Bg 61291.png",a.a.createElement("br",null),"Location: Sports Field",a.a.createElement("br",null),a.a.createElement("strong",null,"Person A:")," This is a line said by Person A! Their line starts with their name followed by a colon.",a.a.createElement("br",null),a.a.createElement("strong",null,"Person B:")," This is a line said by another person!",a.a.createElement("br",null),"Heading: —A few days later. ",a.a.createElement("br",null),a.a.createElement("strong",null,"Person A:")," This is a third line from Person A."),a.a.createElement("p",null,"When characters have multiple lines at in a row, the following dialogue formats are accepted:"),a.a.createElement("blockquote",null,a.a.createElement("strong",null,"Person A:")," Line by person A",a.a.createElement("br",null),"Second line by person A (line doesn't begin with name)",a.a.createElement("br",null),a.a.createElement("strong",null,"Person B:")," Line by person B",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"Person A:")," Line by person A",a.a.createElement("br",null),a.a.createElement("strong",null,"Person A:")," Second line by person A (line begins with name)",a.a.createElement("br",null),a.a.createElement("strong",null,"Person B:")," Line by person B"),a.a.createElement("h3",null,"Details Tab"),a.a.createElement("p",null,"Fill in information about the chapter and its appearance on the wiki."),a.a.createElement("p",null,"Values should auto-fill based on previous input, if you allow websites to cache information in your browser's local storage."),a.a.createElement("h3",null,"Renders Tab"),a.a.createElement("p",null,"The renders tab should automatically display which characters are in the dialogue, with a text input next to each name. Fill in the file names of the renders that should be used for each character. (ex. Leona Dorm)"),a.a.createElement("p",null,"If the character is an NPC with no dedicated image, just leave the input blank and the parser will format the line with the code for NPCs."),a.a.createElement("p",null,"If you want to use more than one render per character in one chapter, please format each section of the chapter separately."),a.a.createElement("h3",{id:"tlNotesSection"},"TL Notes Tab"),a.a.createElement("p",null,"In the Text tab, you can mark the place where translation note should be inserted like this:"),a.a.createElement("blockquote",null,"Idia: Generally I hate talking face-to-face, but if I’m playing a BG…[1] What, you don’t know what BG means? It stands for ‘board game’…”[2]"),a.a.createElement("p",null,"You can have multiple markers in the middle or end of the dialogue line"),a.a.createElement("p",null,"In the TL Notes tab, paste in the actual text of the translation notes:"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"1. Translation notes should start with a number followed by a period."),a.a.createElement("p",null,"If a paragraph doesn't start with a number, the formatter will assume that the paragraph is part of the previous note."),a.a.createElement("p",null,"2. Second translation note")),a.a.createElement("ul",null,a.a.createElement("li",null,"Technically, you don't need to worry about matching the exact numbers in the TL note markers to the TL note text. The formatter will insert the TL notes in the order that they appear in the TL Notes tab."),a.a.createElement("li",null,"Just make sure that you have an equal number of markers and TL notes :0"))),a.a.createElement("footer",null))}n(212);var Le=Object(o.hot)((function(){return a.a.createElement(c.a,{basename:"/"},a.a.createElement(u,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{exact:!0,path:"/"},a.a.createElement(ve,null)),a.a.createElement(i.a,{exact:!0,path:"/howto"},a.a.createElement(Te,null))))}));Object(l.render)(a.a.createElement(Le,null),document.querySelector("#root"))}});