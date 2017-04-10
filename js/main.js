var newItemCounter = 1;
var ourList = document.querySelector("#list-items");

// Can replace getElementById with querySelector for modern browswers
// var ourList = document.getElementById("list-items");

var ourButton = document.getElementById("add-new-item");
var ourHeadline = document.getElementById("our-headline");

var listItems = document.getElementById("list-items").getElementsByTagName("li");

// for (var i = 0; i < listItems.length; i++) {
//     // listItems[i].innerHTML = "Hello World";
//     listItems[i].addEventListener("click", activateItem);
// }

ourList.addEventListener("click", activateItem);

function activateItem (e) {
  // alert("Click detected!");
  if (e.target.nodeName == "LI") {
    ourHeadline.innerHTML = e.target.innerHTML;
    for (var i = 0; i < e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem () {
  ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>" ;
  newItemCounter++;
}
