import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './@types/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: string;

  private newNoteSource = new Subject<Note>();
  newNoteProvider = this.newNoteSource.asObservable();

  constructor(private http: HttpClient) { 
    //this.apiUrl = "https://fiap-notes-api.herokuapp.com";
    this.apiUrl = "http://localhost:3333";
  }

  private notes = [
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

  notifyNewNoteAdded(note: Note){
    this.newNoteSource.next(note);
  }

  getNotes(){
    // return this.notes;
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  removeNote(noteId: number){
    //alert("Nota sendo apagada: " + noteId);
    //this.notes = this.notes.filter(note => note.id !== noteId);
    //return this.notes;
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  postNotes(textNote: string){
    return this.http.post<Note>(`${this.apiUrl}/notes`, {text: textNote});
  }

}
