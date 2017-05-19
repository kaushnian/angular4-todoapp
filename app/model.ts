export class Model {
  private _user: string;
  private _items: TodoItem[];

  constructor() {
    this._user = "Adam";
    this._items = [
      new TodoItem("Buy flowers", false),
      new TodoItem("Get Shoes", false),
      new TodoItem("Collect tickets", true),
      new TodoItem("Call Joe", false)
    ];
  }

  get user() : string {
    return this._user;
  }

  get items () : TodoItem[] {
    return this._items;
  }
}

export class TodoItem {
  constructor(private action: string, private done: boolean) {
    this.action = action;
    this.done = done;
  }

  get itemAction() : string {
    return this.action;
  }

  get isDone() : boolean {
    return this.done;
  }
}