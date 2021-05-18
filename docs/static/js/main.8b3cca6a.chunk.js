(this["webpackJsonpmodule-3-lesson-2-exercise"]=this["webpackJsonpmodule-3-lesson-2-exercise"]||[]).push([[0],{15:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(20),n=a.n(c),r=a(7),i=a(18),l=a(9),o=a(2),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,foto:e.image,status:e.status,origin:e.origin.name,episode:e.episode}}))}))},h=a(0);var m=function(e){return Object(h.jsxs)("div",{className:"form__reset",children:[Object(h.jsx)("i",{class:"fas fa-trash form__reset--icon",onClick:function(){e.resetInputs()}}),Object(h.jsx)("span",{className:"form__reset--text",children:"Remove all filters"})]})},b=function(e){var t=function(t){e.handleFilter(t.target.name,t.target.value)};return Object(h.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsxs)("label",{htmlFor:"name",className:"form__label",children:["Search by name",Object(h.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"write a name here...",value:e.name,onChange:t,className:"form__input"})]}),Object(h.jsxs)("label",{htmlFor:"species",className:"form__label",children:["Search by species",Object(h.jsx)("input",{type:"text",name:"species",id:"species",placeholder:"write the species here...",value:e.species,onChange:t,className:"form__input"})]}),Object(h.jsxs)("label",{htmlFor:"status",className:"form__label",children:["Search by status",Object(h.jsxs)("select",{name:"status",id:"status",onChange:t,value:e.status,className:"form__select",children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"Alive",children:"Alive"}),Object(h.jsx)("option",{value:"Dead",children:"Dead"}),Object(h.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(h.jsxs)("label",{className:"form__label",htmlFor:"origin",children:["Origin:",Object(h.jsxs)("div",{className:"form__container",children:[Object(h.jsx)("input",{type:"checkbox",name:"origin",value:"Earth (C-137)",onChange:t,className:"form__checkbox"}),Object(h.jsx)("label",{className:"form__label",children:"Earth (C-137)"}),Object(h.jsx)("input",{type:"checkbox",name:"origin",value:"Earth (Replacement Dimension)",onChange:t,className:"form__checkbox"}),Object(h.jsx)("label",{className:"form__label",children:"Earth (Replacement Dimension)"}),Object(h.jsx)("input",{type:"checkbox",name:"origin",value:"Abadango",onChange:t,className:"form__checkbox"}),Object(h.jsx)("label",{className:"form__label",children:"Abadango"}),Object(h.jsx)("input",{type:"checkbox",name:"origin",value:"unknown",onChange:t,className:"form__checkbox"}),Object(h.jsx)("label",{className:"form__label",children:"Unknown"})]})]}),Object(h.jsx)(m,{resetInputs:e.resetInputs})]})},u=function(e){return Object(h.jsx)(r.b,{to:"/character/".concat(e.character.id),children:Object(h.jsxs)("div",{className:"list__item--container",children:[Object(h.jsx)("img",{src:e.character.foto,alt:"Foto of ".concat(e.character.name),className:"list__item--image"}),Object(h.jsx)("h2",{className:"list__item--name",children:e.character.name}),Object(h.jsx)("h3",{className:"list__item--species",children:e.character.species})]})})},d=(a(15),function(e){var t=e.characters.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return Object(h.jsx)("li",{className:"list__item",children:Object(h.jsx)(u,{character:e})},e.id)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:"list",children:[t," "]})})}),x=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.b,{to:"/",className:"link",children:Object(h.jsx)("h4",{children:"Return to main site"})}),e.children]})},O=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{children:Object(h.jsx)("h2",{className:"optionalMessage",children:"Character not found, sorry"})}),Object(h.jsx)(r.b,{to:"/",className:"link",children:Object(h.jsx)("h4",{children:"Return to main site"})})]})},f=a.p+"static/media/Rick_and_Morty_-_logo.de13d484.png";var p=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),m=r[0],u=r[1],p=Object(s.useState)(""),_=Object(l.a)(p,2),g=_[0],N=_[1],v=Object(s.useState)("all"),k=Object(l.a)(v,2),y=k[0],C=k[1],D=Object(s.useState)([]),w=Object(l.a)(D,2),F=w[0],S=w[1];Object(s.useEffect)((function(){j().then((function(e){return c(e)}))}),[]);var R=a.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())})).filter((function(e){return e.species.toLowerCase().includes(g.toLowerCase())})).filter((function(e){return"all"===y||e.status===y})).filter((function(e){return 0===e.origin.length||e.origin.includes(F)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("img",{src:f,alt:"logo Rick and Morty",className:"header__image"})}),Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)(o.c,{children:[Object(h.jsxs)(o.a,{exact:!0,path:"/",children:[Object(h.jsx)(b,{handleFilter:function(e,t){if("name"===e)u(t);else if("species"===e)N(t);else if("status"===e)C(t);else if("origin"===e){var a=F.indexOf(t);if(-1===a){var s=Object(i.a)(F);s.push(t),S(s)}else{var c=Object(i.a)(F);c.splice(a,1),S(c)}}},name:m,species:g,status:y,resetInputs:function(){u(""),N(""),C("all"),S([])}}),Object(h.jsx)("div",{className:"optionalMessage",children:function(){if(0===R.length)return Object(h.jsxs)("p",{children:["There is no character matching the name ",m," ",g," with this origin and / or status."]})}()}),Object(h.jsx)(d,{characters:R})]}),Object(h.jsx)(o.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),s=a.find((function(e){return e.id===t}));return s?Object(h.jsx)("div",{className:"box",children:Object(h.jsx)(x,{children:Object(h.jsxs)("div",{className:"characterDetail",children:[Object(h.jsx)("img",{src:s.foto,alt:"Foto of ".concat(s.name),className:"characterDetail__image"}),Object(h.jsxs)("div",{className:"characterDetail__container",children:[Object(h.jsx)("h2",{className:"characterDetail__name",children:s.name}),Object(h.jsxs)("h3",{className:"characterDetail__species",children:["Status: ",s.status," ",function(){if("Dead"===s.status)return Object(h.jsx)("i",{className:"fab fa-optin-monster characterDetail__alien"})}()]}),Object(h.jsxs)("h3",{className:"characterDetail__species",children:["Species: ",s.species]}),Object(h.jsxs)("h3",{className:"characterDetail__species",children:["Origin: ",s.origin]}),Object(h.jsxs)("h3",{className:"characterDetail__species",children:["Episodes: ",s.episode.length]})]})]})})}):Object(h.jsx)(O,{})}})]})}),Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("small",{className:"footer__text",children:"Rick and Morty"}),Object(h.jsx)("span",{class:"footer__numbers"})]})]})};n.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8b3cca6a.chunk.js.map