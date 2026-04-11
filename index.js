// Java Script for the Journey website
const hero = document.getElementById("hero_section");
const journey = document.getElementById("journey_section");
const aboutMe = document.getElementById("about_me");

const journeyBtn = document.getElementById("my_journey_btn");
const aboutMeBtn = document.getElementById("about_me_btn");

journeyBtn.addEventListener("click", showingJourneySection);

function showingJourneySection() {
  journey.classList.remove("display");
  hero.classList.add("display");
}

aboutMeBtn.addEventListener("click", (event) => {
  console.log("hello Afghanistan");
  event.preventDefault();
  showingAboutMeSection();
});
function showingAboutMeSection() {
  if (!journey.classList.contains("display")) {
    journey.classList.add("display");
  }
  hero.classList.add("display");
  aboutMe.classList.remove("display");
}
