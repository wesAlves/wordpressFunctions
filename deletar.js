const getContainerCategory = document.getElementsByClassName(
  "categoria_container"
);

for (let i = 0; i < getContainerCategory.length; i++) {
  if (getContainerCategory[i].offsetHeight < 30) {
    getContainerCategory[i].style.display = "none";
  }
}

const setDivDisplayNone = () => {
  for (let i = 0; i < getContainerCategory.length; i++) {
    if (getContainerCategory[i].offsetHeight < 30) {
      getContainerCategory[i].style.display = "none";
    }
  }
};
