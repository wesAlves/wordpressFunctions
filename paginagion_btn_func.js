class pagination {
  constructor(category) {
    this.pageNumber = 1;
    this.category = category;
  }

  nextPage(category) {
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
    callMe(category, this.pageNumber);
    // console.log(this.pageNumber);
  }

  prevPager = (category) => {
    if (this.pageNumber > 0) {
      this.pageNumber--;

      if (this.pageNumber === 0) {
        this.pageNumber = 1;
      }
    }
    callMe(category, this.pageNumber);
    // console.log(this.pageNumber);
  };
}
