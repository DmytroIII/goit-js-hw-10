!function(){var n=document.querySelector(".list");fetch("".concat("http://api.weatherapi.com/v1","/forecast.json?key=").concat("9153ea9818454af8838171652221410","&q=").concat("Kharkiv","&days=7")).then((function(n){if(!n.ok)throw new Error;return n.json()})).then((function(t){var c=t.forecast.forecastday.map((function(n){return"<li>\n  <h2> Дата: ".concat(n.date,'  </h2>\n  <img src="').concat(n.day.condition.icon,'" alt="').concat(n.day.condition.text,'">\n    <p>').concat(n.day.condition.text," </p>\n    <h3> Средняя температура: ").concat(n.day.avgtemp_c,"  </h3>\n    </li>")})).join("");n.insertAdjacentHTML("beforeend",c)})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.09915e9f.js.map
