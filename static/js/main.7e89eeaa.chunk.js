(this["webpackJsonppokemon-finder"]=this["webpackJsonppokemon-finder"]||[]).push([[0],{35:function(e,n,a){e.exports=a(53)},41:function(e,n,a){},42:function(e,n,a){},43:function(e,n,a){},44:function(e,n,a){},53:function(e,n,a){"use strict";a.r(n);var t=a(1),o=a.n(t),r=a(26),m=a.n(r),c=(a(40),a(41),a(22)),i=a(18),l=a(19),s=a(20),u=a.n(s);function d(){var e=Object(l.a)(['\n    {\n      pokemon(name: "','") {\n        id\n        number\n        name\n        image\n        types\n        evolutions {\n          id\n          number\n          name\n          image\n        }\n      }\n    }\n  ']);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n    {\n      pokemons(first: ",") {\n        id\n        number\n        name\n        image\n        types\n        evolutions {\n          id\n          number\n          name\n          image\n        }\n      }\n    }\n  "]);return p=function(){return e},e}var k=a(5),v=a.n(k),f=(a(42),a(43),function(e){var n=e.index,a=e.pokemon;return o.a.createElement("div",{key:n,className:"PokemonCard"},o.a.createElement("img",{className:"PokemonCard__image",alt:"".concat(a.name),src:a.image}),o.a.createElement("div",{className:"PokemonCard__body"},o.a.createElement("div",{className:"PokemonCard__body--content"},o.a.createElement("span",{className:"PokemonCard__body--pokemonName"},a.number," - ",a.name),o.a.createElement("span",{className:"PokemonCard__body--pokemonType"},a.types.join(", ")))))}),h=a(15),E=a(34),g=(a(44),function(e){var n=e.searchPokemonByName,a=Object(t.useRef)(null);return o.a.createElement("div",{className:"SearchForm"},o.a.createElement(h.a,null,o.a.createElement(h.a.Group,{controlId:"searchPokemonForm"},o.a.createElement(h.a.Label,null,"Search for your favorite Pokemon."),o.a.createElement(h.a.Control,{ref:a,type:"text",placeholder:"Enter Pokemon..."})),o.a.createElement(E.a,{variant:"primary",onClick:function(){n(a)}},"Search")))}),w=function(){var e,n,a,r=Object(t.useState)(10),m=Object(c.a)(r,2),l=m[0],s=m[1],k=Object(t.useState)(""),h=Object(c.a)(k,2),E=h[0],w=h[1];0!==E.length?(a=E,e=u()(d(),a)):(n=l,e=u()(p(),n));var b=Object(i.a)(e),y=b.data,_=b.loading,P=b.error,O=v()("PokemonOverview__apiStatus",{"PokemonOverview__apiStatus--error":P||y&&null===y.pokemon});Object(t.useEffect)((function(){var e=function(){var e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,n=document.body,a=document.documentElement,t=Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight);e+window.pageYOffset>=t&&s(l+10)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[l]);return o.a.createElement("div",{className:"PokemonOverview"},o.a.createElement("div",{className:"PokemonOverview__searchform"},o.a.createElement(g,{searchPokemonByName:function(e){e.current&&e.current.value&&w(e.current.value)}})),(_||P||y&&null===y.pokemon)&&o.a.createElement("div",{className:O},_&&o.a.createElement("p",null,"Loading..."),P||y&&null===y.pokemon&&o.a.createElement("p",{className:"PokemonOverview__apiStatus--paragraph"},"Something went wrong trying to find this Pokemon, Please try again.")),o.a.createElement("div",{className:"PokemonOverview__pokemons"},y&&y.pokemons&&y.pokemons.map((function(e,n){return o.a.createElement(f,{key:Math.random(),index:n,pokemon:e})})),y&&y.pokemon&&o.a.createElement(f,{key:Math.random(),index:"0",pokemon:y.pokemon})))},b=a(13),y=a(32),_=a(33),P=a(10),O=new y.a,N=new _.a({uri:"https://graphql-pokemon.now.sh/"}),j=new b.a({cache:O,link:N});m.a.render(o.a.createElement(P.a,{client:j},o.a.createElement(w,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7e89eeaa.chunk.js.map