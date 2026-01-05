import("../JS/login.js");
import {products, createCartPopup, addToCart, openCart, closeCart} from "../JS/cart.js";

createCartPopup();
const cartBtn = document.getElementById("cart-button");
cartBtn.addEventListener("click", openCart);




const mtt = document.getElementById("maintitle");


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








const heroes = document.querySelectorAll(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  heroes.forEach((hero, index) => {
    const heroOffsetTop = hero.offsetTop;
    const distance = scrollY - heroOffsetTop + windowHeight;
  
    
    const progress = Math.min(Math.max(distance / windowHeight, 0), 1);

  
    const scale = 0.7 + progress * 0.3;
    const opacity = 0.4 + progress * 0.6;

    
    hero.style.setProperty("--hero-scale", scale);
    hero.style.setProperty("--hero-opacity", opacity);
    
  });
});


const slider = document.querySelector('.member-slider');
const nextBtn = document.querySelector('.slide-btn.next');
const prevBtn = document.querySelector('.slide-btn.prev');

const scrollAmount = 220;

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
