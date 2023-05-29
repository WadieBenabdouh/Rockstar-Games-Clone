//burger utilities
const menu_btn = document.querySelector("#menu-toggle");
const mobile_menu = document.querySelector(".mobile-nav");
const overlayOne = document.querySelector("body");

menu_btn.onclick = () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("in-action");
  overlayOne.classList.toggle("active");
};

//images carousel
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const img1 = document.querySelector(".img1");

const myHeading = document.querySelector(".myHeading");

btn1.addEventListener("click", () => {
  img1.style.marginLeft = "0";
  firstSlide = "Los Santos Drug Wars The Last Dose Out Now";
  myHeading.textContent = firstSlide;
});

btn2.addEventListener("click", () => {
  img1.style.marginLeft = "-20%";
  secondSlide = "The New Eclipse Blvd Garage";
  myHeading.textContent = secondSlide;
});

btn3.addEventListener("click", () => {
  img1.style.marginLeft = "-40%";
  thirdSlide = "Los Santos Drug Wars Now Available";
  myHeading.textContent = thirdSlide;
});

btn4.addEventListener("click", () => {
  img1.style.marginLeft = "-60%";
  fourthSlide = "The Criminal Enterprises Now Available";
  myHeading.textContent = fourthSlide;
});

//slider accent
const links = document.querySelectorAll("a");

function handleClick(event) {
  const clickedLink = event.target;

  links.forEach((link) => {
    if (link === clickedLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
