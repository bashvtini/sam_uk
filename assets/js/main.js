// NavBar
const navbar = document.querySelector("nav");
const dropdownButton = document.querySelector("nav .dropdown-button");
const dropdownMenu = document.querySelector("nav .dropdown-menu");
const closeDropdown = document.querySelector("nav .dropdown-menu .close");
let dropdownStatus = false;

const dropdownSwitch = () => {
  dropdownMenu.classList.toggle("show");
  dropdownStatus = !dropdownStatus;

  document.querySelector("body").classList.toggle("fixed");
};

window.addEventListener("resize", (e) => {
  const width = window.innerWidth;
  if (dropdownStatus && width > 600) {
    dropdownSwitch();
  }
});

window.addEventListener("scroll", () => {
  const navHeight = navbar.offsetHeight;

  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  if (scrollTop > 100) {
    if (!navbar.classList.contains("sticky")) {
      navbar.classList.add("sticky");
      document.querySelector("body").style.paddingTop = navHeight + "px";
    }
  } else {
    navbar.classList.remove("sticky");
    document.querySelector("body").style.paddingTop = "0px";
  }
});

dropdownMenu.querySelectorAll("li").forEach((e) => {
  e.addEventListener("click", dropdownSwitch);
});

// Gallery Modal
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal .content");
const galleryPictures = document.querySelectorAll(".projects .grid img");
let modalStatus = false;

modal.addEventListener("click", (e) => {
  modal.classList.remove("open");
});

galleryPictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    modal.classList.add("open");
    modalContent.innerHTML = `<img src="${picture.getAttribute(
      "src"
    )}" alt="Modal Image" />`;
  });
});

// Reviews CArusel
const reviews = [
  {
    name: "John",
    text:
      "Very pleased with the work Agim done for me. Three bedrooms plastered and decorated very well. They were hard working, accommodating, and cleaned up after finishing. Definitely would use again. Recommended",
  },
  {
    name: "Amy",
    text:
      "The guys worked really hard, did a great job and were a pleasure to have around the house. I would definitely use Them again.",
  },
  {
    name: "Sebastian",
    text:
      "Really reliable. Turned up on time and was really friendly. Quality of the work was excellent and he was really thorough. Wouldn't hesitate to recommend him to anyone. Thanks Sebastian x",
  },
];

const cards = document.querySelector(".cards");
let current = 1;

reviews.forEach((review, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <p>${review.text}</p>
  <h4>- ${review.name}</h4>
  `;

  cards.appendChild(card);
});

setInterval(() => {
  const card = cards.firstElementChild;
  const cardWidth = card.offsetWidth;

  if (current > reviews.length - 1) {
    cards.style.transform = `translateX(0px)`;
    current = 1;
    return;
  }

  cards.style.transform = `translateX(-${cardWidth * current}px)`;

  current++;
}, 3000);
