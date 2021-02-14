import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoutes, listRoutes, counterRoutes } from '../routes/routes';

const routes: Routes = [
  homeRoutes,
  listRoutes,
  counterRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
