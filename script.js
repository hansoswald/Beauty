const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function orderWhatsApp(name, price, image) {
  const phoneNumber = "255700000000";

  const message = `
Hello 👋

I'm interested in this product:

🛍 Product: ${name}
💰 Price: ${price}

📸 Image: ${image}

I would like more information about:
• Availability
• Colors / Variants
• Delivery options

Thank you 😊
  `;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

let testimonialIndex = 0;
const testimonialTrack = document.getElementById("testimonialTrack");
const totalTestimonials = testimonialTrack.children.length;

function showTestimonial(index) {
  testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex =
    (testimonialIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(testimonialIndex);
}

// Auto slide every 6 seconds
setInterval(nextTestimonial, 6000);

