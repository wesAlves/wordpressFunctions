const createDivProdutc = (productName, page) => {
  const getDivProductContainer = document.getElementById(
    `containerProdutos_${productName}`
  );

  const createProductCardDiv = document.createElement("div");
  createProductCardDiv.classList.add(`${productName}`);
  createProductCardDiv.id = `${productName}`;

  if (getDivProductContainer !== null) {
    getDivProductContainer.appendChild(createProductCardDiv);
    showProductsList(productName, productName, page);
  }
};
