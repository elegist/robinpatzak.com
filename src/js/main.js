const variableHeroTextElement = document.getElementById("variable-hero-text");
const blinkingCursorElement = document.getElementById("blinking-cursor");

const heroTexts = ["Frontend", "Backend", "Games", "Mobile Apps"];

let index = 0;
let isDeleting = false;
let text = "";

const typingDuration = 150;
const deletingDuration = typingDuration / 2;

const blinkingDuration = 600;
const waitDuration = 1600;

function typewriter() {
  const currentText = heroTexts[index];
  if (isDeleting) {
    text = currentText.substring(0, text.length - 1);
  } else {
    text = currentText.substring(0, text.length + 1);
  }
  variableHeroTextElement.textContent = text;

  let timeDelay = isDeleting ? deletingDuration : typingDuration;

  if (!isDeleting && text === currentText) {
    isDeleting = true;
    timeDelay += waitDuration;
  } else if (isDeleting && text === "") {
    isDeleting = false;
    timeDelay += waitDuration / 2;
    index = (index + 1) % heroTexts.length;
  }

  setTimeout(typewriter, timeDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  typewriter();
  setInterval(() => {
    blinkingCursorElement.style.opacity =
      blinkingCursorElement.style.opacity === "0" ? "1" : "0";
  }, blinkingDuration);
});

let projects = [];

await fetch("../data/projects.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((project) => {
      projects.push(project);
    });
  });

const projectsSectionElement = document.getElementById("project-section");
// const p = document.createElement("p");
// p.innerHTML = "test";
// projectsSectionElement.append(p);

projects.forEach((project) => {
  const projectContainerElement = document.createElement("div");
  projectContainerElement.className = "project-container";
  projectsSectionElement.append(projectContainerElement);

  const projectImageElement = document.createElement("img");
  projectImageElement.className = "project-image";
  projectImageElement.src = project.projectImage;
  projectContainerElement.append(projectImageElement);

  const projectTitleElement = document.createElement("h3");
  projectTitleElement.className = "project-title";
  projectTitleElement.innerHTML = project.projectTitle;
  projectContainerElement.append(projectTitleElement);

  const projectCategoryElement = document.createElement("p");
  projectCategoryElement.className = "project-category";
  projectCategoryElement.innerHTML = project.projectCategory;
  projectContainerElement.append(projectCategoryElement);

  const projectDescriptionElement = document.createElement("p");
  projectDescriptionElement.className = "project-description";
  projectDescriptionElement.innerHTML = project.projectDescription;
  projectContainerElement.append(projectDescriptionElement);
});
