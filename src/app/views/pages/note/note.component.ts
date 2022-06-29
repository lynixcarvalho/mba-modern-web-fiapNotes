import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/services/@types/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // @Input()
  // noteProp?: Note;

  @Input()
  noteProp = {} as Note;

  @Input()
  titleProp: any;

  @Output()
  notifyRemove = new EventEmitter();

  @Output()
  notifyUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeNote() {
    //alert("a nota será removida")
    if (confirm("Deseja realmente apagar a nota?"))
      this.notifyRemove.emit();
  }

  updateNote() {
    if (confirm("Deseja realmente alterar a nota?"))
    this.notifyUpdate.emit();
  }

}
