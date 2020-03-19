import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notifications: any;

  constructor(
    public authService: AuthService,
    public todosService: TodosService
  ) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications() {

    const user = this.authService.userData;

    this.todosService.getNotifications(user).subscribe( notifications => {
      this.notifications = notifications.map( e => {
        return {
          ...e.payload.doc.data() as {}
        };
      });

      console.log(this.notifications);
    });
  }

}
