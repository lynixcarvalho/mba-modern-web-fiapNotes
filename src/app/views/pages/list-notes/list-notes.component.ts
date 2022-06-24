import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  title = "Título da nota";

  notes = [
    {
      id: 1,
      date: new Date(),
      text: "Um texto qualquer",
      urgent: true
    },
    {
      id: 2,
      date: new Date(),
      text: "Um texto qualquer 2",
      urgent: false
    },
    {
      id: 3,
      date: new Date(),
      text: "Um texto qualquer 3",
      urgent: false
    },
    {
      id: 4,
      date: new Date(),
      text: "Um texto qualquer 4",
      urgent: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
