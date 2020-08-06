import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  // readonly URL_RANDOM_WORD: string =
  //   'https://random-word-api.herokuapp.com/word?number=1';
  private _url = 'src/assets/words/words.json';

  constructor(private http: HttpClient) {}

  // private mockWords = [
  //   { word: 'manzana', translation: 'apple' },
  //   { word: 'mesa', translation: 'table' },
  //   { word: 'correr', translation: 'run' },
  //   { word: 'coche', translation: 'car' },
  //   { word: 'bicicleta', translation: 'bicycle' },
  //   { word: 'verano', translation: 'spring' },
  //   { word: 'idioma', translation: 'language' },
  //   { word: 'mano', translation: 'hand' },
  //   { word: 'buscar', translation: 'search' },
  //   { word: 'comer', translation: 'eat' },
  //   { word: 'computer', translation: 'ordenador' },
  //   { word: 'dinero', translation: 'money' },
  //   { word: 'efectivo', translation: 'cash' },
  //   { word: 'escuela', translation: 'school' },
  //   { word: 'pelicula', translation: 'movie' },
  // ];

  getWords(): Observable<Object> {
    console.log(1, this.http.get(this._url));
    return this.http.get(this._url);
    // return of(this.mockWords);
  }

  getRandomWord(): Observable<any> {
    return this.http.get(this._url);
  }
}
