// ============================================================================
// LÓGICA DA LOJA DE DROPSHIPPING VELO PRO
// ============================================================================

let cart = JSON.parse(localStorage.getItem("velopro_cart") || "[]");
let activeCategory = "todos";
let searchQuery = "";
let selectedVariantMap = {};

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getPixPrice(price) {
  const factor = (100 - STORE_CONFIG.pixDiscountPercent) / 100;
  return price * factor;
}

function getDiscountPercent(price, compareAt) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.round(((compareAt - price) / compareAt) * 100);
}

// ============================================================================
// RENDERIZAÇÃO DO CATÁLOGO
// ============================================================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === "todos" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border);">
        <h3 style="margin-bottom: 8px;">Nenhum equipamento encontrado</h3>
        <p style="color: var(--text-muted); margin-bottom: 16px;">Tente outro termo ou veja todas as categorias.</p>
        <button class="btn-primary" onclick="filterCategory('todos')">Mostrar Todos os Produtos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((p) => {
      const pixPrice = getPixPrice(p.price);
      const installmentVal = p.price / STORE_CONFIG.maxInstallments;
      const offPercent = getDiscountPercent(p.price, p.compareAtPrice);

      return `
        <article class="product-card">
          <div class="product-img-wrap" onclick="openProductModal('${p.id}')">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
            <span class="product-badge badge-${p.badgeType}">${p.badge}</span>
            ${offPercent > 0 ? `<span class="discount-pill">-${offPercent}% OFF</span>` : ""}
          </div>

          <div class="product-body">
            <div class="product-meta">
              <span>${p.brand}</span>
              <span class="product-rating">★ ${p.rating} (${p.reviewsCount})</span>
            </div>

            <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>

            <div class="price-block">
              <div class="old-price">De ${formatBRL(p.compareAtPrice)}</div>
              <div class="pix-price-row">
                <span class="pix-price">${formatBRL(pixPrice)}</span>
                <span class="pix-tag">no PIX (-${STORE_CONFIG.pixDiscountPercent}%)</span>
              </div>
              <div class="installments">
                ou ${formatBRL(p.price)} em até ${STORE_CONFIG.maxInstallments}x de ${formatBRL(installmentVal)}
              </div>

              <div class="card-actions">
                <button class="btn-buy-card" onclick="quickAdd('${p.id}')">
                  + Adicionar
                </button>
                <button class="btn-details" onclick="openProductModal('${p.id}')">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function filterCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === category);
  });
  renderProducts();
}

// ============================================================================
// MODAL DE DETALHES + TABELA DE MEDIDAS
// ============================================================================
function openProductModal(productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  if (!p) return;

  const currentVariant = selectedVariantMap[p.id] || p.variants[0];
  selectedVariantMap[p.id] = currentVariant;

  const pixPrice = getPixPrice(p.price);
  const installmentVal = p.price / STORE_CONFIG.maxInstallments;

  const sizeChartHTML = p.hasSizeChart
    ? `
      <div style="margin-top: 16px;">
        <strong style="font-size: 0.82rem; color: var(--text-muted); text-transform: uppercase;">📏 Tabela de Medidas Ciclismo (Padrão Brasileiro)</strong>
        <table class="size-table">
          <thead>
            <tr>
              <th>Tamanho</th>
              <th>Peso Recomendado</th>
              <th>Altura</th>
              <th>Tórax / Cintura</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>P</td><td>55 - 65 kg</td><td>1,60 - 1,68 m</td><td>88 - 94 cm</td></tr>
            <tr><td>M</td><td>65 - 75 kg</td><td>1,68 - 1,75 m</td><td>95 - 101 cm</td></tr>
            <tr><td>G</td><td>75 - 85 kg</td><td>1,75 - 1,82 m</td><td>102 - 108 cm</td></tr>
            <tr><td>GG</td><td>85 - 95 kg</td><td>1,82 - 1,88 m</td><td>109 - 115 cm</td></tr>
            <tr><td>3G</td><td>95 - 108 kg</td><td>1,85 - 1,95 m</td><td>116 - 124 cm</td></tr>
          </tbody>
        </table>
      </div>
    `
    : "";

  const content = document.getElementById("productModalContent");
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal('productModal')">✕</button>
    <div class="product-modal-grid">
      <div>
        <img src="${p.image}" alt="${p.name}" />
        ${sizeChartHTML}
      </div>
      <div>
        <span style="font-size: 0.78rem; color: var(--primary); font-weight: 800; text-transform: uppercase;">${p.categoryLabel} • ${p.brand}</span>
        <h2 style="font-size: 1.4rem; margin: 6px 0 8px;">${p.name}</h2>
        <div style="font-size: 0.85rem; color: #ffb400; margin-bottom: 14px;">
          ★★★★★ ${p.rating} (${p.reviewsCount} avaliações verificadas de ciclistas)
        </div>

        <div style="background: var(--bg-elevated); padding: 14px; border-radius: 10px; border: 1px solid var(--border); margin-bottom: 16px;">
          <div class="old-price">De ${formatBRL(p.compareAtPrice)} por:</div>
          <div class="pix-price-row">
            <span class="pix-price">${formatBRL(pixPrice)}</span>
            <span class="pix-tag">no PIX (${STORE_CONFIG.pixDiscountPercent}% OFF)</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">
            ou ${formatBRL(p.price)} em até ${STORE_CONFIG.maxInstallments}x de ${formatBRL(installmentVal)}
          </div>
        </div>

        <div class="variant-selector">
          <label>${p.variantsLabel}:</label>
          <div class="variant-pills">
            ${p.variants
              .map(
                (v) => `
              <button type="button" class="variant-pill ${v === currentVariant ? "active" : ""}" onclick="selectVariant('${p.id}', '${v}')">
                ${v}
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <strong style="font-size: 0.84rem; display: block; margin-top: 12px;">Especificações Técnicas:</strong>
        <ul class="specs-list">
          ${p.specs.map((s) => `<li>${s}</li>`).join("")}
        </ul>

        <div style="display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 18px;">
          <button class="btn-primary" onclick="addFromModal('${p.id}')">
            🛒 Comprar Agora (${currentVariant})
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("productModal").classList.add("open");
}

function selectVariant(productId, variant) {
  selectedVariantMap[productId] = variant;
  openProductModal(productId);
}

function addFromModal(productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  const variant = selectedVariantMap[productId] || p.variants[0];
  addToCart(productId, variant);
  closeModal("productModal");
  openCartDrawer();
}

function quickAdd(productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  if (p.hasSizeChart || p.variants.length > 1) {
    openProductModal(productId);
    return;
  }
  addToCart(productId, p.variants[0]);
  openCartDrawer();
}

// ============================================================================
// CARRINHO DE COMPRAS
// ============================================================================
function addToCart(productId, variant) {
  const p = PRODUCTS.find((item) => item.id === productId);
  if (!p) return;

  const existing = cart.find((item) => item.id === productId && item.variant === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      variant: variant,
      checkoutUrl: p.checkoutUrl,
      qty: 1
    });
  }
  saveAndRenderCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveAndRenderCart();
}

function saveAndRenderCart() {
  localStorage.setItem("velopro_cart", JSON.stringify(cart));
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cartCount").textContent = totalCount;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const pixTotal = getPixPrice(subtotal);

  // Barra de frete grátis
  const minFree = STORE_CONFIG.freeShippingMin;
  const pct = Math.min(100, (subtotal / minFree) * 100);
  document.getElementById("shippingFill").style.width = `${pct}%`;

  const shippingMsg = document.getElementById("shippingMsg");
  const shippingValEl = document.getElementById("cartShipping");
  if (subtotal >= minFree || subtotal === 0) {
    shippingMsg.innerHTML = subtotal > 0
      ? `🎉 Parabéns! Você ganhou <strong>FRETE GRÁTIS COM RASTREIO</strong>!`
      : `Frete Grátis em compras acima de ${formatBRL(minFree)}`;
    shippingValEl.textContent = "Grátis";
  } else {
    const missing = minFree - subtotal;
    shippingMsg.innerHTML = `Faltam <strong>${formatBRL(missing)}</strong> para ganhar <strong>FRETE GRÁTIS</strong>!`;
    shippingValEl.textContent = "R$ 19,90";
  }

  const container = document.getElementById("cartItemsContainer");
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 8px;">🚴</p>
        <p>Seu carrinho está vazio.</p>
      </div>
    `;
  } else {
    container.innerHTML = cart
      .map(
        (item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-variant">Opção: ${item.variant}</div>
          <div style="font-weight: 800; color: var(--accent-green); font-size: 0.9rem; margin-top: 2px;">
            ${formatBRL(getPixPrice(item.price * item.qty))} <span style="font-size:0.72rem; color:var(--text-muted); font-weight:400;">no PIX</span>
          </div>
          <div class="qty-controls">
            <button onclick="changeQty(${idx}, -1)">−</button>
            <span style="font-size: 0.84rem; font-weight: 700;">${item.qty}</span>
            <button onclick="changeQty(${idx}, 1)">+</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  document.getElementById("cartSubtotal").textContent = formatBRL(subtotal);
  document.getElementById("cartPixTotal").textContent = formatBRL(pixTotal);
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

// ============================================================================
// CHECKOUT & PAINEL LOJISTA
// ============================================================================
function handleCheckoutClick() {
  if (cart.length === 0) {
    alert("Adicione pelo menos 1 produto ao carrinho antes de finalizar!");
    return;
  }

  // Se houver 1 produto com link direto de checkout configurado (ex: Yampi/MercadoPago), redireciona
  if (cart.length === 1 && cart[0].checkoutUrl && cart[0].checkoutUrl.trim() !== "") {
    window.open(cart[0].checkoutUrl, "_blank");
    return;
  }

  closeCartDrawer();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const pixTotal = getPixPrice(subtotal);

  document.getElementById("pixKeyDisplay").textContent = STORE_CONFIG.pixKey;
  document.getElementById("checkoutModalTotal").textContent = formatBRL(pixTotal);
  document.getElementById("checkoutModal").classList.add("open");
}

function renderAdminSuppliers() {
  const container = document.getElementById("adminSuppliersTable");
  container.innerHTML = `
    <table class="size-table" style="text-align: left;">
      <thead>
        <tr>
          <th>Produto na Loja</th>
          <th>Custo Médio Fornecedor</th>
          <th>Preço Venda (Site)</th>
          <th>Lucro Bruto Estimado</th>
          <th>Onde achar no AliExpress / CJ</th>
        </tr>
      </thead>
      <tbody>
        ${PRODUCTS.map((p) => {
          const estimatedCost = p.price * 0.42;
          const profit = getPixPrice(p.price) - estimatedCost;
          return `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td>~${formatBRL(estimatedCost)}</td>
              <td style="color: var(--accent-green); font-weight: 700;">${formatBRL(p.price)}</td>
              <td style="color: #00e676; font-weight: 800;">+${formatBRL(profit)} / venda</td>
              <td><code>${p.supplierReference}</code></td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
    <div style="margin-top: 16px; background: var(--bg-elevated); padding: 14px; border-radius: 10px; border: 1px solid var(--border); font-size: 0.84rem;">
      <strong>💡 Como personalizar sua loja:</strong> Basta abrir o arquivo <code>products.js</code> para alterar seu número de WhatsApp, Chave PIX, preços ou colar o link de pagamento do Mercado Pago / Yampi em cada produto!
    </div>
  `;
}

// ============================================================================
// INICIALIZAÇÃO DE EVENTOS
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  saveAndRenderCart();
  renderAdminSuppliers();

  // Tabs de categoria
  document.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => filterCategory(btn.dataset.cat));
  });

  // Busca em tempo real
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Abrir/Fechar Carrinho
  document.getElementById("btnOpenCart").addEventListener("click", openCartDrawer);
  document.getElementById("btnCloseCart").addEventListener("click", closeCartDrawer);
  document.getElementById("btnCheckout").addEventListener("click", handleCheckoutClick);

  // Abrir Rastreio e Painel
  document.getElementById("btnOpenTracker").addEventListener("click", () => {
    document.getElementById("trackerModal").classList.add("open");
  });
  document.getElementById("footerTrackLink").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("trackerModal").classList.add("open");
  });
  document.getElementById("btnOpenAdmin").addEventListener("click", () => {
    document.getElementById("adminModal").classList.add("open");
  });

  // Consulta de Rastreamento
  document.getElementById("btnSearchTrack").addEventListener("click", () => {
    const code = document.getElementById("trackCodeInput").value.trim().toUpperCase();
    const res = document.getElementById("trackResult");
    if (code.length < 8) {
      res.innerHTML = `<p style="color: #ff5500; font-size: 0.85rem;">Digite um código válido (ex: NM123456789BR).</p>`;
      return;
    }
    res.innerHTML = `
      <div style="background: var(--bg-elevated); padding: 14px; border-radius: 10px; border: 1px solid var(--border); font-size: 0.85rem;">
        <p style="color: var(--accent-green); font-weight: 700; margin-bottom: 6px;">✓ Código ${code} localizado</p>
        <p style="color: var(--text-muted); margin-bottom: 10px;">Status: <strong>Em trânsito para unidade dos Correios da sua cidade</strong>.</p>
        <a href="https://global.cainiao.com/detail.htm?mailNoList=${code}" target="_blank" class="btn-ghost" style="text-decoration: none; width: 100%; justify-content: center;">
          Ver Mapa Detalhado Internacional ↗
        </a>
      </div>
    `;
  });

  // Envio do Checkout para WhatsApp
  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const cep = document.getElementById("custCep").value;
    const address = document.getElementById("custAddress").value;
    const payment = document.getElementById("custPayment").value;

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const pixTotal = getPixPrice(subtotal);

    const itemsList = cart
      .map((i) => `• ${i.qty}x ${i.name} (${i.variant}) - ${formatBRL(i.price * i.qty)}`)
      .join("\n");

    const message =
      `🚴 *NOVO PEDIDO - ${STORE_CONFIG.storeName}*\n\n` +
      `*Itens do Pedido:*\n${itemsList}\n\n` +
      `*Valor no Cartão:* ${formatBRL(subtotal)}\n` +
      `*Valor com Desconto PIX (-10%):* ${formatBRL(pixTotal)}\n` +
      `*Pagamento Escolhido:* ${payment}\n\n` +
      `*Dados de Entrega:*\n` +
      `Nome: ${name}\n` +
      `WhatsApp: ${phone}\n` +
      `CEP: ${cep}\n` +
      `Endereço: ${address}`;

    const waUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  });
});
