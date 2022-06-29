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
  private editNoteSource = new Subject<Note>();

  newNoteProvider = this.newNoteSource.asObservable();
  editNoteProvider = this.editNoteSource.asObservable();

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

  // [C]reate note
  postNotes(textNote: string){
    return this.http.post<Note>(`${this.apiUrl}/notes`, {text: textNote});
  }

  // [R]ead notes
  getNotes(){
    // return this.notes;
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  // [U]pdate note
  updateNote(noteId: number, textNote: string){
    return this.http.put<Note>(`${this.apiUrl}/notes/${noteId}`, {text: textNote});
  }
  // [D]elete note
  removeNote(noteId: number){
    //alert("Nota sendo apagada: " + noteId);
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  // Notify that a new note was created
  notifyNewNoteAdded(note: Note){
    this.newNoteSource.next(note);
  }

  // Notify that a note is under edition
  notifyEditNote(note: Note){
    this.editNoteSource.next(note);
  }

}
