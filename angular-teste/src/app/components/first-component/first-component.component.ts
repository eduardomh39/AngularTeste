import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Eduardo";
  age: number = 23;

  car = {
    name: "Vectra",
    year: 1999,
    model: "CD"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
