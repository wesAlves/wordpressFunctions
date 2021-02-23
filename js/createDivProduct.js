const createDivProduct = (productName, page) => {
  const getDivProductContainer = document.getElementById(
    `containerProdutos_${productName.slug}`
  );

  const createProductCardDiv = document.createElement("div");
  createProductCardDiv.classList.add(`${productName.slug}`);
  createProductCardDiv.id = `${productName.slug}`;

  getDivProductContainer.appendChild(createProductCardDiv);

  // if (getDivProductContainer !== null) {
  //   getDivProductContainer.appendChild(createProductCardDiv);
  //   showProductsList(productName, productName.slug, page);
  // }
};
