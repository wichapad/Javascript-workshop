const boardItem =document.querySelectorAll(".board_item");
const boardList =document.querySelectorAll(".board_item_list");

let selectItem;

//รายการ
boardItem.forEach((item)=>{
    item.addEventListener("dragstart",onDragStart);
});

// หมวดหมู่
boardList.forEach((list)=>{
    list.addEventListener("dragover", onDragOver)
    list.addEventListener("dragenter", onDragEnter)
    list.addEventListener("drop", onDrop);
})

function onDragStart() {
    selectItem=this;
    console.log(selectItem);
}

function onDrop() {
    this.append(selectItem);
    selectItem=null;
}

function onDragEnter(e) {
    e.preventDefault();
}
function onDragOver(e) {
    e.preventDefault();
}