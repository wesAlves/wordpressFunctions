const toggleHidden = (categoria, slug) => {
  // const hideShowElement = document.getElementById(`containerProdutos_${slug}`);
  const IsCheckedLabel = document.getElementsByName("categoriaMenu");

  const containerCategory = `containerProdutos_${slug}`.replace(
    `containerProdutos_`,
    ""
  );

  // if (hideShowElement !== null) {
  for (let i = 0; i < IsCheckedLabel.length; i++) {
    // console.log(IsCheckedLabel[i].value, IsCheckedLabel[i].checked);
    // console.log(IsCheckedLabel[i].checked && containerCategory === slug);
    // console.log(IsCheckedLabel[i].value);
    // console.log(containerCategory);

    // switch (slug) {
    //   case "destaque":

    const maltes = document.getElementById(`containerProdutos_maltes`);
    if (maltes !== null) {
      maltes.classList.add("hidden");
    }

    const lupulos = document.getElementById(`containerProdutos_lupulos`);
    if (lupulos !== null) {
      lupulos.classList.add("hidden");
    }

    const insumos_diversos = document.getElementById(
      `containerProdutos_insumos_diversos`
    );
    if (insumos_diversos !== null) {
      insumos_diversos.classList.add("hidden");
    }

    const leveduras = document.getElementById(`containerProdutos_leveduras`);
    if (leveduras !== null) {
      leveduras.classList.add("hidden");
    }

    const equipamentos = document.getElementById(
      "containerProdutos_equipamentos"
    );
    if (equipamentos !== null) {
      equipamentos.classList.add("hidden");
    }

    const destaque = document.getElementById(`containerProdutos_destaque`);
    if (destaque !== null) {
      destaque.classList.add("hidden");
    }

    const servicos = document.getElementById(`containerProdutos_servicos`);
    if (servicos !== null) {
      servicos.classList.add("hidden");
    }

    document
      .getElementById(`containerProdutos_${slug}`)
      .classList.remove("hidden");
    // break;
    // }
    // }
  }
};
