import("./login.js");
import {products, createCartPopup, addToCart, openCart, closeCart} from "./cart.js";

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

    
    document.style.setProperty("--hero-scale", scale);
    document.style.setProperty("--hero-opacity", opacity);
    
  });
});







const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); 
      }
      
    });
     faders.forEach(el => {
      el.classList.add("visible");
    });

  },
  {
    threshold: 0.6 

    
  }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
