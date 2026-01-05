import("./login.js");
import {products, createCartPopup, addToCart, openCart, closeCart} from "./cart.js";

createCartPopup();
const cartBtn = document.getElementById("cart-button");
cartBtn.addEventListener("click", openCart);











const tags = [
  "Rifle",
  "Assault Rifle",
  "Battle Rifle",
  "Sniper Rifle",
  "Handgun",
  "Shotgun",
  "Submachine Gun",
  "Machine Gun",
  "Carbine",
  "Personal Defense Weapon",

  "Single-Shot",
  "Automatic",
  "Semi-Automatic",
  "Burst",
  "Bolt-Action",
  "Pump-Action",
  "Lever-Action",
  "Single-Action Revolver",
  "Double-Action Revolver",

  "5.45mm",
  "5.56mm",
  "9x39mm",
  "9mm",
  "5.7x28mm",
  "300 AAC Blackout",
  "7.62mm",
  "7.62x39mm",
  ".375 Cheytac",
  ".45 ACP",
  "12 Gauge"
]






function createTag(text) {
  // if (text=="Personal Defense Weapon") {
  //   text = "PDW";
  // }
  return `
    <span class="btn btn-outline-dark btn-sm tag" data-tag="${text}">
      ${text}
    </span>
  `;
}


function createTagsWithDropdown(tags) {
  // 2 or fewer → normal tags
  if (!tags || tags.length <= 2) {
    return tags.map(createTag).join("");
  }

  // More than 2 → dropdown
  const visibleTags = tags.slice(0, 2).map(createTag).join("");

  const dropdownItems = tags
    .map(
      tag => `
        <li>
          <span class="dropdown-item tag" data-tag="${tag}">
            ${tag}
          </span>
        </li>`
    )
    .join("");

  return `
    ${visibleTags}
    <div class="dropdown">
      <button class="btn btn-outline-dark btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
        ...
      </button>
      <ul class="dropdown-menu">
        ${dropdownItems}
      </ul>
    </div>
  `;
}


function formatPrice(price) {
  return new Intl.NumberFormat("en-US").format(price);
}


function createProductCard(product) {
  const weaponTags = createTagsWithDropdown(product.tags);

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="col-lg-4 col-md-6 product-card invisible"
     data-weapon-types='${JSON.stringify(product.weaponTypes)}'
     data-actions='${JSON.stringify(product.actions)}'>

  <div class="card bg-violet text-light h-100 p-2 shadow-sm">

    <!-- Image -->
    <div class="ratio ratio-4x3 overflow-hidden rounded">
      <img src="${product.image}"
           class="img-fluid object-fit-contain border-dark"
           alt="${product.name}">
    </div>

    <!-- Title -->
    <div class="card-body text-center py-2">
      <p class="product-title fs-5 text-dark fw-bold mb-0">
        ${product.name}
      </p>
    </div>


<div class="d-flex flex-column flex-md-row align-items-start gap-3 px-2 pb-2 mt-auto">

  <!-- Tags -->
  <div class="d-flex flex-wrap gap-2 flex-grow-1">
    ${weaponTags}
  </div>

  <!-- Price + Buttons -->
  <div class="text-md-end mt-2 mt-md-0">
    <div class="fw-bold text-dark fs-5 mb-2">
      ${formatPrice(product.price)} USD
    </div>

    <div class="d-flex flex-wrap gap-2 justify-content-md-end">
      <button class="btn-c text-white bg-dark-violet btn-sm add-to-cart">
        Add to Cart
      </button>
      <button class="btn btn-dark btn-sm">
        Buy Now
      </button>
    </div>
  </div>

</div>


  </div>
</div>

  `;

    const card = wrapper.firstElementChild;

  const addBtn = card.querySelector(".add-to-cart");
  addBtn.addEventListener("click", () => {
    addToCart(product);
    
        const icon = document.createElement('span');
  icon.classList.add('flying-icon');
  icon.textContent = ''+product.name;
  document.body.appendChild(icon);


  const addRect = card.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();


  icon.style.left = addRect.left + window.scrollX + addRect.width / 2 + 'px';
  icon.style.top = addRect.top + window.scrollY + addRect.height / 2 + 'px';


  icon.getBoundingClientRect();


  const deltaX = -60 + cartRect.left + cartRect.width / 2 - (addRect.left + addRect.width / 2);
  const deltaY = -50 + cartRect.top + cartRect.height / 2 - (addRect.top + addRect.height / 2);

  icon.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;

  icon.addEventListener('transitionend', () => {
    icon.remove();
  });


  });

  return card;
}





function searchWithFilter(productslist) {
  
     productslist.forEach((product, i) => {
    const generatedCard = createProductCard(product); // ✅ pass product
    generatedCard.classList.add("invisible");

    productList.append(generatedCard);

    setTimeout(() => {
      generatedCard.classList.remove("invisible");
      generatedCard.classList.add("spin-once");

      setTimeout(() => {
        generatedCard.classList.remove("spin-once");
      }, 1700);

    }, i * 60);
  });


}








let currentFilter = [];

const productList = document.getElementById("product-list");





const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight;

  // Clamp progress between 0 → 1
  const progress = Math.min(scrollY / maxScroll, 1);

  // Calculate values
  const scale = 1 - progress * 0.3;      // 1 → 0.7
  const opacity = 1 - progress * 1.5;    // 1 → 0.4

  document.documentElement.style.setProperty(
    "--hero-scale",
    scale
  );
  document.documentElement.style.setProperty(
    "--hero-opacity",
    opacity
  );
});



const mtt = document.getElementById("mainTitle");


const spans = mtt.querySelectorAll("p");
const faders = document.querySelectorAll(".fade-in");

faders.forEach((el, i) => {
  el.style.transitionDelay = `${0.5 + i * 0.15}s`;
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded and parsed");
  spans.forEach(spani => {
    spani.classList.add("active");
  });
 faders.forEach(el => {
      el.classList.add("visible");
  });


});



 




const rainbowColors = [
            '#000000ff', // Red
            '#3b3b3bff', // Orange
            '#686868ff', // Yellow
            '#5c5c5cff', // Green
            '#353535ff', // Blue
            '#414040ff', // Indigo
            '#454545ff'  // Violet
        ];


function reloadProduct() {
  while (productList.firstChild) {
  productList.removeChild(productList.firstChild);
  }
  const filteredProducts = products.filter(product =>
  currentFilter.every(tag => product.tags.includes(tag))
  );
  searchWithFilter(filteredProducts);
}


function LoadButtons() {

  const typeContainer = document.getElementById("type-box");
  const actionContainer = document.getElementById("action-box");
  const caliberContainer = document.getElementById("caliber-box");
   setTimeout(() => {
    searchWithFilter(products);
  }, 100);

  tags.forEach((tag, i) => {
    setTimeout(() => {
      
      const filterbtn = document.createElement("li");
      filterbtn.className = "m-2 filter-box text-center mx-xl-4 mx-xxl-6 fw-bold fs-5 angled-corners";
      filterbtn.textContent = tag;
      const colorIndex = i % rainbowColors.length;
      filterbtn.style.color = rainbowColors[colorIndex];
      if (i <= 9) {
        typeContainer.appendChild(filterbtn);
      } else if (i <= 18 ) {
        actionContainer.appendChild(filterbtn);
      } else {
        caliberContainer.appendChild(filterbtn);
      }

      

        filterbtn.addEventListener("click", () => {
                  const tagid = tag;
                  if (filterbtn.classList.contains("filter-active")) {
                      filterbtn.classList.remove("filter-active")
                      currentFilter = currentFilter.filter(item => item !== tagid);
                      reloadProduct();
                  } else {
                      filterbtn.classList.add("filter-active")
                      currentFilter.push(tagid);

                      reloadProduct();
                  }
                  console.log(currentFilter);
        });

        
      // fade-in animation
      setTimeout(() => {
        filterbtn.classList.add("visible");
      }, 10);
    }, i * 50); // delay between buttons
  });
}


function LoadElements() {
  LoadButtons();
}




/* Small helpers */
function getUrlParamsObj(){
  const params = new URLSearchParams(window.location.search);
  return params;
}

/* Escape for safety when building innerHTML earlier used escapeHtml */

/* Init on page load */
document.addEventListener('DOMContentLoaded', () => {
  LoadElements();
});




