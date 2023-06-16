(function () {
    var eraser = document.getElementById("eraserID");
    var allItems = document.getElementById("itemID");
    var input = document.getElementById("inputID");
    eraser.addEventListener("click", function () {
        allItems.innerHTML = "";
    });
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            // whitespace validation
            if (!input.value || input.value.trim() == "") {
                input.value = "";
            }
            else {
                addItem();
            }
        }
    });
    function addItem() {
        var item = document.createElement("h2");
        item.innerHTML = "- " + input.value;
        item.addEventListener("click", function () {
            item.classList.toggle("line-through");
        });
        allItems.append(item);
        input.value = "";
    }
    // come back later
})();
