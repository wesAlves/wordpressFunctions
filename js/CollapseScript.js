document.querySelector("#novoMalte").onclick = function () {
  toggleHideEquipamentos();
};

function toggleHideEquipamentos() {
  console.log("working");
  const getContainer = document.getElementsByClassName("container_novoMalte");

  getContainer[0].classList.toggle("hidden");
  document.querySelector("#novoMalte").classList.toggle("a180");
}
