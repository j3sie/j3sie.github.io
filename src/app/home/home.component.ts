import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experinces = [
    {year: '2018 - Present', position: 'Front-end Developer', company: 'Hyperstacks Inc.'},
    {year: '2017', position: 'Internship Php Developer', company: 'Syntactics Inc.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
