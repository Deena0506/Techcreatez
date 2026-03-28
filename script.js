document.querySelector(".order-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order submitted successfully!");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    const section = document.querySelector(targetId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const ripple = document.createElement("span");

    ripple.style.left = e.offsetX + "px";
    ripple.style.top = e.offsetY + "px";

    ripple.classList.add("ripple");
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

const text = "Digital Reality";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".hero span").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

document.querySelector(".hero span").textContent = "";
typeEffect();


// Toggle mobile menu
const menuToggle= document.getElementById("menu-toggle");
const navMenu= document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu after clicking link (mobile)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Scroll to Order
function scrollToOrder() {
  document.getElementById("order").scrollIntoView({
    behavior: "smooth"
  });
}

function openWhatsApp() {
  const phone = "+919344547363"; // your number without +
  const message = "Hi, I want to know more about your services";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
