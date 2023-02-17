let parentDiv = document.createElement("div");

for (let i = 1; i <= 16; i++) {
    let div = document.createElement("div");
    imgPath = "/images/Project/"+i+".jpg"
    var image = '<img class="image" src='+imgPath+'>'
    image.className="image";
    div.innerHTML = image;
    parentDiv.appendChild(div);
}

document.body.appendChild(parentDiv);
