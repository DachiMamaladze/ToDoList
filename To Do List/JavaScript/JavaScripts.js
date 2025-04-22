function search() {
    let input = document.getElementById("searchInput").value;
    let list = document.getElementById("searchList");

    if (input) {
        let li = document.createElement("li");
        li.textContent = input;
        list.appendChild(li);
        
        document.getElementById("searchInput").value = "";
    }
}
