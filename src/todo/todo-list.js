import {TodoItems} from './services/todo-items';

export class TodoList {

  static inject = [TodoItems];
  constructor(todoitems) {
    this.items = todoitems.items;
  }

  completeAll() {
    this.items.forEach(item => {
      item.completed = true;
    });
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }
}
