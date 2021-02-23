const sessitionData = [];
(async () => {
  const requestCategories = new Request(
    "http://pontodomalte.com.br/wp-json/wp/v2/categories?parent=27",
    {
      method: "GET",
    }
  );

  const categoriesNameForMenu = [];
  const categoriesSlugForMenu = [];

  const getCategories = await fetch(requestCategories);
  const categoriesList = await getCategories.json();

  await categoriesList.map((category, index) => {
    categoriesNameForMenu.push(category.name);
    categoriesSlugForMenu.push(category.slug);

    const requestProducts = new Request(
      `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed&per_page=16
        `,
      {
        method: "GET",
      }
    );

    (async () => {
      const getProductsByCategory = await fetch(requestProducts);

      const productTotalPages = getProductsByCategory.headers.get(
        "X-WP-TotalPages"
      );

      sessitionData.push({
        category: `${category.slug}`,
        quantityItems: `${productTotalPages}`,
      });

      (async () => {
        const getProductsByCategoryPagination = await fetch(
          `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed&per_page=16&page=1`
        );

        const productsResponse = await getProductsByCategoryPagination.json();

        showProductsList(productsResponse, category.slug, 1);
      })();
    })();
    createDivProduct(categoriesList[index], 1);
  });

  createMenuProducts(categoriesNameForMenu, categoriesSlugForMenu);
})();
