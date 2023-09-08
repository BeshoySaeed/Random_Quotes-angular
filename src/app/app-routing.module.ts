import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MyQoutesComponent } from './Components/my-qoutes/my-qoutes.component';
import { RegisterComponent } from './Components/register/register.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'myQoutes',
    component: MyQoutesComponent,
    canActivate: [loginGuard],
  },

  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
