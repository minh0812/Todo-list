import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input () todo: any;
  @Output() remove = new EventEmitter<number>();
  @Output() check = new EventEmitter<number>();
  removeTodo = () => {
    this.remove.emit(this.todo.id);
  }
  checkTodo = () => {
    this.check.emit(this.todo.id);
  }
}
