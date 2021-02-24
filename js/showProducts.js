const showProductsList = (produtoCategoriasOBJ, divName) => {
  const getProdutoData = produtoCategoriasOBJ;

  getProdutoData.map((produtoCategoria) => {
    const produtoCategoriaOBJ = {
      nome: `${produtoCategoria.title.rendered}`,
      preco: [
        {
          preco_01: `${produtoCategoria.acf.preco_01}`,
          tipo_preco_01: `${produtoCategoria.acf.tipo_preco_1}`,
        },
        {
          preco_02: `${produtoCategoria.acf.preco_2}`,
          tipo_preco_02: `${produtoCategoria.acf.tipo_preco_2}`,
        },
        {
          preco_03: `${produtoCategoria.acf.preco_3}`,
          tipo_preco_03: `${produtoCategoria.acf.tipo_preco_3}`,
        },
      ],
      potencial_malte: `${produtoCategoria.acf.potencial_malte}`,
      cor_malte: `${produtoCategoria.acf.cor_malte}`,
      tipo_cor_malte: `${produtoCategoria.acf.tipo_cor_malte}`,
      tipo_lupulo: `${produtoCategoria.acf.tipo_lupulo}`,
      aplicacao_lupulo: `${produtoCategoria.acf.aplicacao_lupulo}`,
      pais_de_origem: `${produtoCategoria.acf.pais_de_origem}`,
      alphas: `${produtoCategoria.acf.alphas}`,
      oleos: `${produtoCategoria.acf.oleos}`,
      embalagem: `${produtoCategoria.acf.embalagem}`,
      tipo_de_fermentacao: `${produtoCategoria.acf.tipo_de_fermentacao}`,
      descricao: `${produtoCategoria.acf.descricao}`,
      foto: `${produtoCategoria.acf.foto}`,
      link: `${produtoCategoria.link}`,
      laboratorio: `${produtoCategoria.acf.laboratorio}`,
    };

    createCardType(divName, produtoCategoriaOBJ);
  });
};
