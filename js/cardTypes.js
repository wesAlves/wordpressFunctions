const cardsFields = {
  nome: "Banana",
  preco_01: 10,
  preco_02: 10,
  preco_03: 10,
  tipo_preco_01: "/ kg",
  tipo_preco_02: "/ saca 25 kg",
  tipo_preco_03: "outros",
  potencial_malte: "10",
  cor_malte: "10",
  tipo_cor_malte: "10",
  tipo_lupulo: "",
  aplicacao_lupulo: "amargor",
  pais_de_origem: "Brasil",
  alphas: "10",
  oleos: "0.3",
  embalagem: "sachet",
  tipo_de_fermentacao: "alta",
  descricao: "Banana description",
  laboratorio: "LevTeck",
  foto: "",
  link: "",
};

const createCardType = (category, productObject = cardsFields) => {
  if (category !== "destaque") {
    const getCardParentDiv = document.getElementById(category);

    const card = document.createElement("div");

    const cardLink = document.createElement("a");
    cardLink.href = productObject.link;

    card.classList.add(`card_${category}`);
    card.setAttribute("id", `${category}_${productObject.nome}`);
    card.classList.add("ProductCardList");

    getCardParentDiv.appendChild(card);
    card.appendChild(cardLink);

    productCards(category, productObject);
  } else {
    const getCardParentDiv = document.getElementById(category);

    const card = document.createElement("div");

    const cardLink = document.createElement("a");
    cardLink.href = productObject.link;

    card.classList.add(`card_${category}`);
    card.setAttribute("id", `${category}_${productObject.nome}_destaque_card`);
    card.classList.add("ProductCardList");

    getCardParentDiv.appendChild(card);
    card.appendChild(cardLink);
    destaqueCards(category, productObject);
  }
};

const productCards = (category, productObject) => {
  const {
    nome,
    preco,
    potencial_malte,
    cor_malte,
    tipo_cor_malte,
    tipo_lupulo,
    aplicacao_lupulo,
    pais_de_origem,
    alphas,
    oleos,
    embalagem,
    tipo_de_fermentacao,
    descricao,
    foto,
    // link,
    laboratorio,
  } = productObject;

  delete productObject.link;

  const categoryAtt = [];
  const precosArr = [preco[0].preco_01, preco[1].preco_02, preco[2].preco_03];
  const precosTipeArr = [
    preco[0].tipo_preco_01,
    preco[1].tipo_preco_02,
    preco[2].tipo_preco_03,
  ];
  const productDiv = document.getElementById(`${category}_${nome}`);
  productDiv.innerHTML = "";

  Object.keys(productObject).map((categoryAttName) => {
    if (
      productObject[categoryAttName] !== "" &&
      productObject[categoryAttName] !== null &&
      productObject[categoryAttName] !== "null" &&
      productObject[categoryAttName] !== "undefined" &&
      productObject[categoryAttName] !== undefined &&
      productObject[categoryAttName] !== 0
    ) {
      if (categoryAttName !== "tipo_cor_malte") {
        const createCategoryDiv = document.createElement("div");
        categoryAttName !== "preco"
          ? createCategoryDiv.classList.add(categoryAttName)
          : createCategoryDiv.classList.add(`${categoryAttName}_container`);

        createCategoryDiv.setAttribute("id", `${nome}_${categoryAttName}`);

        productDiv.appendChild(createCategoryDiv);

        categoryAtt.push(categoryAttName);
      }
    }
  });

  categoryAtt.map((categoryName) => {
    const categoryConatiner = document.getElementById(
      `${nome}_${categoryName}`
    );

    if (
      categoryName !== "preco" &&
      categoryName !== "foto" &&
      categoryName !== "cor_malte" &&
      categoryName !== "tipo_cor_malte"
    ) {
      const textNode = document.createTextNode(
        `${productObject[categoryName]}`
      );
      categoryConatiner.appendChild(textNode);
    }

    if (categoryName === "cor_malte") {
      const createSpanTipoCor = document.createElement("span");

      const textNodePrecoTipo = document.createTextNode(
        ` ${productObject["tipo_cor_malte"]}`
      );

      const textNode = document.createTextNode(
        `${productObject[categoryName]}`
      );
      createSpanTipoCor.appendChild(textNodePrecoTipo);
      categoryConatiner.appendChild(textNode);
      categoryConatiner.appendChild(createSpanTipoCor);
    }
  });

  const precoConatiner = document.getElementById(`${nome}_preco`);

  precosArr.map((precoProduct, index) => {
    if (
      precoProduct !== null &&
      precoProduct !== "null" &&
      precoProduct !== undefined &&
      precoProduct !== "undefined" &&
      precoProduct !== ""
    ) {
      const preco = document.createElement("p");
      preco.classList.add("preco");

      const createSpanPrice = document.createElement("span");

      const textNodePreco = document.createTextNode(precoProduct);
      const textNodePrecoTipo = document.createTextNode(
        ` ${precosTipeArr[index]}`
      );

      if (
        precosTipeArr[index] !== null &&
        precosTipeArr[index] !== "null" &&
        precosTipeArr[index] !== undefined &&
        precosTipeArr[index] !== "undefined"
      ) {
        createSpanPrice.appendChild(textNodePrecoTipo);
        preco.appendChild(textNodePreco);
        preco.appendChild(createSpanPrice);
        precoConatiner.appendChild(preco);
      } else {
        preco.appendChild(textNodePreco);
        preco.appendChild(createSpanPrice);
        precoConatiner.appendChild(preco);
      }
    }
  });

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  foto !== "false"
    ? (createImg.src = foto)
    : (createImg.src =
        "http://pontodomalte.com.br/wp-content/uploads/2021/02/image-placeholder-350x350-1.png");

  fotoDiv.appendChild(createImg);
};

const destaqueCards = (category, productObject) => {
  const {
    nome,
    preco,
    potencial_malte,
    cor_malte,
    tipo_cor_malte,
    tipo_lupulo,
    aplicacao_lupulo,
    pais_de_origem,
    alphas,
    oleos,
    embalagem,
    tipo_de_fermentacao,
    descricao,
    foto,
    // link,
    laboratorio,
  } = productObject;

  delete productObject.link;

  const categoryAtt = [];
  const precosArr = [preco[0].preco_01, preco[1].preco_02, preco[2].preco_03];
  const precosTipeArr = [
    preco[0].tipo_preco_01,
    preco[1].tipo_preco_02,
    preco[2].tipo_preco_03,
  ];
  const productDiv = document.getElementById(
    `${category}_${nome}_destaque_card`
  );

  Object.keys(productObject).map((categoryAttName) => {
    if (
      productObject[categoryAttName] !== "" &&
      productObject[categoryAttName] !== null &&
      productObject[categoryAttName] !== "null" &&
      productObject[categoryAttName] !== "undefined" &&
      productObject[categoryAttName] !== undefined &&
      productObject[categoryAttName] !== 0
    ) {
      if (categoryAttName !== "tipo_cor_malte") {
        const createCategoryDiv = document.createElement("div");
        categoryAttName !== "preco"
          ? createCategoryDiv.classList.add(`${categoryAttName}`)
          : createCategoryDiv.classList.add(`${categoryAttName}_container`);

        createCategoryDiv.setAttribute(
          "id",
          `${nome}_${categoryAttName}_destaque_card`
        );

        productDiv.appendChild(createCategoryDiv);

        categoryAtt.push(categoryAttName);
      }
    }
  });

  categoryAtt.map((categoryName) => {
    const categoryConatiner = document.getElementById(
      `${nome}_${categoryName}_destaque_card`
    );

    if (
      categoryName !== "preco" &&
      categoryName !== "foto" &&
      categoryName !== "cor_malte" &&
      categoryName !== "tipo_cor_malte"
    ) {
      const textNode = document.createTextNode(
        `${productObject[categoryName]}`
      );
      categoryConatiner.appendChild(textNode);
    }

    if (categoryName === "cor_malte") {
      const createSpanTipoCor = document.createElement("span");

      const textNodePrecoTipo = document.createTextNode(
        ` ${productObject["tipo_cor_malte"]}`
      );

      const textNode = document.createTextNode(
        `${productObject[categoryName]}`
      );
      createSpanTipoCor.appendChild(textNodePrecoTipo);
      categoryConatiner.appendChild(textNode);
      categoryConatiner.appendChild(createSpanTipoCor);
    }
  });

  const precoConatiner = document.getElementById(`${nome}_preco_destaque_card`);

  precosArr.map((precoProduct, index) => {
    if (
      precoProduct !== null &&
      precoProduct !== "null" &&
      precoProduct !== undefined &&
      precoProduct !== "undefined" &&
      precoProduct !== ""
    ) {
      const preco = document.createElement("p");
      preco.classList.add("preco");

      const createSpanPrice = document.createElement("span");

      const textNodePreco = document.createTextNode(precoProduct);
      const textNodePrecoTipo = document.createTextNode(
        ` ${precosTipeArr[index]}`
      );

      if (
        precosTipeArr[index] !== null &&
        precosTipeArr[index] !== "null" &&
        precosTipeArr[index] !== undefined &&
        precosTipeArr[index] !== "undefined"
      ) {
        createSpanPrice.appendChild(textNodePrecoTipo);
        preco.appendChild(textNodePreco);
        preco.appendChild(createSpanPrice);
        precoConatiner.appendChild(preco);
      } else {
        preco.appendChild(textNodePreco);
        preco.appendChild(createSpanPrice);
        precoConatiner.appendChild(preco);
      }
    }
  });

  const fotoDiv = document.getElementById(`${nome}_foto_destaque_card`);
  const createImg = document.createElement("img");
  foto !== "false"
    ? (createImg.src = foto)
    : (createImg.src =
        "http://pontodomalte.com.br/wp-content/uploads/2021/02/image-placeholder-350x350-1.png");

  fotoDiv.appendChild(createImg);
};
