var textInput = document.querySelector(".input-item");
var textButton = document.querySelector("button");
var textItems = document.querySelectorAll("li");
var itemsList = document.getElementById("itemsList");
var delItem = document.querySelectorAll(".remove-li");

textButton.addEventListener("click", function() {
    addItem();
});

function addItem() {
    var li = document.createElement("li");
    var img = document.createElement("img");
    var newText = textInput.value;
    img.classList.add("remove-li");
    img.src = "./icons/remove.svg";
    img.alt = "remove";
    if(newText.length > 0) {
        li.innerHTML = newText;
        li.appendChild(img);
        itemsList.appendChild(li);
        textInput.value = "";
        var delItem = document.querySelectorAll(".remove-li");
        setNewFor(delItem);
    }
}

function setNewFor(delItem) {
    for(let i = 0; i < delItem.length; i++) {
        delItem[i].addEventListener("click", deleteFunc);
    }
}

function deleteFunc() {
    this.parentElement.remove();
}

setNewFor(delItem);