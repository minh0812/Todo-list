import { Component } from '@angular/core';

interface Todo {
  id: number;
  name: string;
  check: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent {
  data: Todo[] = [];
  todo: string = '';

  ngOnInit() {
    // get data from local storage
    const data = localStorage.getItem('data');
    if (data) {
      this.data = JSON.parse(data);
    }
    console.log("component init");
  }

  addTodo = (name: string) => {
    this.data.unshift({
      id: this.data.length + 1,
      name,
      check: false,
    });
    this.todo = '';
    localStorage.setItem('data', JSON.stringify(this.data));
  };

  removeTodo = (id: number) => {
    this.data = this.data.filter((todo) => todo.id !== id);
    localStorage.setItem('data', JSON.stringify(this.data));
  }
  checkTodo = (id: number) => {
    this.data = this.data.map((todo) => {
      if (todo.id === id) {
        todo.check = !todo.check;
      }
      return todo;
    });
    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
