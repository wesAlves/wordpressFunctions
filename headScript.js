// localStorage.clear();

(async () => {
  const getCategories = await fetch(
    "http://pontodomalte.com.br/wp-json/wp/v2/categories?parent=27"
  );

  const categoriesList = await getCategories.json();

  await categoriesList.map((category) => {
    (async () => {
      const localDataStorage = JSON.parse(
        localStorage.getItem(`@PontoDoMalte:${category.slug}`)
      );

      const getProductsByCategory = await fetch(
        `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed`
      );

      const productsResponse = await getProductsByCategory.json();

      if (
        JSON.stringify(localDataStorage) === JSON.stringify(productsResponse)
      ) {
        return;
      } else {
        localStorage.setItem(
          `@PontoDoMalte:${category.slug}`,
          JSON.stringify(productsResponse)
        );
        setTimeout(location.reload(), 10);
      }
      // callMe(category.slug);
    })();
  });
})();

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
  createDivProdutc(produto);
};

const showProductsList = (produtoCategorias, divName) => {
  const getProdutoData = JSON.parse(
    localStorage.getItem(`@PontoDoMalte:${produtoCategorias}`)
  );

  getProdutoData.map((produtoCategoria) => {
    const divProd = document.getElementById(divName);

    const classProduct = document.createAttribute("class");
    const classProductImage = document.createAttribute("class");
    const classProductPrice = document.createAttribute("class");

    classProduct.value = "ProductCardList";
    classProductImage.value = "productImage";
    classProductPrice.value = "ProductPrice";

    const createProdcutNode = document.createElement("div");

    const createTitle = document.createElement("h3");
    const createDescription = document.createElement("span");
    const createImg = document.createElement("img");
    const createProdcutImageNode = document.createElement("div");

    // Equipamentos, Serviços, etc
    const createProdcutPriceGeneric = document.createElement("p");

    // Maltes
    const createProdcutPrice_01 = document.createElement("p");
    const createProdcutPrice_02 = document.createElement("p");

    // Lupulos
    const createPriceLupulo_01 = document.createElement("p"); //"preco_do_pacote_50_g": "23,91",;
    const createPriceLupulo_02 = document.createElement("p"); //"preco_do_pacote_de_200_g": ,;
    const createAphaAcid = document.createElement("p"); //"alpha_acido": "none",
    const createAplicacao = document.createElement("p"); // "aplicacao": "AR",
    const createOils = document.createElement("p"); // "total_de_oleos": "none",
    const createOrigin = document.createElement("p"); // "pais_de_origem": "Alemanha",

    // Leveduras
    const createLabs = document.createElement("p"); //    "laboratorio": "Red Star",
    const createTipoFerm = document.createElement("p"); //    "tipo_de_fermentacao": "none",
    const createAtenuation = document.createElement("p"); //    "atenuacao": "none",
    const createFloculation = document.createElement("p"); //    "floculacao": "none",
    const createPricePakc = document.createElement("p"); //    "preco_do_pacote": "13,45",

    createProdcutNode.attributes.setNamedItem(classProduct);
    createProdcutImageNode.attributes.setNamedItem(classProductImage);
    createProdcutPrice_01.attributes.setNamedItem(classProductPrice);
    createProdcutPrice_02.classList.add(classProductPrice.value);
    createProdcutPriceGeneric.classList.add(classProductPrice.value);
    createPricePakc.classList.add(classProductPrice.value);
    createPriceLupulo_01.classList.add(classProductPrice.value);
    createPriceLupulo_02.classList.add(classProductPrice.value);

    createTitle.innerHTML = produtoCategoria.title.rendered;
    createDescription.innerHTML = produtoCategoria.acf.descricao;
    createImg.src = produtoCategoria.acf.foto_do_produto;

    divProd.appendChild(createProdcutNode);
    createProdcutNode.appendChild(createProdcutImageNode);
    createProdcutImageNode.appendChild(createImg);
    createProdcutNode.appendChild(createTitle);
    produtoCategoria.acf.descricao !== "none" &&
      createProdcutNode.appendChild(createDescription);

    switch (produtoCategorias) {
      case "destaque":
        createProdcutNode.appendChild(createProdcutPriceGeneric);

        produtoCategoria.acf.preco_a_granel_kg !== 0 || null
          ? createProdcutNode.appendChild(createProdcutPrice_01)
          : null;

        produtoCategoria.acf.preco_por_saca_25_kg !== 0 || null
          ? createProdcutNode.appendChild(createProdcutPrice_02)
          : null;

        produtoCategoria.acf.preco_do_pacote !== 0 || null
          ? createProdcutNode.appendChild(createPricePakc)
          : null;

        produtoCategoria.acf.preco_do_pacote_50_g !== 0 || null
          ? createProdcutNode.appendChild(createPriceLupulo_01)
          : null;

        produtoCategoria.acf.preco_do_pacote_de_200_g !== 0 || null
          ? createProdcutNode.appendChild(createPriceLupulo_02)
          : null;

        break;
      case "insumos_diversos":
        createProdcutPriceGeneric.innerHTML =
          produtoCategoria.acf.preco_do_produto;

        createProdcutNode.appendChild(createProdcutPriceGeneric);
        break;
      case "equipamentos":
        createProdcutPriceGeneric.innerHTML =
          produtoCategoria.acf.preco_do_produto;

        createProdcutNode.appendChild(createProdcutPriceGeneric);
        break;
      case "servicos":
        createProdcutPriceGeneric.innerHTML =
          produtoCategoria.acf.preco_do_produto;

        createProdcutNode.appendChild(createProdcutPriceGeneric);
        break;
      case "maltes":
        createProdcutPrice_01.innerHTML =
          produtoCategoria.acf.preco_a_granel_kg;
        createProdcutPrice_02.innerHTML =
          produtoCategoria.acf.preco_por_saca_25_kg;

        produtoCategoria.acf.preco_a_granel_kg !== 0 &&
          createProdcutNode.appendChild(createProdcutPrice_01);

        produtoCategoria.acf.preco_por_saca_25_kg !== 0 &&
          createProdcutNode.appendChild(createProdcutPrice_02);
        break;
      case "leveduras":
        createLabs.innerHTML = produtoCategoria.acf.laboratorio;
        createTipoFerm.innerHTML = produtoCategoria.acf.tipo_de_fermentacao;
        createAtenuation.innerHTML = produtoCategoria.acf.atenuacao;
        createFloculation.innerHTML = produtoCategoria.acf.floculacao;
        createPricePakc.innerHTML = produtoCategoria.acf.preco_do_pacote;

        produtoCategoria.acf.laboratorio !== "none" &&
          createProdcutNode.appendChild(createLabs);

        produtoCategoria.acf.tipo_de_fermentacao !== "none" &&
          createProdcutNode.appendChild(createTipoFerm);

        produtoCategoria.acf.atenuacao !== "none" &&
          createFloculation.appendChild(createAtenuation);

        produtoCategoria.acf.floculacao !== "none" &&
          createProdcutNode.appendChild(createFloculation);

        produtoCategoria.acf.preco_do_pacote !== 0 &&
          createProdcutNode.appendChild(createPricePakc);

        break;
      case "lupulos":
        createPriceLupulo_01.innerHTML =
          produtoCategoria.acf.preco_do_pacote_50_g;
        createPriceLupulo_02.innerHTML =
          produtoCategoria.acf.preco_do_pacote_de_200_g;
        createAphaAcid.innerHTML = produtoCategoria.acf.alpha_acido;
        createAplicacao.innerHTML = produtoCategoria.acf.aplicacao;
        createOils.innerHTML = produtoCategoria.acf.total_de_oleos;
        createOrigin.innerHTML = produtoCategoria.acf.pais_de_origem;

        produtoCategoria.acf.preco_do_pacote_50_g !== 0 &&
          createProdcutNode.appendChild(createPriceLupulo_01);

        produtoCategoria.acf.preco_do_pacote_de_200_g !== 0 &&
          createProdcutNode.appendChild(createPriceLupulo_02);

        produtoCategoria.acf.alpha_acido !== "none" &&
          createProdcutNode.appendChild(createAphaAcid);

        produtoCategoria.acf.aplicacao !== "none" &&
          createProdcutNode.appendChild(createAplicacao);

        produtoCategoria.acf.total_de_oleos !== "none" &&
          createProdcutNode.appendChild(createOils);

        produtoCategoria.acf.pais_de_origem !== "none" &&
          createProdcutNode.appendChild(createOrigin);
        break;
    }
  });
};
