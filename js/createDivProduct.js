const createDivProdutc = (productName, page, callback = null) => {
    const getDivProductContainer = document.getElementById(
        `containerProdutos_${productName}`
    );

    const createProductCardDiv = document.createElement("div");
    createProductCardDiv.classList.add(`${productName}`);
    createProductCardDiv.id = `${productName}`;

    if (getDivProductContainer !== null) {
        console.log(getDivProductContainer);
        getDivProductContainer.appendChild(createProductCardDiv);
        console.log(productName);
        showProductsList(productName, productName, page);
    }
    return;

    //if (callback && typeof callback === "function") {
    // callback(productName, productName, page);
    // showProductsList(productName, productName, page);
    //}
};
