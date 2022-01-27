const commander = {
  id: 1,
  pJob: "Commander",
  pName: "Douglas Hurley",
  pImage: "./assets/crew/image-douglas-hurley.webp",
  pDesc:
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
};

const engineer = {
  id: 2,
  pJob: "Flight Engineer",
  pName: "Anousheh Ansari",
  pImage: "./assets/crew/image-anousheh-ansari.webp",
  pDesc:
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to  fly to the ISS, and the first Iranian in space."
};

const pilot = {
  id: 2,
  pJob: "Pilot",
  pName: "Victor Glover",
  pImage: "./assets/crew/image-victor-glover.webp",
  pDesc:
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
};

const specialist = {
  id: 2,
  pJob: "Mission Specialist",
  pName: "Mark Shuttleworth",
  pImage: "./assets/crew/image-mark-shuttleworth.webp",
  pDesc:
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
};

const carouselBtns = document.querySelectorAll(".ppp2");
const job = document.querySelector(".p-job");
const ppname = document.querySelector(".p-name");
const desc = document.querySelector(".p-desc");
const image = document.querySelector(".p-image img");

carouselBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const eName = e.currentTarget.classList;

    if (eName.contains("commander")) {
      job.textContent = commander.pJob;
      ppname.textContent = commander.pName;
      image.src = commander.pImage;
      desc.textContent = commander.pDesc;
    } else if (eName.contains("engineer")) {
      job.textContent = engineer.pJob;
      ppname.textContent = engineer.pName;
      image.src = engineer.pImage;
      desc.textContent = engineer.pDesc;
    } else if (eName.contains("pilot")) {
      job.textContent = pilot.pJob;
      ppname.textContent = pilot.pName;
      image.src = pilot.pImage;
      desc.textContent = pilot.pDesc;
    } else if (eName.contains("specialist")) {
      job.textContent = specialist.pJob;
      ppname.textContent = specialist.pName;
      image.src = specialist.pImage;
      desc.textContent = specialist.pDesc;
    }
  });
});
