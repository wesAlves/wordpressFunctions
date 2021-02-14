const novoMaltes = JSON.parse(localStorage.getItem("@PontoDoMalte:NovoMaltes"));
const showNovoMaltes = () => {
  " ";
};
{
  novoMaltes.map((product) => {
    //console.log(product._embedded['wp:featuredmedia'][0].source_url)

    const divProd = document.getElementById("novosMalte");

    const classProduct = document.createAttribute("class");
    classProduct.value = "ProductCardList";

    const classProductImage = document.createAttribute("class");
    classProductImage.value = "productImage";

    const classProductPrice = document.createAttribute("class");
    classProductPrice.value = "ProductPrice";

    const createProdcutNode = document.createElement("div");
    createProdcutNode.attributes.setNamedItem(classProduct);

    const createProdcutImageNode = document.createElement("div");
    createProdcutImageNode.attributes.setNamedItem(classProductImage);

    const createTitle = document.createElement("h3");
    createTitle.innerHTML = product.title.rendered;

    const createImg = document.createElement("img");
    createImg.src = product.acf.foto_do_produto;

    const createDescription = document.createElement("span");
    createDescription.innerHTML = product.acf.descricao;

    const createProdcutPrice_01 = document.createElement("p");
    createProdcutPrice_01.attributes.setNamedItem(classProductPrice);
    createProdcutPrice_01.innerHTML = product.acf.preco_a_granel_kg;

    const createProdcutPrice_02 = document.createElement("p");
    createProdcutPrice_02.classList.add(classProductPrice.value);
    createProdcutPrice_02.innerHTML = product.acf.preco_por_saca_25_kg;

    divProd.appendChild(createProdcutNode);
    createProdcutNode.appendChild(createProdcutImageNode);

    createProdcutImageNode.appendChild(createImg);

    createProdcutNode.appendChild(createTitle);
    createProdcutNode.appendChild(createDescription);

    createProdcutNode.appendChild(createProdcutPrice_01);
    createProdcutNode.appendChild(createProdcutPrice_02);
  });
}
showNovoMaltes();
