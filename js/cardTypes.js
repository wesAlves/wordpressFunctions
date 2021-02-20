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
  const getCardParentDiv = document.getElementById(category);

  //console.log(getCardParentDiv);

  const card = document.createElement("div");

  card.classList.add(`card_${category}`);
  card.setAttribute("id", `${category}_${productObject.nome}`);
  card.classList.add("ProductCardList");

  getCardParentDiv.appendChild(card);

  switch (category) {
    case "maltes":
      maltesCard(category, productObject);
      break;

    case "lupulos":
      lupulosCard(category, productObject);
      break;

    case "leveduras":
      levedurasCard(category, productObject);
      break;

    case "equipamentos":
      genericProduct(category, productObject);
      //   equipamentosCard(category, productObject);
      break;

    case "servicos":
      genericProduct(category, productObject);
      //   servcicosCard(category, productObject);
      break;

    case "destaque":
      destaquesCard(category, productObject);
      break;

    case "insumos_diversos":
      genericProduct(category, productObject);
      //   insumosDiversosCard(category, productObject);
      break;
  }
};

const maltesCard = (category, productObject) => {
  const {
    nome,
    preco_01,
    tipo_preco_01,
    preco_02,
    tipo_preco_02,
    preco_03,
    tipo_preco_03,
    potencial,
    cor,
    tipo_cor,
    foto,
    link,
  } = productObject;

  const categoryAtt = ["nome", "preco_container", "potencial", "cor", "foto"];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [tipo_preco_01, tipo_preco_02, tipo_preco_03];

  const productDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    productDiv.appendChild(createCategoryDiv);
  }
  const malteName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`${nome}`);
  malteName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");

    const createSpanPrice = document.createElement("span");

    const textNodePreco = document.createTextNode(precoProduct);
    const textNodePrecoTipo = document.createTextNode(
      ` ${precosTipeArr[index]}`
    );

    createSpanPrice.appendChild(textNodePrecoTipo);

    preco.appendChild(textNodePreco);
    preco.appendChild(createSpanPrice);
    precoConatiner.appendChild(preco);
  });

  const maltePotencial = document.getElementById(`${nome}_potencial`);
  const textNodePotencial = document.createTextNode(`${potencial}`);
  maltePotencial.appendChild(textNodePotencial);

  const malteCor = document.getElementById(`${nome}_cor`);
  const textNodeCor = document.createTextNode(`${cor} ${tipo_cor}`);
  malteCor.appendChild(textNodeCor);

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  createImg.src = foto;
  fotoDiv.appendChild(createImg);
};

const lupulosCard = (category, productName) => {
  const {
    nome,
    preco_01,
    tipo_preco_01,
    preco_02,
    tipo_preco_02,
    preco_03,
    tipo_preco_03,
    aplicacao_lupulo,
    pais_de_origem,
    alphas,
    oleos,
    foto,
    link,
  } = productName;

  const categoryAtt = [
    "nome",
    "preco_container",
    "aplicacao",
    "pais_de_origem",
    "alphas",
    "oleos",
    "foto",
  ];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [tipo_preco_01, tipo_preco_02, tipo_preco_03];

  const productDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    productDiv.appendChild(createCategoryDiv);
  }

  const lupuloName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`${nome}`);
  lupuloName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");

    const createSpanPrice = document.createElement("span");

    const textNodePreco = document.createTextNode(precoProduct);
    const textNodePrecoTipo = document.createTextNode(
      ` ${precosTipeArr[index]}`
    );

    createSpanPrice.appendChild(textNodePrecoTipo);

    preco.appendChild(textNodePreco);
    preco.appendChild(createSpanPrice);
    precoConatiner.appendChild(preco);
  });

  const lupuloAplicacao = document.getElementById(`${nome}_aplicacao`);
  const textNodeAplicacao = document.createTextNode(`${aplicacao_lupulo}`);
  lupuloAplicacao.appendChild(textNodeAplicacao);

  const lupuloPaisOrigem = document.getElementById(`${nome}_pais_de_origem`);
  const textNodePaisOrigen = document.createTextNode(`${pais_de_origem}`);
  lupuloPaisOrigem.appendChild(textNodePaisOrigen);

  const lupulosAlphas = document.getElementById(`${nome}_alphas`);
  const textNodeAlphas = document.createTextNode(`${alphas}`);
  lupulosAlphas.appendChild(textNodeAlphas);

  const lupulosOleos = document.getElementById(`${nome}_oleos`);
  const textNodeOleos = document.createTextNode(`${oleos}`);
  lupulosOleos.appendChild(textNodeOleos);

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  createImg.src = foto;
  fotoDiv.appendChild(createImg);
};

const levedurasCard = (category, productName) => {
  const {
    nome,
    preco_01,
    tipo_preco_01,
    preco_02,
    tipo_preco_02,
    preco_03,
    tipo_preco_03,
    embalagem,
    tipo_de_fermentacao,
    laboratorio,
    foto,
    link,
  } = productName;

  const categoryAtt = [
    "nome",
    "preco_container",
    "embalagem",
    "tipo_fermentacao",
    "laboratorio",
    "foto",
  ];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [tipo_preco_01, tipo_preco_02, tipo_preco_03];

  const productDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    productDiv.appendChild(createCategoryDiv);
  }

  const leveduraName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`${nome}`);
  leveduraName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");

    const createSpanPrice = document.createElement("span");

    const textNodePreco = document.createTextNode(precoProduct);
    const textNodePrecoTipo = document.createTextNode(
      ` ${precosTipeArr[index]}`
    );

    createSpanPrice.appendChild(textNodePrecoTipo);

    preco.appendChild(textNodePreco);
    preco.appendChild(createSpanPrice);
    precoConatiner.appendChild(preco);
  });

  const leveduraEmbalagem = document.getElementById(`${nome}_embalagem`);
  const textNodeEmbalagem = document.createTextNode(`${embalagem}`);
  leveduraEmbalagem.appendChild(textNodeEmbalagem);

  const leveduraTipoFermentacao = document.getElementById(
    `${nome}_tipo_fermentacao`
  );
  const textNodeTipoFermentacao = document.createTextNode(
    `${tipo_de_fermentacao}`
  );
  leveduraTipoFermentacao.appendChild(textNodeTipoFermentacao);

  const leveduraLaboratorio = document.getElementById(`${nome}_laboratorio`);
  const textNodeLaboratorio = document.createTextNode(`${laboratorio}`);
  leveduraLaboratorio.appendChild(textNodeLaboratorio);

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  createImg.src = foto;
  fotoDiv.appendChild(createImg);
};

const genericProduct = (category, productName) => {
  const {
    nome,
    preco_01,
    tipo_preco_01,
    preco_02,
    tipo_preco_02,
    preco_03,
    tipo_preco_03,
    descricao,
    foto,
    link,
  } = productName;

  const categoryAtt = ["nome", "preco_container", "descricao", "foto"];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [tipo_preco_01, tipo_preco_02, tipo_preco_03];

  const productDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    productDiv.appendChild(createCategoryDiv);
  }

  const genericName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`${nome}`);
  genericName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");

    const createSpanPrice = document.createElement("span");

    const textNodePreco = document.createTextNode(precoProduct);
    const textNodePrecoTipo = document.createTextNode(
      ` ${precosTipeArr[index]}`
    );

    createSpanPrice.appendChild(textNodePrecoTipo);

    preco.appendChild(textNodePreco);
    preco.appendChild(createSpanPrice);
    precoConatiner.appendChild(preco);
  });

  const genericDescicao = document.getElementById(`${nome}_descricao`);
  const textNodeDescricao = document.createTextNode(`${descricao}`);
  genericDescicao.appendChild(textNodeDescricao);

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  createImg.src = foto;
  fotoDiv.appendChild(createImg);
};

const destaquesCard = (category, productName) => {
  const {
    nome,
    preco_01,
    tipo_preco_01,
    preco_02,
    tipo_preco_02,
    preco_03,
    tipo_preco_03,
    foto,
    link,
  } = productName;

  const categoryAtt = ["nome", "preco_container", "foto"];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [tipo_preco_01, tipo_preco_02, tipo_preco_03];

  const productDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    productDiv.appendChild(createCategoryDiv);
  }

  const descicaoName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`${nome}`);
  descicaoName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");

    const createSpanPrice = document.createElement("span");

    const textNodePreco = document.createTextNode(precoProduct);
    const textNodePrecoTipo = document.createTextNode(
      ` ${precosTipeArr[index]}`
    );

    createSpanPrice.appendChild(textNodePrecoTipo);

    preco.appendChild(textNodePreco);
    preco.appendChild(createSpanPrice);
    precoConatiner.appendChild(preco);
  });

  const fotoDiv = document.getElementById(`${nome}_foto`);
  const createImg = document.createElement("img");
  createImg.src = foto;
  fotoDiv.appendChild(createImg);
};
