var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("list-items").getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
    // listItems[i].innerHTML = "Hello World";
    listItems[i].addEventListener("click", activateItem);
}

function activateItem () {
  // alert("Click detected!");
  ourHeadline.innerHTML = this.innerHTML;
}
