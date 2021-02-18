(async () => {
  const requestCategories = new Request(
    "http://pontodomalte.com.br/wp-json/wp/v2/categories?parent=27",
    {
      method: "GET",
    }
  );

  const categoriesNameForMenu = [];
  const categoriesSlugForMenu = [];

  const getCategories = await fetch(requestCategories);

  const categoriesList = await getCategories.json();

  await categoriesList.map((category) => {
    categoriesNameForMenu.push(category.name);
    categoriesSlugForMenu.push(category.slug);

    const requestProducts = new Request(
      `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed&per_page=16
      `,
      {
        method: "GET",
      }
    );

    (async () => {
      const getProductsByCategory = await fetch(requestProducts);

      const productTotalQauntitie = getProductsByCategory.headers.get(
        "x-wp-total"
      );

      //TODO SET A TIME FOR RELOAD IF LOCAL IS NOT THE SAME AS REQUEST
      // localStorage.getItem(`@PontoDoMalte:${category.slug}-totalQauntitie`) ===
      // JSON.stringify(productTotalQauntitie)
      //   ? null
      //   : setTimeout(location.reload(), 10000);

      localStorage.setItem(
        `@PontoDoMalte:${category.slug}-totalQauntitie`,
        JSON.stringify(productTotalQauntitie)
      );

      if (productTotalQauntitie / 16 >= 1) {
        const totalPages = productTotalQauntitie / 16;

        const pageNumber = Math.ceil(totalPages);

        for (let i = 1; i <= pageNumber; i++) {
          const currentPage = i;

          (async () => {
            const getProductsByCategoryPagination = await fetch(
              `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed&per_page=16&page=${currentPage}`
            );

            const productsResponse = await getProductsByCategoryPagination.json();

            localStorage.setItem(
              `@PontoDoMalte:${category.slug}-page${currentPage}`,
              JSON.stringify(productsResponse)
            );
          })();
        }
        return;
      } else {
        const productsResponse = await getProductsByCategory.json();

        localStorage.setItem(
          `@PontoDoMalte:${category.slug}-page1`,
          JSON.stringify(productsResponse)
        );
      }
      return;
    })();
  });

  createMenuProducts(categoriesNameForMenu, categoriesSlugForMenu);
})();

const callMe = (produto, page, callback = null) => {
  const ExistsDivProduct = document.getElementById(produto);

  const createDivProdutc = (productName) => {
    const getDivProductContainer = document.getElementById(
      `containerProdutos_${productName}`
    );

    const createProductCardDiv = document.createElement("div");
    createProductCardDiv.classList.add(`${productName}`);
    createProductCardDiv.id = `${productName}`;

    getDivProductContainer.appendChild(createProductCardDiv);
  };

  if (!ExistsDivProduct) {
    createDivProdutc(produto);
    showProductsList(produto, produto, page);
  }
  if (callback && typeof callback === "function") {
    callback();
  }
};

const showProductsList = (produtoCategorias, divName, page) => {
  const divProd = document.getElementById(divName);
  divProd.innerHTML = "";

  const paginationDisplay = document.querySelector(
    `.pagination_show_${divName}`
  );

  const qntProductCategoryPagination = JSON.parse(
    localStorage.getItem(`@PontoDoMalte:${divName}-totalQauntitie`)
  );
  if (paginationDisplay !== null) {
    paginationDisplay.innerHTML = `Monstrando grupo ${page} de ${Math.ceil(
      qntProductCategoryPagination / 16
    )}`;
  }

  const getProdutoData = JSON.parse(
    localStorage.getItem(`@PontoDoMalte:${produtoCategorias}-page${page}`)
  );

  getProdutoData.map((produtoCategoria) => {
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

const createMenuProducts = (categoriesNameForMenu, categoriesSlugForMenu) => {
  const menuUL = document.getElementById("menuProdutos");

  categoriesNameForMenu.map((categoria, index) => {
    const hideShowElement = document.getElementById(
      `containerProdutos_${categoriesSlugForMenu[index]}`
    );

    const titlePlace = document.getElementById(
      `containerProdutos_${categoriesSlugForMenu[index]}`
    );

    const categoryTitle = document.createElement("H2");
    const menuItem = document.createElement("LI");
    const categoryMenuItem = document.createElement("INPUT");
    const categoryMenuItemLabel = document.createElement("LABEL");
    const label = document.createTextNode(` ${categoria}`);

    categoryTitle.setAttribute("class", "categoryTitle");

    menuItem.setAttribute("class", "selectMenu");

    categoryMenuItem.setAttribute("type", "radio");
    categoryMenuItem.setAttribute("id", categoria);
    categoryMenuItem.setAttribute("value", categoriesSlugForMenu[index]);
    categoryMenuItem.setAttribute("name", "categoriaMenu");

    categoryMenuItemLabel.setAttribute("for", categoria);

    categoryTitle.innerHTML = categoria;

    if (titlePlace !== null) {
      titlePlace.insertBefore(categoryTitle, titlePlace.firstChild);
    }

    categoryMenuItemLabel.appendChild(label);

    menuItem.appendChild(categoryMenuItem);
    menuItem.appendChild(categoryMenuItemLabel);

    menuUL.appendChild(menuItem);

    if (categoria !== null) {
      document.getElementById(categoria).onclick = function () {
        toggleHidden(categoria, categoriesSlugForMenu[index]);
      };
    }
  });
};

const toggleHidden = (categoria, slug) => {
  const IsCheckedLabel = document.getElementsByName("categoriaMenu");

  const containerCategory = `containerProdutos_${slug}`.replace(
    `containerProdutos_`,
    ""
  );

  for (let i = 0; i < IsCheckedLabel.length; i++) {
    const maltes = document.getElementById(`containerProdutos_maltes`);
    if (maltes !== null) {
      maltes.classList.add("hidden");
    }

    const lupulos = document.getElementById(`containerProdutos_lupulos`);
    if (lupulos !== null) {
      lupulos.classList.add("hidden");
    }

    const insumos_diversos = document.getElementById(
      `containerProdutos_insumos_diversos`
    );
    if (insumos_diversos !== null) {
      insumos_diversos.classList.add("hidden");
    }

    const leveduras = document.getElementById(`containerProdutos_leveduras`);
    if (leveduras !== null) {
      leveduras.classList.add("hidden");
    }

    const equipamentos = document.getElementById(
      "containerProdutos_equipamentos"
    );
    if (equipamentos !== null) {
      equipamentos.classList.add("hidden");
    }

    const destaque = document.getElementById(`containerProdutos_destaque`);
    if (destaque !== null) {
      destaque.classList.add("hidden");
    }

    const servicos = document.getElementById(`containerProdutos_servicos`);
    if (servicos !== null) {
      servicos.classList.add("hidden");
    }

    document
      .getElementById(`containerProdutos_${slug}`)
      .classList.remove("hidden");

    callMe(slug, 1);

    hideEmptyNodes();
  }
};

const hideEmptyNodes = () => {
  const getPrice = document.querySelectorAll(".ProductPrice");

  for (let i = 0; i < getPrice.length; i++) {
    if (getPrice[i].childNodes.length === 0) {
      getPrice[i].classList.add("hidden");
    } else getPrice[i].classList.remove("hidden");
  }
};

/*Pagination*/

class pagination {
  constructor(category) {
    this.pageNumber = 1;
    this.category = category;
  }

  nextPage(category) {
    const maxQauntitie = Math.ceil(
      JSON.parse(
        localStorage.getItem(`@PontoDoMalte:${category}-totalQauntitie`)
      ) / 16
    );
    if (this.pageNumber <= maxQauntitie) {
      this.pageNumber++;

      if (this.pageNumber >= maxQauntitie) {
        this.pageNumber = maxQauntitie;
      }
    }
    // callMe(category, this.pageNumber);
    showProductsList(category, category, this.pageNumber);
    console.log(this.pageNumber);
  }

  prevPager = (category) => {
    if (this.pageNumber > 0) {
      this.pageNumber--;

      if (this.pageNumber === 0) {
        this.pageNumber = 1;
      }
    }
    showProductsList(category, category, this.pageNumber);
    // callMe(category, this.pageNumber);
    // console.log(this.pageNumber);
  };
}

hideEmptyNodes();

window.addEventListener("load", (event) => {
  document.getElementById("Destaque").click();
});
