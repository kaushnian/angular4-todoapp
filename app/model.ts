let model = {
  user: "Adam",
  items: [
    { action: "Buy flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect tickets", done: true },
    { action: "Call Joe", done: false }
  ]
};

export class Model {
  user;
  items;

  constructor() {
    this.user = "Adam";
    this.items = [
      new TodoItem("Buy flowers", false),
      new TodoItem("Get Shoes", false),
      new TodoItem("Collect tickets", true),
      new TodoItem("Call Joe", false)
    ];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}