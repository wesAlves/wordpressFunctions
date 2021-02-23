class pagination {
  constructor(category) {
    this.pageNumber = 1;
    this.category = category;
  }

  nextPage(category) {
    const getParentDiv = document.getElementById(this.category);
    getParentDiv.innerHTML = "";
    const maxQauntitie = Math.ceil(
      JSON.parse(
        localStorage.getItem(`@PontoDoMalte:${category}-totalQauntitie`)
      ) / 16
    );
    if (this.pageNumber <= maxQauntitie) {
      this.pageNumber++;

      if (this.pageNumber > maxQauntitie) {
        this.pageNumber = maxQauntitie;
      }
    }
    createDivProdutc(this.category, this.pageNumber);
  }

  prevPager = (category) => {
    const getParentDiv = document.getElementById(this.category);
    getParentDiv.innerHTML = "";
    if (this.pageNumber > 0) {
      this.pageNumber--;

      if (this.pageNumber === 0) {
        this.pageNumber = 1;
      }
    }
    createDivProdutc(this.category, this.pageNumber);
  };
}
