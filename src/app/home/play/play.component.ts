import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  word: any = {};
  untranslatedWord: string = '';
  translation: string = '';
  guess: string = '';
  feedback: string = '';
  hasSubmitted: boolean = false;
  isCorrect: boolean = false;
  done: boolean = false;
  next: boolean = false;
  showedWord: boolean = false;
  noOfCorrectWords: number = 0;
  noOfTotalWords: number = 0;
  percentageOfCorrect: number;
  wordsArray: string[];

  private _jsonURL = '/assets/words/words.json';

  constructor(private router: Router, private http: HttpClient) {
    this.getJSON().subscribe((words) => {
      this.wordsArray = words;
      this.generateWord();
    });
  }

  ngOnInit(): void {}

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  generateWord() {
    this.noOfTotalWords += 1;
    this.guess = '';
    this.word = this.wordsArray[
      Math.floor(Math.random() * this.wordsArray.length)
    ];
    this.untranslatedWord = this.word['e'];
    this.translation = this.word['s'];
  }

  nextWord() {
    this.isCorrect = false;
    this.hasSubmitted = false;
    this.showedWord = false;
    this.generateWord();
  }

  submitAnswer() {
    this.hasSubmitted = true;
    if (this.guess.toLowerCase() === this.word['s']) {
      this.isCorrect = true;
      this.showedWord = true;
      this.next = true;
      this.noOfCorrectWords += 1;
      this.feedback = 'Correct!';
    }
    if (this.guess.toLowerCase() !== this.word['s']) {
      this.isCorrect = false;
      this.feedback = 'Incorrect, try again!';
    }
  }

  calculatePercentage() {
    if (this.noOfTotalWords === 0) {
      this.percentageOfCorrect = 0;
    } else {
      this.percentageOfCorrect = Math.round(
        (this.noOfCorrectWords / this.noOfTotalWords) * 100
      );
    }
  }

  showResult() {
    if (!this.hasSubmitted) {
      this.noOfTotalWords -= 1;
      this.calculatePercentage();
    } else {
      this.calculatePercentage();
    }
    this.hasSubmitted = false;
    this.done = true;
  }

  showWord() {
    this.isCorrect = true;
    this.showedWord = true;
    this.next = true;
    this.feedback = '';
  }

  playAgain() {
    this.isCorrect = false;
    this.showedWord = false;
    this.next = false;
    this.feedback = '';
    this.guess = ' ';
    this.done = false;
    this.percentageOfCorrect = 0;
    this.noOfTotalWords = 0;
    this.noOfCorrectWords = 0;
    this.generateWord();
  }

  redirect() {
    this.router.navigate(['home', 'start']);
  }
}
