// Java Script for the Journey website
const hero = document.getElementById("hero_section");
const journey = document.getElementById("journey_section");

const journeyBtn = document.getElementById("my_journey_btn");

journeyBtn.addEventListener("click", showingJourneySection);

function showingJourneySection() {
  journey.classList.remove("display");
  hero.classList.add("display");
}
