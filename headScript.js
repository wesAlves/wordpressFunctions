// (async () => {
//   const response = await fetch(
//     "http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=28&_embed"
//   );

//   const data = await response.json();

//   localStorage.setItem("@PontoDoMalte:Maltes", JSON.stringify(data));
// })();

// (async () => {
//   const response = await fetch(
//     "http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=29&_embed"
//   );

//   const data = await response.json();

//   localStorage.setItem("@PontoDoMalte:Lupulos", JSON.stringify(data));
// })();

// (async () => {
//   const response = await fetch(
//     "http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=30&_embed"
//   );

//   const data = await response.json();

//   localStorage.setItem("@PontoDoMalte:Equipamentos", JSON.stringify(data));
// })();

// (async () => {
//   const response = await fetch(
//     "http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=31&_embed"
//   );

//   const data = await response.json();

//   localStorage.setItem("@PontoDoMalte:Destaques", JSON.stringify(data));
// })();

// (async () => {
//   const response = await fetch(
//     "http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=28&_embed"
//   );

//   const data = await response.json();

//   localStorage.setItem("@PontoDoMalte:NovoMaltes", JSON.stringify(data));
// })();
// localStorage.clear();

//TODO put all data on cache
// const cacheAvailable = "caches" in self;
// console.log(cacheAvailable);

// (async () => {
//   const cache = await caches.open("pontoDoMalte");
//   cache.add(new Request("data"));
//   console.log(cache.keys);
// })();
