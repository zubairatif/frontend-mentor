const shareBanner = document.querySelector(".article-info");
const shareText = document.querySelector(".share");
const authorAvatar = document.querySelector(".avatar");
const authorMeta = document.querySelector(".author-info-text");

function hello() {
  shareBanner.classList.toggle("bg-dark");
  if (!shareBanner.classList.contains("bg-dark")) {
    shareText.style.display = "none";
    authorMeta.classList.toggle("hidden");
    authorAvatar.classList.toggle("hidden");
  } else {
    shareText.style.display = "block";
    authorMeta.classList.toggle("hidden");
    authorAvatar.classList.toggle("hidden");
    shareBanner.style.display = "flex";
    shareBanner.style.justifyContent = "space-between";
  }
}
