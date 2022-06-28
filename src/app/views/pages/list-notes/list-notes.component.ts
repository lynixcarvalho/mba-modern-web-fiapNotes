import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  title = "Título da nota";

  notes = [] as Note[];

  // injetando a dependência do service
  constructor(private noteService: NoteService) { }

  // método do ciclo de vida do componente
  ngOnInit(): void {
    //this.notes = this.noteService.getNotes();
    this.getApiNotes();
  }

  getApiNotes(){
    this.noteService.getNotes().subscribe({
      next: (apiNotes) => this.notes = apiNotes,
      error: (error) => console.error(error),
      //complete: () => alert("Deu tudo certo")
    });
  }

  removeNote(noteId: number){
    //this.notes = this.noteService.removeNote(noteId);
    this.noteService.removeNote(noteId).subscribe(
      () => this.getApiNotes()
    );
  }

}
