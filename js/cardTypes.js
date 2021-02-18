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
  descricao: "Banana",
};

const createCardType = (category, productObject = cardsFields) => {
  const getCardParentDiv = document.getElementById(
    `containerProdutos_${category}`
  );

  const card = document.createElement("div");

  card.classList.add(`card_${category}`);
  card.setAttribute("id", `${category}_${productObject.nome}`);
  card.innerHTML = category;

  getCardParentDiv.appendChild(card);

  createCard(category, productName);
};

const createCard = (category, productName) => {
  console.log(productName);

  switch (category) {
    case "maltes":
      maltesCard(category, productName);
  }
};

const maltesCard = (category, productObject) => {
  const {
    nome,
    preco_01,
    preco_tipo_01,
    preco_02,
    preco_tipo_02,
    preco_03,
    preco_tipo_03,
    potencial,
    cor,
    tipo_cor,
  } = productObject;

  const categoryAtt = ["nome", "preco_container", "potencial", "cor"];
  const precosArr = [preco_01, preco_02, preco_03];
  const precosTipeArr = [preco_tipo_01, preco_tipo_02, preco_tipo_03];

  const malteDiv = document.getElementById(`${category}_${nome}`);

  for (let i = 0; i < categoryAtt.length; i++) {
    const createCategoryDiv = document.createElement("div");
    createCategoryDiv.classList.add(categoryAtt[i]);
    createCategoryDiv.setAttribute("id", `${nome}_${categoryAtt[i]}`);
    malteDiv.appendChild(createCategoryDiv);
  }

  const malteName = document.getElementById(`${nome}_nome`);
  const textNodeName = document.createTextNode(`Nome: ${nome}`);
  malteName.appendChild(textNodeName);

  const precoConatiner = document.getElementById(`${nome}_preco_container`);

  precosArr.map((precoProduct, index) => {
    const preco = document.createElement("p");
    preco.classList.add("preco");
    const textNodePreco = document.createTextNode(
      `R$: ${precoProduct} ${precosTipeArr[index]}`
    );
    preco.appendChild(textNodePreco);
    precoConatiner.appendChild(preco);
  });

  const maltePotencial = document.getElementById(`${nome}_potencial`);
  const textNodePotencial = document.createTextNode(`Potencial: ${potencial}`);
  maltePotencial.appendChild(textNodePotencial);

  const malteCor = document.getElementById(`${nome}_cor`);
  const textNodeCor = document.createTextNode(`Cor: ${cor} ${tipo_cor}`);
  malteCor.appendChild(textNodeCor);
};
