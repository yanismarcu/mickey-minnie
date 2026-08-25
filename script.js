const pages = [...document.querySelectorAll(".page")];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dotsWrap = document.getElementById("dots");

let index = 0;

pages.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Pagina ${i + 1}`);
  dot.addEventListener("click", () => go(i));
  dotsWrap.appendChild(dot);
});

function go(i) {
  index = Math.max(0, Math.min(pages.length - 1, i));
  pages.forEach((page, n) => page.classList.toggle("is-active", n === index));
  [...dotsWrap.children].forEach((dot, n) =>
    dot.classList.toggle("is-active", n === index)
  );
  prev.disabled = index === 0;
  next.disabled = index === pages.length - 1;
}

prev.addEventListener("click", () => go(index - 1));
next.addEventListener("click", () => go(index + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") go(index + 1);
  if (event.key === "ArrowLeft") go(index - 1);
});

go(0);
