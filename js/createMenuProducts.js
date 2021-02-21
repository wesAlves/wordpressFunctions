const createMenuProducts = (categoriesNameForMenu, categoriesSlugForMenu) => {
  const menuUL = document.getElementById("menuProdutos");

  categoriesNameForMenu.map((categoria, index) => {
    if (categoria !== "Destaque") {
      const titlePlace = document.getElementById(
        `containerProdutos_${categoriesSlugForMenu[index]}`
      );

      const categoryTitle = document.createElement("H2");
      const menuItem = document.createElement("LI");
      const categoryMenuItem = document.createElement("INPUT");
      const categoryMenuItemLabel = document.createElement("LABEL");
      const label = document.createTextNode(` ${categoria}`);

      categoryTitle.setAttribute("class", "categoryTitle");

      menuItem.setAttribute("class", "selectMenu");

      categoryMenuItem.setAttribute("type", "radio");
      categoryMenuItem.setAttribute("id", categoria);
      categoryMenuItem.setAttribute("value", categoriesSlugForMenu[index]);
      categoryMenuItem.setAttribute("name", "categoriaMenu");

      categoryMenuItemLabel.setAttribute("for", categoria);

      categoryTitle.innerHTML = categoria;

      if (titlePlace !== null) {
        titlePlace.insertBefore(categoryTitle, titlePlace.firstChild);
      }

      categoryMenuItemLabel.appendChild(label);

      menuItem.appendChild(categoryMenuItem);
      menuItem.appendChild(categoryMenuItemLabel);

      menuUL.appendChild(menuItem);

      if (categoria !== null) {
        document.getElementById(categoria).onclick = function () {
          toggleHidden(categoria, categoriesSlugForMenu[index]);
        };
      }
    }
  });
};
