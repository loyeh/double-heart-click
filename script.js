const image = document.querySelector(".image");
let numberOfClicks = 0;
let i = 0;
let LastClick = 0;

function heart(e) {
  const div = document.createElement("div");
  div.className = "heart fas fa-heart";
  image.appendChild(div);
  div.style.top = `${e.offsetY}px`;
  div.style.left = `${e.offsetX}px`;
  i++;
  document.querySelector(".like").querySelector("span").textContent = i;
  setTimeout(() => {
    div.remove();
  }, 400);
}

//adding heart on double click event
// image.addEventListener("dblclick", (e) => {
//   // console.log(e);
//   heart(e);
// });

//adding heart on tow clicks event
image.addEventListener("click", (e) => {
  let timeNow = new Date().getTime();
  if (timeNow - LastClick < 500) {
    heart(e);
  }
  LastClick = timeNow;
});
