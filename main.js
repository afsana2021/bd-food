let ChangeBgBtn = document.querySelector("#change-bg");
console.log(ChangeBgBtn);

ChangeBgBtn.addEventListener("click", function () {
  console.log("Du klickade på knappen! Bra jobbat.");

  let allText = document.querySelectorAll("h1,h2,h3, p");

  allText.forEach((element) => {
    element.style.color = "white";
  });
  let allSections = document.querySelectorAll("body,header, main,footer");

  allSections.forEach((section) => {
    section.style.background = "black";
  });
});
