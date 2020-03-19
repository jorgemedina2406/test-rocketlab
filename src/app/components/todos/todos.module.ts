import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../../material.module';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TodosModule { }
