const button = document.querySelector("#button");
const todolist = document.querySelector("#todolist");
const input = document.querySelector("#input");
var list = [];

button.onclick = outputDoc;

function outputList() {
    todolist.innerHTML="";
    list.forEach((item, index) => {
        todolist.innerHTML += ("<li>" + item + "<a onclick='editList(" + index + ")'>Edit</a><a onclick='deleteItem(" + index + ")'>&times | </a></li>");
    });
}

function addList(){
    if (!input.value.length==0){
        list.push(input.value);
        input.value = "";
    }
}

function outputDoc() {
    addList()
    outputList();
    console.log(list)
}

function editList(index) {
    var newAct = prompt("Please insert your new value");
    list.splice(index, 1, newAct);
    outputDoc();
}

function deleteItem(index) {
    list.splice(index, 1);
    outputDoc();
}