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
const gallery = document.querySelector(".project-gallery .grid");
let modalStatus = false;

for (let i = 1; i <= 33; i++) {
  const div = document.createElement("div");
  div.style.backgroundImage = `url(assets/img/gallery/${i}.jpg)`;
  div.addEventListener("click", () => {
    modal.classList.add("open");
    modalContent.innerHTML = `<img src="assets/img/gallery/${i}.jpg" alt="Modal Image" />`;
  });
  gallery.append(div);
}

modal.addEventListener("click", (e) => {
  modal.classList.remove("open");
});
