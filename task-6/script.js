const draggableItems = document.getElementsByClassName("list");
const targetRightBox = document.getElementById("right");
const targetLeftBox = document.getElementById("left");

for(item of draggableItems){
    item.addEventListener("dragstart", function(e){
        let draggedElement = e.target;

        targetRightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        targetRightBox.addEventListener("drop", function(e){
            targetRightBox.appendChild(draggedElement);
            draggedElement = null;
        })
        targetLeftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        targetLeftBox.addEventListener("drop", function(e){
            targetLeftBox.appendChild(draggedElement);
            draggedElement = null;
        })
    })
}