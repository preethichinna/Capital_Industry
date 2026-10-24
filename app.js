const products = [
  {
    id: "petroleum-tankers",
    name: "Petroleum Tankers",
    description: "Petroleum tanker manufacturing for transport applications. Contact us to discuss your intended use and requirements.",
    image: "capital-industries-petroleum-tanker.jpg",
    alt: "Petroleum tanker featured in the supplied Capital Industries brochure",
    approval: "PESO Approved — as identified for the petroleum tanker product in the brochure."
  },
  {
    id: "underground-storage-tanks",
    name: "Underground Storage Tanks",
    description: "Underground storage tank fabrication. Share your application and project needs with our team.",
    image: "capital-industries-underground-storage-tank.jpg",
    alt: "Underground storage tank product image from the Capital Industries brochure"
  },
  {
    id: "shipping-containers",
    name: "Shipping Containers",
    description: "Container fabrication for industrial and transport applications. Enquire to discuss your requirement.",
    image: "capital-industries-shipping-container.png",
    alt: "Shipping container product image from the Capital Industries brochure"
  },
  {
    id: "water-tanks",
    name: "Water Tanks",
    description: "Water tank manufacturing for customer requirements. Get in touch to discuss an application.",
    image: "capital-industries-water-tank.png",
    alt: "Water tanker vehicle featured in the Capital Industries brochure"
  },
  {
    id: "trailers",
    name: "Trailers",
    description: "Trailer manufacturing for industrial and road transport needs. Share your project details to enquire.",
    image: "capital-industries-trailer.jpg",
    alt: "Trailer product image from the Capital Industries brochure"
  },
  {
    id: "lorry-cabins",
    name: "Lorry Cabins",
    description: "Lorry cabin and automobile body manufacturing. Contact us to discuss your vehicle body requirement.",
    image: "capital-industries-lorry-cabin.jpg",
    alt: "Lorry cabin product image from the Capital Industries brochure"
  },
  {
    id: "fabrication-machines",
    name: "Shearing & Press Brake Machine Works",
    description: "Shearing and press brake machine works for fabrication requirements. Enquire about your project.",
    image: "capital-industries-press-brake.jpg",
    alt: "Press brake machine product image from the Capital Industries brochure"
  },
  {
    id: "mobile-dispensers",
    name: "Mobile Dispensers",
    description: "Mobile dispenser manufacturing for customer applications. Tell us about your intended use.",
    image: "capital-industries-mobile-dispenser.jpg",
    alt: "Mobile dispenser vehicle pictured in the Capital Industries brochure"
  }
];

const featureItems = [
  ["High Quality Standard", "A focus on quality in the products and work delivered.", "quality"],
  ["Experienced Labour and Technician", "Skilled labour and technicians contribute to fabrication work.", "people"],
  ["Advanced Technology", "Technology supports the company’s engineering and manufacturing work.", "technology"],
  ["Stringent Testing", "Testing is part of the approach to product quality and reliability.", "testing"],
  ["Customized Options", "Discuss options suited to your product and project requirements.", "custom"],
  ["Durability and Safety", "Durability and safety are considered in manufacturing.", "safety"],
  ["On-time Delivery", "A commitment to timely delivery for customer requirements.", "delivery"],
  ["End-to-End Service", "Support across the product enquiry and manufacturing journey.", "service"]
];

const galleryItems = [
  { title: "Petroleum tanker", image: products[0].image, alt: products[0].alt },
  { title: "Underground storage tank", image: products[1].image, alt: products[1].alt },
  { title: "Shipping container", image: products[2].image, alt: products[2].alt },
  { title: "Lorry cabins", image: products[5].image, alt: products[5].alt },
  { title: "Water tanker", image: products[3].image, alt: products[3].alt },
  { title: "Trailers", image: products[4].image, alt: products[4].alt },
  { title: "Press brake machine works", image: products[6].image, alt: products[6].alt },
  { title: "Mobile dispenser", image: products[7].image, alt: products[7].alt },
  { title: "Capital Industries facility", image: "assets/images/about/capital-industries-facility.jpg", alt: "Capital Industries facility pictured in the supplied brochure" }
];

const iconPaths = {
  quality: '<path d="m24 4 5 3 6-.3 2.8 5.3 5.2 3-.9 6 2.9 5-4.1 4.4-.6 6-5.8 1.7L31 43l-5.9-1.2L20 45l-4.3-4.2-6-.4-1.8-5.8L3 31.8l1.2-5.9L1.5 21l4.2-4.3.4-6 5.8-1.8L14.2 3l5.9 1.2L24 1.5V4Z"/><path d="m16 24 5 5 11-12"/>',
  people: '<circle cx="18" cy="16" r="6"/><path d="M7 39v-3a11 11 0 0 1 22 0v3M31 11a6 6 0 0 1 0 11M34 29a10 10 0 0 1 7 10"/>',
  technology: '<path d="M10 8h28v23H10zM15 36h18M24 31v5M16 14h16M16 20h8M16 26h12"/><circle cx="35" cy="24" r="1"/>',
  testing: '<path d="M18 5h12M21 5v12L9 37a3 3 0 0 0 2.6 4.5h24.8A3 3 0 0 0 39 37L27 17V5M15 31h18M19 25h10"/>',
  custom: '<path d="M9 8h28v32H9zM15 16h16M15 22h10M15 30h5M28 29l3 3 6-7"/>',
  safety: '<path d="M24 4 40 10v12c0 10-6.8 17.8-16 22-9.2-4.2-16-12-16-22V10l16-6Z"/><path d="m17 24 5 5 10-11"/>',
  delivery: '<path d="M4 12h25v22H4zM29 20h8l7 8v6H29z"/><circle cx="13" cy="36" r="4"/><circle cx="36" cy="36" r="4"/><path d="M34 20v8h10"/>',
  service: '<circle cx="24" cy="24" r="17"/><path d="M13 24h22M24 13v22M16 16l16 16M32 16 16 32"/>'
};

const productGrid = document.querySelector("#products-grid");
const featuresGrid = document.querySelector("#features-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const quoteForm = document.querySelector("#quote-form");
const quoteProduct = document.querySelector("#product");
const quoteStatus = document.querySelector("#form-status");
const productDialog = document.querySelector("#product-dialog");
const lightbox = document.querySelector("#lightbox");
const mobileMenu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

function renderProducts() {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card reveal">
      <button class="product-card__image" type="button" data-open-product="${product.id}" aria-label="View details for ${product.name}">
        <img src="${product.image}" alt="${product.alt}" width="960" height="540" loading="lazy">
        <span class="product-card__number">${String(index + 1).padStart(2, "0")}</span>
      </button>
      <div class="product-card__body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-card__footer">
          <button type="button" data-open-product="${product.id}">View details <span aria-hidden="true">→</span></button>
          ${product.approval ? '<span class="product-card__badge">PESO Approved*</span>' : '<span class="product-card__arrow" aria-hidden="true">↗</span>'}
        </div>
      </div>
    </article>
  `).join("");

  quoteProduct.insertAdjacentHTML("beforeend", products.map((product) => `<option value="${product.name}">${product.name}</option>`).join(""));
}

function renderFeatures() {
  featuresGrid.innerHTML = featureItems.map(([title, description, icon], index) => `
    <article class="feature-card reveal">
      <span class="feature-card__icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[icon]}</svg></span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <button class="gallery-item reveal" type="button" data-gallery-index="${index}" aria-label="View ${item.title} image">
      <img src="${item.image}" alt="${item.alt}" width="960" height="540" loading="lazy">
      <span class="gallery-item__caption">${item.title}</span>
      <span class="gallery-item__zoom" aria-hidden="true">+</span>
    </button>
  `).join("");
}

renderProducts();
renderFeatures();
renderGallery();

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not([data-observed])");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => {
    element.dataset.observed = "true";
    observer.observe(element);
  });
}

observeReveals();

const header = document.querySelector("#site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

mobileMenu.addEventListener("click", () => {
  const open = mobileMenu.getAttribute("aria-expanded") === "true";
  mobileMenu.setAttribute("aria-expanded", String(!open));
  mobileMenu.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !open);
});

function closeMobileMenu() {
  mobileMenu.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (productDialog.open) productDialog.close();
    if (lightbox.open) lightbox.close();
    closeMobileMenu();
  }
});

const sectionLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]:not(.button)')];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.classList.toggle("is-active", active);
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  document.querySelector("#product-dialog-title").textContent = product.name;
  document.querySelector("#product-dialog-description").textContent = product.description;
  document.querySelector("#product-dialog-image").src = product.image;
  document.querySelector("#product-dialog-image").alt = product.alt;
  const approval = document.querySelector("#product-dialog-approval");
  approval.textContent = product.approval || "";
  approval.hidden = !product.approval;
  const enquireLink = document.querySelector("#product-dialog-enquire");
  enquireLink.dataset.productLink = product.name;
  productDialog.showModal();
  document.body.classList.add("dialog-open");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-product]");
  if (trigger) openProduct(trigger.dataset.openProduct);
});

document.querySelector(".dialog-close").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-product-link]");
  if (!link) return;
  const productName = link.dataset.productLink;
  const option = [...quoteProduct.options].find((item) => item.value === productName);
  if (option) quoteProduct.value = productName;
  if (productDialog.open) productDialog.close();
  closeMobileMenu();
});

let activeGalleryIndex = 0;
function showGalleryImage(index) {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeGalleryIndex];
  document.querySelector("#lightbox-image").src = item.image;
  document.querySelector("#lightbox-image").alt = item.alt;
  document.querySelector("#lightbox-caption").textContent = item.title;
  document.querySelector("#lightbox-count").textContent = `${activeGalleryIndex + 1} / ${galleryItems.length}`;
}

galleryGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-gallery-index]");
  if (!trigger) return;
  showGalleryImage(Number(trigger.dataset.galleryIndex));
  lightbox.showModal();
  document.body.classList.add("dialog-open");
});

document.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox__nav--prev").addEventListener("click", () => showGalleryImage(activeGalleryIndex - 1));
document.querySelector(".lightbox__nav--next").addEventListener("click", () => showGalleryImage(activeGalleryIndex + 1));
lightbox.addEventListener("close", () => document.body.classList.remove("dialog-open"));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showGalleryImage(activeGalleryIndex - 1);
  if (event.key === "ArrowRight") showGalleryImage(activeGalleryIndex + 1);
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  quoteStatus.className = "form-status";
  quoteStatus.textContent = "";
  const fields = [...quoteForm.querySelectorAll("input, select, textarea")];
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
  const invalid = fields.filter((field) => !field.checkValidity());
  if (invalid.length) {
    invalid.forEach((field) => field.setAttribute("aria-invalid", "true"));
    quoteStatus.classList.add("is-error");
    quoteStatus.textContent = "Please check the highlighted fields and enter valid contact details.";
    invalid[0].focus();
    invalid[0].reportValidity();
    return;
  }

  const formData = new FormData(quoteForm);
  const message = [
    "Capital Industries enquiry",
    "",
    `Name: ${formData.get("fullName")}`,
    `Company: ${formData.get("companyName") || "Not provided"}`,
    `Phone: ${formData.get("phone")}`,
    `Email: ${formData.get("email")}`,
    `Product: ${formData.get("product")}`,
    `Quantity: ${formData.get("quantity") || "Not provided"}`,
    "",
    "Project requirements:",
    formData.get("requirements")
  ].join("\n");
  const subject = `Product enquiry: ${formData.get("product")}`;
  const mailto = `mailto:capitalindustries77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const submitButton = quoteForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  window.location.href = mailto;
  quoteStatus.classList.add("is-success");
  quoteStatus.textContent = "Your email app should open with a draft. Review and send it to complete your enquiry; this website has not sent your information.";
  window.setTimeout(() => { submitButton.disabled = false; }, 1800);
});

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    if (image.dataset.fallback) return;
    image.dataset.fallback = "true";
    image.src = "assets/images/image-fallback.svg";
    image.alt = "Illustrative industrial image unavailable";
  });
});

document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());
