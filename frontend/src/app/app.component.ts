import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ReactiveFormsModule], 
  template: `<router-outlet></router-outlet>`, 
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
