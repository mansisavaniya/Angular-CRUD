import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ListPrdsComponent } from '../products/listprds/listprds.component';
import { CreatePrdComponent } from '../products/createprd/createprd.component';
import { EditprdComponent } from '../products/editprd/editprd.component';

export const routes: Routes = [
  { path: '', component: ListPrdsComponent }, 
  { path: 'products/create', component: CreatePrdComponent },
  { path: 'products/edit/:id', component: EditprdComponent }
];

export const appRouting = [provideRouter(routes)];