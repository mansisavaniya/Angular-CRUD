import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { withComponentInputBinding } from '@angular/router';
import { ListPrdsComponent } from '../products/listprds/listprds.component';
import { CreatePrdComponent } from '../products/createprd/createprd.component';
import { EditprdComponent } from '../products/editprd/editprd.component';

const routes: Routes = [
  { path: '', component: ListPrdsComponent },
  { path: 'products/create', component: CreatePrdComponent },
  { path: 'products/edit/:id', component: EditprdComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
};
