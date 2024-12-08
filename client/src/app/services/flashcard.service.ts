import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashcardI } from '../types/flashcard.interface';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getAllFlashcards(): Observable<FlashcardI[]> {
    return this.http.get<FlashcardI[]>(`${this.apiUrl}/flashcards`);
  }

  createFlashcard(question: string, answer: string, box: number): Observable<FlashcardI> {
    const flashcard = {
      question,
      answer,
      box
    }
    return this.http.post<FlashcardI>(`${this.apiUrl}/flashcards`, flashcard);
  }

  updateFlashcard(id: number, question: string, answer: string, box: number): Observable<FlashcardI> {
    const flashcard = {
      question,
      answer,
      box
    }
    return this.http.put<FlashcardI>(`${this.apiUrl}/flashcards/${id}`, flashcard)
  }

  deleteFlashcard(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/flashcards/${id}`)
  }

  moveFlashcard(id: number, box: number): Observable<FlashcardI> {
    const flashcard = {
      id,
      box
    }
    return this.http.patch<FlashcardI>(`${this.apiUrl}/flashcards/${id}/move`, flashcard)
  }
}
