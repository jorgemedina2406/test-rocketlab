import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Todo } from '../classes/todo';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(
    public afs: AngularFirestore,
    public router: Router,
    public authService: AuthService
  ) {
  }

  deleteTodo(todo: Todo) {
    const user = this.authService.userData.uid;
    return this.afs.doc('users/' + user + '/' + 'todos/' + todo.id).delete();
  }

  getTodos(user) {
    return this.afs.collection('users/' + user.uid + '/' + 'todos', ref => ref.orderBy('createdAt')).snapshotChanges();
  }

  getNotifications(user) {
    return this.afs.collection('users/' + user.uid + '/' + 'notifications', ref => ref.orderBy('created')).snapshotChanges();
  }

  createTodos(todo) {
    const user = this.authService.userData.uid;
    return this.afs.collection('users/' + user + '/' + 'todos').add(todo);
  }

  updateTodos(todo: Todo) {
    const user = this.authService.userData.uid;
    return this.afs.doc('users/' + user + '/todos/' + todo.id).update(todo);
  }

}