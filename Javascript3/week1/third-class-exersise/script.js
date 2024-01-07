const imageContainer = document.getElementById("dog-img-container");
fetchData()

setInterval(() => {
    fetchData()
}, 2000);
function fetchData() {
    imageContainer.innerHTML = ""
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((response) => {
      const imageElememt = document.createElement("img");
      imageElememt.src = response.message;
      imageContainer.appendChild(imageElememt);
    });
}
