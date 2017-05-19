import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  private model = new Model();

  getName() : string {
    return this.model.user;
  }

  getTodoItems() : TodoItem[] {
    return this.model.items.filter(item => !item.isDone);
  }

  addItem(newItem: string) : void {
    if (newItem != '') {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
}