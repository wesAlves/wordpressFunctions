const nextCarousel = document.getElementById("carouselNext");
const prevtCarousel = document.getElementById("carouselPrev");

const positionCarousel = [0, 1, 2];

nextCarousel.onclick = function () {
  const divDestaqueCarousel = document.getElementById("destaque");
  const parentDivDestaque = divDestaqueCarousel.parentElement;

  //   console.log(divDestaqueCarousel.offsetLeft);
  //   console.log(parentDivDestaque.offsetLeft);
  //   console.log(divDestaqueCarousel.offsetWidth);
  //   console.log(parentDivDestaque.offsetWidth);
  //   console.log(divDestaqueCarousel.offsetLeft - parentDivDestaque.offsetWidth);
  //   console.log(divDestaqueCarousel.offsetWidth - parentDivDestaque.offsetWidth);

  divDestaqueCarousel.style.marginLeft = `${
    divDestaqueCarousel.offsetWidth - parentDivDestaque.offsetWidth - 48
  }px`;
};

prevtCarousel.onclick = function () {
  const divDestaqueCarousel = document.getElementById("destaque");
  const parentDivDestaque = divDestaqueCarousel.parentElement;

  divDestaqueCarousel.style.marginLeft = "0px";
};
/*

carouselCard.style.width = `${260 * carouselCard.childElementCount}px`;

carouselCard.offsetWidth -
  carouselCard.parentElement.offsetWidth -
  carouselCard.offsetLeft;

carouselCard.children[5].offsetLeft;
*/
const carouselCard = document.getElementById("destaque");
const parentWidth = carouselCard.parentElement.offsetWidth;
const carouselCountElements = carouselCard.childElementCount;

const lastCardCarousel =
  carouselCard.children[carouselCard.children.length - 1];

carouselCard.style.width = `${250 * carouselCountElements}px`;

let marginLeftValue = 0;
const marginToLeft = (margin_Left) => {
  carouselCard.style.marginLeft = `-${margin_Left}px`;
  marginLeftValue = margin_Left + 250;
  console.log(marginLeftValue);
};

if (lastCardCarousel.offsetLeft + lastCardCarousel.offsetWidth > parentWidth) {
  carouselCard.style.marginLeft = `-${marginLeftValue}px`;
  marginLeftValue = marginLeftValue + 250;
  console.log(marginLeftValue);
}

// if (lastCardCarousel.offsetLeft + lastCardCarousel.offsetWidth < parentWidth) {
//   setTimeout(marginToLeft(marginLeftValue), 3000);
// }
