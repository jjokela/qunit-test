var ns = ns || {};

ns.readyDiv = function () {
    return document.getElementById("div1").innerHTML;
}

ns.createTodoItem = function() {
    var parent = document.getElementById('todoDiv');
    var todo = document.createElement('div');
    todo.className = 'todoItem';
    todo.innerHTML = 'other html content';
    parent.appendChild(todo);
}

ns.exceptionThrower = function() {
    throw 'boom! my exception';
}