class pagination {
  constructor(categoryName, categoryId, totalPages) {
    this.pageNumber = 1;
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.totalPages = totalPages;
  }

  nextPage() {
    const paginationDisplay = document.querySelector(
      `.pagination_show_${this.categoryName}`
    );

    const getParentDiv = document.getElementById(this.categoryName);

    if (this.pageNumber < this.totalPages) {
      getParentDiv.innerHTML = "";
      this.pageNumber++;

      (async () => {
        const getProductsByCategoryPagination = await fetch(
          `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${this.categoryId}&_embed&per_page=16&page=${this.pageNumber}`
        );

        const productsResponse = await getProductsByCategoryPagination.json();

        showProductsList(productsResponse, this.categoryName, this.pageNumber);
      })();

      if (this.pageNumber >= this.totalPages) {
        this.pageNumber = this.totalPages;
      }
      const createTextNodeShow = document.createTextNode(
        `Mostrando ${this.pageNumber} de ${this.totalPages} páginas`
      );
      paginationDisplay.innerHTML = "";
      paginationDisplay.appendChild(createTextNodeShow);
    }
  }

  prevPage = () => {
    const paginationDisplay = document.querySelector(
      `.pagination_show_${this.categoryName}`
    );

    const getParentDiv = document.getElementById(this.categoryName);
    if (this.pageNumber >= 2) {
      getParentDiv.innerHTML = "";
      this.pageNumber--;

      (async () => {
        const getProductsByCategoryPagination = await fetch(
          `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${this.categoryId}&_embed&per_page=16&page=${this.pageNumber}`
        );

        const productsResponse = await getProductsByCategoryPagination.json();

        showProductsList(productsResponse, this.categoryName, this.pageNumber);
      })();

      if (this.pageNumber === 0) {
        this.pageNumber = 1;
      }
      const createTextNodeShow = document.createTextNode(
        `Mostrando ${this.pageNumber} de ${this.totalPages} páginas`
      );

      paginationDisplay.innerHTML = "";
      paginationDisplay.appendChild(createTextNodeShow);
    }
  };
}
