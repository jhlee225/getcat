const root = document.querySelector(".root");
let newCat = document.createElement("div");
newCat.className = "cat";
const i = 0
let image = new Image();
fetch(`https://cataas.com/cat?tags=tag${i}`).then(response => {
    image.src = response.url;
    newCat.prepend(image)
    root.appendChild(newCat)
})

