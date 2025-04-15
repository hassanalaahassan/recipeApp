import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/shared-components/navbar/navbar.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {


  
}
