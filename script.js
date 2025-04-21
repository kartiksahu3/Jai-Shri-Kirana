document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for nav links
    document.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Section fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    document.querySelectorAll(".section").forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  
    // Back to Top button
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Lightbox effect for gallery images
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
  
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const enlarged = document.createElement("img");
        enlarged.src = img.src;
        lightbox.innerHTML = "";
        lightbox.appendChild(enlarged);
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  });
  function sendToWhatsApp() {
    const message = document.getElementById("groceryInput").value;
    if (message.trim() === "") {
      alert("Please type your grocery list first.");
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919887266525?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  }
  