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

    await categoriesList.map((category) => {
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

            const productTotalQauntitie = getProductsByCategory.headers.get(
                "x-wp-total"
            );

            sessitionData.push({
                category: `${category.slug}`,
                quantityItems: `${productTotalQauntitie}`,
            });

            console.log(productTotalQauntitie);
            return;

            //TODO SET A TIME FOR RELOAD IF LOCAL IS NOT THE SAME AS REQUEST
            // localStorage.getItem(`@PontoDoMalte:${category.slug}-totalQauntitie`) ===
            // JSON.stringify(productTotalQauntitie)
            //   ? null
            //   : setTimeout(location.reload(), 10000);

            //localStorage.setItem(
            //    `@PontoDoMalte:${category.slug}-totalQauntitie`,
            //    JSON.stringify(productTotalQauntitie)
            //);

            if (productTotalQauntitie / 16 >= 1) {
                const totalPages = productTotalQauntitie / 16;

                const pageNumber = Math.ceil(totalPages);

                for (let i = 1; i <= pageNumber; i++) {
                    const currentPage = i;

                    (async () => {
                        const getProductsByCategoryPagination = await fetch(
                            `http://pontodomalte.com.br/wp-json/wp/v2/produtos?categories=${category.id}&_embed&per_page=16&page=${currentPage}`
                        );

                        const productsResponse = await getProductsByCategoryPagination.json();

                        /*localStorage.setItem(
                            `@PontoDoMalte:${category.slug}-page${currentPage}`,
                            JSON.stringify(productsResponse)
                        );*/
                    })();
                }
                return;
            } else {
                const productsResponse = await getProductsByCategory.json();

                /* localStorage.setItem(
                    `@PontoDoMalte:${category.slug}-page1`,
                    JSON.stringify(productsResponse)
                );*/
            }
            return;
        })();
        // callMe(category.slug, 1);
        createDivProdutc(category.slug, 1);
    });
    console.log(sessitionData);

    createMenuProducts(categoriesNameForMenu, categoriesSlugForMenu);
})();
