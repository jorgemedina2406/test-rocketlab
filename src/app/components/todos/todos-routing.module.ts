import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guard/auth.guard';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TodoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
