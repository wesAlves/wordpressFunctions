const getProducts = async () => {
  const getCategories = await fetch(
    "http://pontodomalte.com.br/wp-json/wp/v2/categories?parent=27"
  );

  const categoriesList = await getCategories.json();

  await categoriesList.map((category) => {
    (async () => {
      const getProductsByCategory = await fetch(
        `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed`
      );

      const productsResponse = await getProductsByCategory.json();

      localStorage.setItem(
        `@PontoDoMalte:${category.slug}`,
        JSON.stringify(productsResponse)
      );
      //   callMe(category.slug);
    })();
  });
};

const callMe = (produto) => {
  const createDivProdutc = (productName) => {
    const getDivProductContainer = document.getElementById(
      `containerProdutos_${productName}`
    );
    const createProductCardDiv = document.createElement("div");
    createProductCardDiv.classList.add(`${productName}`);
    createProductCardDiv.id = `${productName}`;

    getDivProductContainer.appendChild(createProductCardDiv);

    showProductsList(productName, productName);
  };

  switch (produto) {
    case "destaque":
      createDivProdutc("destaque");
      break;
    case "insumos_diversos":
      createDivProdutc("insumos_diversos");
      break;
    case "equipamentos":
      createDivProdutc("equipamentos");
      break;
    case "servicos":
      createDivProdutc("servicos");
      break;
    case "maltes":
      createDivProdutc("maltes");
      break;
    case "leveduras":
      createDivProdutc("leveduras");
      break;
    case "lupulos":
      createDivProdutc("lupulos");
      break;
  }
};

const showProductsList = (produtoCategorias, divName) => {
  const getProdutoData = JSON.parse(
    localStorage.getItem(`@PontoDoMalte:${produtoCategorias}`)
  );

  getProdutoData.map((produtoCategoria) => {
    const divProd = document.getElementById(divName);

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

    /*ELEMENTS POPULATE */
    const createTitle = document.createElement("h3");
    createTitle.innerHTML = produtoCategoria.title.rendered;

    const createImg = document.createElement("img");
    createImg.src = produtoCategoria.acf.foto_do_produto;

    const createDescription = document.createElement("span");
    createDescription.innerHTML = produtoCategoria.acf.descricao;

    /*CHANGE WHEN TYPE CHANGES */
    const createProdcutPrice_01 = document.createElement("p");
    createProdcutPrice_01.attributes.setNamedItem(classProductPrice);
    createProdcutPrice_01.innerHTML = produtoCategoria.acf.preco_a_granel_kg;

    const createProdcutPrice_02 = document.createElement("p");
    createProdcutPrice_02.classList.add(classProductPrice.value);
    createProdcutPrice_02.innerHTML = produtoCategoria.acf.preco_por_saca_25_kg;

    /*RENDER ELEMENTS*/
    divProd.appendChild(createProdcutNode);

    createProdcutNode.appendChild(createProdcutImageNode);
    createProdcutImageNode.appendChild(createImg);

    createProdcutNode.appendChild(createTitle);
    createProdcutNode.appendChild(createDescription);

    createProdcutNode.appendChild(createProdcutPrice_01);
    createProdcutNode.appendChild(createProdcutPrice_02);
  });
};
