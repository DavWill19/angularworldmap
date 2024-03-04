import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrl: './home-home.component.css'
})

export class HomeHomeComponent implements OnInit {
  // variables to pass in to the component
  @Input() country: string | undefined = 'Click on a country!';
  @Input() countryData: any | undefined = {};
  @Input() toolTip: string | undefined = "";
  @Input() capital: string | undefined = "";
  @Input() region: string | undefined = "";
  @Input() income: string | undefined = "";
  @Input() lattitude: string | undefined = "";
  @Input() longitude: string | undefined = "";

  constructor(private http: HttpClient) { }

  toolTipText() {
    const svgElements = document.querySelectorAll('path');

    // Loop through svg elemnts
    svgElements.forEach(svgElement => {

      svgElement.addEventListener('mouseenter', (e) => {
        const enter = e.target as HTMLElement;
        const nameOfCountry = enter.getAttribute('name');
        // was going to use a tolltip but decided to a p tag instead
        this.toolTip = nameOfCountry !== null ? nameOfCountry : undefined;

      });
    });
  }

  handleClick() {


    document.addEventListener('click', (e) => {
      // get the click target
      const click = e.target as HTMLElement;

      const nameOfCountry = click.getAttribute('name');

      const countryId = click.getAttribute('id');

      // make sure theyre clicking on a country before api call
      if (nameOfCountry !== null) {
        console.log(countryId);
        this.country = nameOfCountry;
        this.http.get(`https://api.worldbank.org/V2/country/${countryId}?format=json`)
        .subscribe((data: any) => {
          let countryData = data[1][0];
          // set the data from the call
          this.capital = countryData.capitalCity;
          this.region = countryData.region.value;
          this.income = countryData.incomeLevel.value;
          this.lattitude = countryData.latitude;
          this.longitude = countryData.longitude;
        });
      }


      return null;
    });


  }

  ngOnInit(): void {
    this.toolTipText();

  }
}
