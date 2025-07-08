const imoveis = [
  {
    id: 1,
    titulo: "Casa moderna no centro",
    valor: 250000,
    condominio: "sim",
    tipo: "casa",
    imagem: "assets/casas/casa1.jpg",
    destaque: true,
    whatsapp: "559999999999"
  },
  {
    id: 2,
    titulo: "Apartamento com vista",
    valor: 180000,
    condominio: "sim",
    tipo: "apto",
    imagem: "assets/casas/apto1.jpg",
    destaque: false,
    whatsapp: "559999999999"
  },
  // +8 imóveis
];

function renderCatalogo() {
  const lista = document.getElementById("listaImoveis");
  lista.innerHTML = "";
  imoveis.forEach(imovel => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => abrirDetalhes(imovel);
    card.innerHTML = `
      <img src="${imovel.imagem}" />
      <div class="info">
        <h4>${imovel.titulo}</h4>
        <p>R$ ${imovel.valor.toLocaleString()}</p>
      </div>
    `;
    lista.appendChild(card);
  });
}

function renderDestaques() {
  const carrossel = document.getElementById("carrosselDestaque");
  const destaques = imoveis.filter(i => i.destaque).slice(0, 10);
  destaques.forEach(imovel => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `<img src="${imovel.imagem}" style="width:100%; height:150px; object-fit:cover;" />`;
    carrossel.appendChild(slide);
  });
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
    }
  });
}

function abrirDetalhes(imovel) {
  const html = `
    <div style="padding:1rem">
      <h2>${imovel.titulo}</h2>
      <img src="${imovel.imagem}" style="width:100%; border-radius:10px;" />
      <p>Valor: R$ ${imovel.valor.toLocaleString()}</p>
      <p>Tipo: ${imovel.tipo}</p>
      <p>Condomínio: ${imovel.condominio}</p>
      <a href="https://wa.me/${imovel.whatsapp}" target="_blank">Entrar em contato</a>
    </div>
  `;
  document.body.innerHTML = html;
}

renderCatalogo();
renderDestaques();
