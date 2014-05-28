module('module 1');

test('my first test', function () {
    ok(true);
});

module('module 2');

test('my second test', function () {
    ok(true);
});

module('DOM Tests', {
    setup: function() {
        var body = document.body;
        var div = document.createElement('div');
        div.id = 'div1';

        div.innerHTML = 'some text';
        body.appendChild(div);
    },
    teardown: function() {
        var div = document.getElementById('div1');
        div.remove();
    }
});

test('DOM Test 1', function() {
    strictEqual(ns.readyDiv(), 'some text');
});

module('DOM Tests Improved!');

test('DOM Test', function() {
    ns.createTodoItem();
    var element = document.getElementsByClassName('todoItem');
    strictEqual(element.length, 1);
});

module('Asynchronous Tests');

asyncTest('asynchronous timing test', function() {
    setTimeout(function() {
        ok(true);
        start();
    }, 100);
});

module('Tidbits');

test('introduce global variable', function (){
    globalVar = 3;
    strictEqual(globalVar, 3);
});

/*
test('hidden exception', function () {
    ns.exceptionThrower();
});
*/

test('expect some asserts', function () {
    expect(3);
    ok(true);
    ok(true);
    ok(true);
});





