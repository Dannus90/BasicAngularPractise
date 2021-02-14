import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
    {
      path: 'home',
      component: HomeComponent,
      redirectTo: ''
    },
    {
      path: 'index',
      component: HomeComponent,
      redirectTo: ''
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
