// moon, mars, europa, titan - changed planet system
const moon = {
  id: 1,
  image: "./assets/destination/image-moon.webp",
  title: "Moon",
  text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  time: "3 days"
};
const mars = {
  id: 2,
  image: "./assets/destination/image-mars.webp",
  title: "Mars",
  text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  distance: "225 mil. km",
  time: "9 months"
};
const europa = {
  id: 3,
  image: "./assets/destination/image-europa.webp",
  title: "Europa",
  text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628 mil. km",
  time: "3 years"
};
const titan = {
  id: 3,
  image: "./assets/destination/image-titan.webp",
  title: "Titan",
  text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 bil. km",
  time: "7 years"
};

const planetBtns = document.querySelectorAll(".planet-link-content"); // planet button
const planetImage = document.querySelector(".moon-destination-image img"); // planet img
const planetTitle = document.querySelector(".planet-title-name"); // planet title
const planetText = document.querySelector(".planet-description"); // planet text
const planetDistance = document.querySelector(".avg-distance p"); // planet distance
const planetTime = document.querySelector(".travel-time p"); // planet time travel

planetBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const planetName = e.currentTarget.classList;
    const id = e.target.dataset.id;

    if (planetName.contains("moon")) {
      planetImage.src = moon.image;
      planetTitle.textContent = moon.title;
      planetText.textContent = moon.text;
      planetDistance.textContent = moon.distance;
      planetTime.textContent = moon.time;
    } else if (planetName.contains("mars")) {
      planetImage.src = mars.image;
      planetTitle.textContent = mars.title;
      planetText.textContent = mars.text;
      planetDistance.textContent = mars.distance;
      planetTime.textContent = mars.time;
    } else if (planetName.contains("europa")) {
      planetImage.src = europa.image;
      planetTitle.textContent = europa.title;
      planetText.textContent = europa.text;
      planetDistance.textContent = europa.distance;
      planetTime.textContent = europa.time;
    } else if (planetName.contains("titan")) {
      planetImage.src = titan.image;
      planetTitle.textContent = titan.title;
      planetText.textContent = titan.text;
      planetDistance.textContent = titan.distance;
      planetTime.textContent = titan.time;
    }
  });
});
