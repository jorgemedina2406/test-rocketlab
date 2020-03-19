import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  showDialog = false;
  editingTodo: any = null;
  fieldValue = '';
  okButtonText = 'Crear Tarea';
  todoList: any;

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  todoDialog(todo = null) {
    this.okButtonText = 'Crear tarea';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Editar tarea';
    }
    this.showDialog = true;
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  addTodo(title) {
    const todo = {
      title,
      completed: false,
      createdAt: new Date()
    };

    this.todosService.createTodos(todo);

  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is new
  }

}
