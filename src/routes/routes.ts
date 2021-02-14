import { CounterComponent } from './../app/components/counter/counter.component';
import { ListComponent } from './../app/components/list/list.component';
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

export const listRoutes = {
  path: 'list',
  component: ListComponent
}

export const counterRoutes = {
  path: 'counter',
  component: CounterComponent
}

