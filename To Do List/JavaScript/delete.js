let list = document.getElementById("searchList");

list.onclick = function(event) {
    let clickedItem = event.target;
    clickedItem.remove();
}
