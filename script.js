const image = document.querySelector(".image");
let numberOfClicks = 0;

image.addEventListener("dblclick", (e) => {
  console.log(e);
  const div = document.createElement("div");
  div.className = "heart fas fa-heart";
  image.appendChild(div);
  div.style.top = `${e.offsetY}px`;
  div.style.left = `${e.offsetX}px`;
  let i = 1;
  setTimeout(() => {
    div.remove();
  }, 400);
});
