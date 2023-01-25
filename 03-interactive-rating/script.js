const divThanks = document.getElementById("thanks");
const divFeedback = document.getElementById("feedback");
const spanRating = document.getElementById("selected-rating");

function fbSubmit() {
  const rating = document.querySelector("input[name=radio]:checked").value;
  divThanks.classList.remove("hide");
  divFeedback.classList.add("hide");
  spanRating.innerText = rating;
}
