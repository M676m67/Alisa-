const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});
