(function() {
    const eraser = document.getElementById("eraserID") as HTMLElement;
    const allItems = document.getElementById("itemID") as HTMLDivElement;
    const input = document.getElementById("inputID") as HTMLInputElement;

    eraser.addEventListener("click", function() {
        allItems.innerHTML = "";
    })

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // whitespace validation
            if (!input.value || input.value.trim() == "") {
                input.value = "";
            } else {
                addItem();
            }
        }
    })


    function addItem() {
        const item = document.createElement("h2");

       

        item.innerHTML = "- " + input.value;
        item.addEventListener("click", function() {
            item.classList.toggle("line-through");
        })

        allItems.append(item);

        input.value = "";
    }


// come back later
})();