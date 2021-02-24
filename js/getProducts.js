// const sessitionData = [];
(async () => {
  const requestCategories = new Request(
    "http://pontodomalte.com.br/wp-json/wp/v2/categories?parent=27",
    {
      method: "GET",
    }
  );

  const categoriesNameForMenu = [];
  const categoriesSlugForMenu = [];
  const categoriesIDs = [];

  const getCategories = await fetch(requestCategories);
  const categoriesList = await getCategories.json();

  await categoriesList.map((category, index) => {
    categoriesNameForMenu.push(category.name);
    categoriesSlugForMenu.push(category.slug);
    categoriesIDs.push(category.id);

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

      createDivProduct(categoriesList[index], 1, productTotalPages);
    })();
  });

  createMenuProducts(
    categoriesNameForMenu,
    categoriesSlugForMenu,
    categoriesIDs
  );
})();

const getProductByCategory = async (categoryID, categorySlug, page) => {
  const getProductsByCategoryPagination = await fetch(
    `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${categoryID}&_embed&per_page=16&page=${page}`
  );

  const productsResponse = await getProductsByCategoryPagination.json();

  showProductsList(productsResponse, categorySlug);
};
