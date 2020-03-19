import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../shared/services/todos.service';
import { Todo } from '../../../shared/classes/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  showDialog = false;
  todoList: any;
  editingTodo: any = null;
  fieldValue = '';
  okButtonText = 'Editar tarea';

  constructor(
    private authService: AuthService,
    private todosService: TodosService,
    private snackBar: MatSnackBar,
    // private notificationsService: NotificacionesService
  ) { }

  ngOnInit(): void {
    this.getTodos();
    // this.notifications();
  }

  // notifications() {

  //   const user = this.authService.userData;

  //   this.notificationsService.getNotifications(user).subscribe( data => {
  //     console.log(data);
  //   });
  // }

  getTodos() {

    const user = this.authService.userData;

    this.todosService.getTodos(user).subscribe( data => {
      this.todoList = data.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        };
      });
    });
  }

  todoDialog(todo = null) {
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
    }
    this.showDialog = true;
  }

  remove(todo: Todo) {
    this.todosService.deleteTodo(todo).then( () => {
      this.snackBar.open('Eliminada', 'Cerrar', {
        duration: 2000,
      });
    }).catch();
  }

  editTodo(title) {
    this.editingTodo.title = title;
    const todo = this.editingTodo;

    this.todosService.updateTodos(todo).then( () => {
      this.snackBar.open('Actualizada', 'Cerrar', {
        duration: 2000,
      });
    }).catch();

  }

  markCompleted(todo) {
    this.editingTodo = todo;
    this.todosService.updateTodos(todo).then( () => {
      this.snackBar.open('Actualizada', 'Cerrar', {
        duration: 2000,
      });
    }).catch();

  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      this.editTodo(title);
    }
    this.hideDialog();
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null;
  }

}
