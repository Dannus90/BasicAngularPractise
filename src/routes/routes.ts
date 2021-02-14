import { HomeComponent } from './../app/components/home/home.component';

export const homeRoutes = { 
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

