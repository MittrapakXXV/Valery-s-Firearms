
const cart = [];


export const products = [
  { id: "AK12", name: "AK‑12", image: "./Images/AK12.png", price: 2400, tags: ["Assault Rifle","Automatic","Semi-Automatic","Burst","5.45mm"] },
  { id: "AN94", name: "AN‑94", image: "./Images/AN94.png", price: 2500, tags: ["Assault Rifle","Automatic","Semi-Automatic","Burst","5.45mm"] },
  { id: "ASVAL", name: "AS VAL", image: "./Images/ASVAL.webp", price: 3000, tags: ["Assault Rifle","Automatic","Semi-Automatic","9x39mm"] },
  { id: "M16A4", name: "M16A4", image: "./Images/M16A4.webp", price: 1100, tags: ["Assault Rifle","Semi-Automatic","Burst","5.56mm"] },
  { id: "FAMASF1", name: "FAMAS F1", image: "./Images/FAMASF!.webp", price: 2300, tags: ["Assault Rifle","Automatic","Semi-Automatic","5.56mm"] },
  { id: "SCARL", name: "SCAR‑L", image: "./Images/SCARL.webp", price: 2500, tags: ["Assault Rifle","Automatic","Semi-Automatic","5.56mm"] },
  { id: "AK74", name: "AK‑74", image: "./Images/AK74.webp", price: 2300, tags: ["Assault Rifle","Automatic","Semi-Automatic","5.45mm"] },
  { id: "MP5K", name: "MP5K", image: "./Images/MP5K.webp", price: 1000, tags: ["Submachine Gun","Automatic","Semi-Automatic","9mm"] },
  { id: "P90", name: "P90", image: "./Images/P90.webp", price: 1200, tags: ["Personal Defense Weapon","SMG","Automatic","Semi-Automatic","5.7x28mm"] },
  { id: "MAC10", name: "MAC‑10", image: "./Images/MAC10.webp", price: 1000, tags: ["Personal Defense Weapon","Submachine Gun","Automatic","Semi-Automatic","9mm"] },
  { id: "M3A1", name: "M3A1", image: "./Images/M3A1.webp", price: 4700, tags: ["Submachine Gun","Automatic","Semi-Automatic","9mm"] },
  { id: "M60E6", name: "M60E6", image: "./Images/M60.webp", price: 10000, tags: ["Machine Gun","Automatic","Semi-Automatic","7.62mm"] },
  { id: "MG3KWS", name: "MG3 KWS", image: "./Images/MG3KWS.webp", price: 13000, tags: ["Machine Gun","Automatic","7.62mm"] },
  { id: "RPK74", name: "RPK‑74", image: "./Images/RPK74.webp", price: 4000, tags: ["Machine Gun","Automatic","5.45mm"] },
  { id: "INTERVENTION", name: "INTERVENTION", image: "./Images/INTERVENTION.webp", price: 15000, tags: ["Sniper Rifle","Bolt-Action",".375 Cheytac"] },
  { id: "MODEL700", name: "MODEL 700", image: "./Images/R700.webp", price: 1100, tags: ["Sniper Rifle","Bolt-Action","7.62mm"] },
  { id: "FT300", name: "FT300", image: "./Images/FT300.webp", price: 9750, tags: ["Sniper Rifle","Bolt-Action","7.62mm"] },
  { id: "M4A1", name: "M4A1", image: "./Images/M4A1.webp", price: 1000, tags: ["Carbine","Automatic","5.56mm"] },
  { id: "AK105", name: "AK‑105", image: "./Images/AK105.webp", price: 2500, tags: ["Carbine","Automatic","5.45mm"] },
  { id: "HONEYBADGER", name: "HONEY BADGER", image: "./Images/Honey_Badger.webp", price: 3060, tags: ["Personal Defense Weapon","Carbine","Automatic","300 AAC Blackout"] },
  { id: "SL8", name: "SL-8", image: "./Images/SL8.webp", price: 1500, tags: ["Battle Rifle","Semi-Automatic","7.62mm"] },
  { id: "MK11", name: "MK11", image: "./Images/MK11.webp", price: 1500, tags: ["Battle Rifle","Semi-Automatic","7.62mm"] },
  { id: "SKS", name: "SKS", image: "./Images/SKS.webp", price: 1000, tags: ["Battle Rifle","Semi-Automatic","7.62x39mm"] },
  { id: "AK1276", name: "AK‑12/76", image: "./Images/AK1276.webp", price: 1200, tags: ["Shotgun","Semi-Automatic","12 Gauge"] },
  { id: "SAIGA12", name: "SAIGA‑12", image: "./Images/SAIGA12.webp", price: 3000, tags: ["Shotgun","Semi-Automatic","12 Gauge"] },
  { id: "MODEL870", name: "MODEL 870", image: "./Images/R870.webp", price: 2000, tags: ["Shotgun","Pump-Action","12 Gauge"] },
  { id: "M9", name: "M9", image: "./Images/M9.webp", price: 400, tags: ["Handgun","Semi-Automatic","9mm"] },
  { id: "G17", name: "G17", image: "./Images/G17.webp", price: 500, tags: ["Handgun","Semi-Automatic","9mm"] },
  { id: "G18C", name: "G18C", image: "./Images/G18C.webp", price: 700, tags: ["Handgun","Automatic","9mm"] },
  { id: "MP412REX", name: "MP412 REX", image: "./Images/REX.webp", price: 500, tags: ["Handgun","Double-Action Revolver",".45 ACP"] },
  { id: "MATEBA6", name: "MATEBA 6", image: "./Images/MATEBA.webp", price: 700, tags: ["Handgun","Double-Action Revolver","Semi-Automatic",".45 ACP"] },
  { id: "KS23M", name: "KS-23M", image: "./Images/KS23M.webp", price: 2000, tags: ["Shotgun","Pump-Action","12 Gauge"] }
];

let cartPopup = null;

// =====================
// Create Cart Popup
// =====================




function injectCartStyles() {
  if (document.getElementById("cart-styles")) return;

  const style = document.createElement("style");
  style.id = "cart-styles";
  style.textContent = `
    #cartPopup {
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
    }

    #cartPopup.active {
      pointer-events: all;
    }

    .cart-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.55);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    #cartPopup.active .cart-overlay {
      opacity: 1;
    }

    .cart-panel {
      position: absolute;
      top: 0;
      right: 0;
      width: 360px;
      height: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.35s ease;
      box-shadow: -10px 0 40px rgba(0,0,0,0.3);
    }

    #cartPopup.active .cart-panel {
      transform: translateX(0);
    }

    .cart-header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      font-weight: 600;
    }

    .cart-body {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .cart-footer {
      padding: 1rem;
      border-top: 1px solid #eee;
    }

    .cart-footer button {
      width: 100%;
      padding: 0.7rem;
      border: none;
      background: #111;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      border-radius: 6px;
    }

    .btn-close {
      border: none;
      background: none;
      font-size: 1.2rem;
      cursor: pointer;
    }

    .text-muted {
      color: #777;
      font-size: 0.85rem;
    }
  `;

  document.head.appendChild(style);
}

export function createCartPopup() {
  // Prevent duplicate popup
  if (cartPopup) return;

  cartPopup = document.createElement("div");
  cartPopup.id = "cartPopup";
 injectCartStyles();
  cartPopup.innerHTML = `
    <div class="cart-overlay"></div>

    <div class="cart-panel">
      <div class="cart-header">
        <h5>🛒 Shopping Cart</h5>
        <button class="btn-close" id="closeCart"></button>
      </div>

      <div class="cart-body" id="cartItems">
        <p class="text-muted text-center">Cart is empty</p>
      </div>

      <div class="cart-footer">
        <button class="btn btn-dark w-100">Checkout</button>
      </div>
    </div>
  `;

  document.body.appendChild(cartPopup);

  // Close handlers
  cartPopup.querySelector(".cart-overlay").onclick = closeCart;
  cartPopup.querySelector("#closeCart").onclick = closeCart;
}

// =====================
// Cart Actions
// =====================
export function addToCart(product) {
  cart.push(product);
  renderCart();
}

export function openCart() {
  if (!cartPopup) return;
  cartPopup.classList.add("active");
}

export function closeCart() {
  if (!cartPopup) return;
  cartPopup.classList.remove("active");
}

// =====================
// Render Cart
// =====================
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="text-muted text-center">Cart is empty</p>`;
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item d-flex justify-content-between mb-2">
      <div class="fw-semibold">${item.name}</div>
      <div class="text-muted small">${formatPrice(item.price)} USD</div>
    </div>
  `).join("");
}

// =====================
// Utils
// =====================
function formatPrice(price) {
  return new Intl.NumberFormat("en-US").format(price);
}

