const createDivProdutc = (productName, page, callback = null) => {
  const getDivProductContainer = document.getElementById(
    `containerProdutos_${productName}`
  );

  const createProductCardDiv = document.createElement("div");
  createProductCardDiv.classList.add(`${productName}`);
  createProductCardDiv.id = `${productName}`;

  getDivProductContainer.appendChild(createProductCardDiv);

  if (callback && typeof callback === "function") {
    callback(productName, productName, page);
  }
  // showProductsList(productName, productName, page);
};
