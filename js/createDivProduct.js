const createDivProduct = (productName, page, productTotalPages) => {
  const getDivProductContainer = document.getElementById(
    `containerProdutos_${productName.slug}`
  );
  const createProductPaginationDiv = document.createElement("div");

  const createProductCardDiv = document.createElement("div");

  const createProductShowPaginationDiv = document.createElement("div");
  const createTextNodeShow = document.createTextNode(
    `Mostrando 1 de ${productTotalPages} páginas`
  );

  const createProductNextBtn = document.createElement("a");
  const createTextNodeNext = document.createTextNode(`>`);

  const createProductPrevtBtn = document.createElement("a");
  const createTextNodePrev = document.createTextNode(`<`);

  createProductShowPaginationDiv.classList.add(
    `pagination_show_${productName.slug}`
  );

  createProductPaginationDiv.classList.add("pagination_Container");

  createProductPrevtBtn.classList.add(`pagination_BTN`);
  createProductNextBtn.classList.add(`pagination_BTN`);

  createProductCardDiv.classList.add(`${productName.slug}`);
  createProductCardDiv.id = `${productName.slug}`;

  const paginationArr = [
    new pagination(productName.slug, productName.id, productTotalPages),
  ];

  createProductPrevtBtn.onclick = () => paginationArr[0].prevPage();

  createProductNextBtn.onclick = () => paginationArr[0].nextPage();

  createProductPrevtBtn.appendChild(createTextNodePrev);
  createProductNextBtn.appendChild(createTextNodeNext);
  createProductShowPaginationDiv.appendChild(createTextNodeShow);

  createProductPaginationDiv.appendChild(createProductPrevtBtn);
  createProductPaginationDiv.appendChild(createProductShowPaginationDiv);
  createProductPaginationDiv.appendChild(createProductNextBtn);

  getDivProductContainer.appendChild(createProductPaginationDiv);
  getDivProductContainer.appendChild(createProductCardDiv);
};
