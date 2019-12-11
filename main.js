var textInput = document.querySelector(".input-item");
var textButton = document.querySelector("button");
var textItems = document.querySelectorAll("p");
var itemsList = document.getElementById("itemsList");
var delItem = document.querySelectorAll("span");


textButton.addEventListener("click", function() {
    addItem();
});

function addItem() {
    var p = document.createElement("p");
    var newText = textInput.value;
    p.innerHTML = newText + " <span>X</span>"
    itemsList.appendChild(p);
    setNewFor();
}

function setNewFor() {
    for(var i = 0; i < document.querySelectorAll("span").length; i++) {
        document.querySelectorAll("span")[i].addEventListener("click", function() {
            console.log(this);
        });
    }
}
