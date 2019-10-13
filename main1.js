var list = [];



function addTodo(text) {
    list.push({
        text: text,
        isCompleted: false

    });
}

function renderTodos(list) {
    const html = list.map((item, index) => {
        const circleFileName = item.isCompleted ? 'check.png' : 'unchecked.png';
        return '<div class="myList">' +
            '<img class="img3" src="' + circleFileName + '" data-id="' + index + '" onClick="toggleCheck(event)">' +
            '<span class="list1" id="span-txt">' + item.text + '</span>' +
            '<img class="img4" src="cancel-24px.png" data-id="' + index + '" onClick="deleteTodo(event)">' +
            '</div>';
    });
    var num =showComplete(list);
    document.getElementById('add').innerHTML = html.join('');
    document.getElementById("num").innerHTML = num + "task left";
    document.getElementById("checValue").value = "";

}

document.getElementById("checValue").addEventListener("keypress", function (ent) {
    if (ent.keyCode === 13) {
        const text = document.getElementById("checValue").value;

        if (text === '') {
            return alert("You must write something!");
        }

        addTodo(text);

        renderTodos(list);
    }
});
document.getElementById("take").addEventListener("click", function () {
    const text = document.getElementById("checValue").value;

    if (text === '') {
        return alert("You must write something!");
    }

    addTodo(text);

    renderTodos(list);
    console.log(list)
});

function toggleCheck(event) {
    const index = event.target.getAttribute('data-id');
    list[index].isCompleted = !list[index].isCompleted;
    renderTodos(list);
}

function deleteTodo(event) {
    const index = event.target.getAttribute('data-id');
    list.splice(index, 1);
    renderTodos(list);
};
document.getElementById("clear").addEventListener("click", clearChecked)

function clearChecked() {
    list = list.filter(item => !item.isCompleted);
    renderTodos(list);

};

document.getElementById("all").addEventListener("click", allCheched)

function allCheched() {
    lists = list.map(item => item.isCompleted = true);
    renderTodos(list);
}
document.getElementById("Comp").addEventListener("click", Completed)

function Completed() {
    var list1 = list.filter(item => item.isCompleted);
    renderTodos(list1);
}
document.getElementById("unComp").addEventListener("click", Uncomplete)

function Uncomplete() {
    var list2 = list.filter(item => !item.isCompleted);
    renderTodos(list2);
}
document.getElementById("All").addEventListener("click", All)

function All() {
    renderTodos(list);
}
var listunComp=[];

function showComplete(list) {
   var listunComp = [];
    list.map((item, index) => {
        if (item.isCompleted == false) {
            listunComp.push(list[index]);
        }
    });
    var num = listunComp.length;
    return num;
}