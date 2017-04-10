var listItems = document.getElementById("list-items").getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Hello World";
}
