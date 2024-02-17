const products = [
    { name: "LUVA DE BOXE E MUAY THAI MXM - COR VERMELHO", price: 189.99, image: "luva-vermelha.webp" },
    { name: "PROTETOR BUCAL PRETO E VERMELHO", price: 57.99, image: "protetor-bucal.webp" },
    { name: "CANELEIRA DE MUAY THAI E KICKBOXING MAXIMUM CLASSIC PINK/WHITE - PAR", price: 249.99, image: "caneleira-branca.webp" },
    { name: "RAQUETE DE SOCO E CHUTE MAXIMUM - PAR", price: 309.00, image: "1.webp" },
    { name: "LUVA DE MMA MAXIMUM COMBATE - PAR", price: 199.00, image: "2.webp" },
    { name: "BASTÃO MANOPLA BOXE MAXIMUM - PAR", price: 159.00, image: "3.webp" },
    { name: "LUVA DE BOXE E MUAY THAI PROFISSIONAL COSMO ALEXANDRE - CADARÇO", price: 429.20, image: "4.webp" },
    { name: "SHORTS DE MUAY THAI MAXIMUM CAVEIRA", price: 129.00, image: "5.webp" },
    { name: "LUVA DE BOXE E MUAY THAI FEMININA MXM - COR PINK", price: 189.50, image: "6.webp" },
    { name: "BANDAGEM MAXIMUM PRETA E BRANCA - PAR", price: 39.90, image: "7.webp" },
    { name: "CANELEIRA DE MUAY THAI E KICKBOXING MAXIMUM CLASSIC BLACK - PAR", price: 259.00, image: "8.webp" },
    { name: "SACO DE PANCADA BOXE, MUAY THAI E MMA MAXIMUM PROFISSIONAL", price: 799.99, image: "10.webp" },
];

function displayProducts() {
    const container = document.getElementById("productsContainer");

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        const img = document.createElement("img");
        img.src = "../public/img/imgCatalogo/" + product.image;
        img.alt = product.name;

        const name = document.createElement("h2");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "Preço: R$" + product.price.toFixed(2);

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);

        container.appendChild(div);
    });
}

// Chama a função para exibir os produtos ao carregar a página
window.onload = displayProducts;
