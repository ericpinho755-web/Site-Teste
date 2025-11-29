window.onload = function () {
    const container = document.getElementById("produtos");

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if (produtos.length === 0) {
        container.innerHTML = "<p>Nenhum produto cadastrado ainda.</p>";
        return;
    }

    produtos.forEach(p => {
        const html = `
            <div class="product card-animate">
                <img src="${p.imagem}">
                <h2>${p.nome}</h2>
                <p class="price">R$${p.preco}</p>
                <button onclick="window.location.href='${p.link}'">Comprar Agora</button>
            </div>
        `;
        container.innerHTML += html;
    });
};
