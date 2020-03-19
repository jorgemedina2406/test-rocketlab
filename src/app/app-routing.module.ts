import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: () => import('./components/todos/todos.module').then(m => m.TodosModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
      path: '**',
      redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
