document.addEventListener("DOMContentLoaded", () => {
// 1. Mobile navigation menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {
menuIcon.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const links = navLinks.querySelectorAll("a");
links.forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});
}

// 2. Highlighting navbar link based on visible section (Active Scrollspy)
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

const observerOptions = {
root: null,
rootMargin: "-25% 0px -45% 0px",
threshold: 0
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const currentId = entry.target.getAttribute("id");
navItems.forEach(link => {
if (link.getAttribute("href") === `#${currentId}`) {
link.classList.add("active");
} else {
link.classList.remove("active");
}
});
}
});
}, observerOptions);

sections.forEach(section => observer.observe(section));

// 3. Form submission feedback mock
const contactForm = document.getElementById("contact-form");
if (contactForm) {
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("Thank you for reaching out! Julia will get back to you soon.");
contactForm.reset();
});
}
});