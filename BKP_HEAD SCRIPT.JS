<script>
    
(async () => {

  const response = await fetch ('http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=28&_embed');
  
  const data = await response.json();
  
  localStorage.setItem("@PontoDoMalte:Maltes", (JSON.stringify(data)));
  

})();


(async () => {

  const response = await fetch ('http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=29&_embed');
  
  const data = await response.json();
  
  localStorage.setItem("@PontoDoMalte:Lupulos", (JSON.stringify(data)));
  

})();


(async () => {

  const response = await fetch ('http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=30&_embed');
  
  const data = await response.json();
  
  localStorage.setItem("@PontoDoMalte:Equipamentos", (JSON.stringify(data)));
  

})();


(async () => {

  const response = await fetch ('http://pontodomalte.com.br/wp-json/wp/v2/posts?categories=31&_embed');
  
  const data = await response.json();
  
  localStorage.setItem("@PontoDoMalte:Destaques", (JSON.stringify(data)));

    
})();




(async () => {

  const response = await fetch ('http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=28&');
  
  const data = await response.json();
  
  localStorage.setItem("@PontoDoMalte:NovoMaltes", (JSON.stringify(data)));

    
})();



</script>


<link rel='stylesheet' id='child-style-css' href='https://wp.cerceja.space/wp-content/themes/Avada-child/style.css' type='text/css' media='all' />