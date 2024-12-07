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

  createFlashcard(question: string, answer: string, box: number): Observable<FlashcardI[]> {
    return this.http.post<FlashcardI[]>(`${this.apiUrl}/flashcards`);
  }

  updateFlashcard(id: number, question: string, answer: string, box: number): Observable<FlashcardI[]> {
    return this.http.put<FlashcardI[]>(`${this.apiUrl}/flashcards/${id}`)
  }

  deleteFlashcard(id: number): Observable<FlashcardI[]> {
    return this.http.delete<FlashcardI[]>(`${this.apiUrl}/flashcards/${id}`)
  }

  moveFlashcard(id: number, box: number): Observable<FlashcardI[]> {
    return this.http.patch<FlashcardI[]>(`${this.apiUrl}/flashcards/${id}/move`)
  }
}
