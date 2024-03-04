import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeHomeComponent } from "./home/home-home/home-home.component";
import { HttpClientModule } from '@angular/common/http';
// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HomeHomeComponent, HttpClientModule]
})


export class AppComponent {
  title = 'd280_app';
  constructor() {

  }
  ngOnInit(): void {


  }
}
