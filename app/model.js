"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model = {
    user: "Adam",
    items: [
        { action: "Buy flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect tickets", done: true },
        { action: "Call Joe", done: false }
    ]
};
var Model = (function () {
    function Model() {
        this.user = "Adam";
        this.items = [
            new TodoItem("Buy flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect tickets", true),
            new TodoItem("Call Joe", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
