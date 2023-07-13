const d = document;
const likeBtn = d.querySelector("#likeBtn");
const bookmarkBtn = d.querySelector("#bookmarkBtn");
const likeCounter = d.querySelector("#likeCounter");
const userImage = d.querySelector("#userImage");
const likeCount = 0;

likeBtn.addEventListener("click", (e) => {
  console.log(e.target);
  likeHandler(e.target);
});
userImage.addEventListener("dblclick", (e) => {
  console.log(e.target);
  likeHandler(e.target);
});

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("bg-blue-400");
});

function likeHandler(element) {
  likeBtn.classList.toggle("bg-red-600");

  if (likeBtn.classList.contains("bg-red-600")) {
    likeCounter.innerHTML = `${likeCount + 1} likes`;
  } else {
    likeCounter.innerHTML = `${likeCount} likes`;
  }
}
