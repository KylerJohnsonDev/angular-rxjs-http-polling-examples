import { Injectable, signal } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RandomNumberResponse } from '../models';
import { pollEveryNMillisecondsUntil } from '../poll-every-n-milliseconds-until';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberEx3Service {

  private readonly baseURL = '/api/random/int';

  pollingStatusSignal = signal<'polling' | 'not_polling'>('not_polling');

  constructor(private http: HttpClient) {}

  fetchRandomNumber(
    min: number,
    max: number,
  ): Observable<number> {
    const url = `${this.baseURL}?min=${min}&max=${max}`;

    return this.http.get<RandomNumberResponse>(url).pipe(
      map((res) => {
        return res.number;
      })
    );
  }

  private randomNumberPredicateFn = (randomNumber: number): boolean => {
    if(randomNumber >= 7) {
      this.pollingStatusSignal.set('not_polling')
      return true;
    }
    return false;
  }

  pollRandomNumber(): Observable<number> {
    this.pollingStatusSignal.set('polling')
    return from(this.fetchRandomNumber(1, 10)).pipe(
      pollEveryNMillisecondsUntil<number>(5_000, this.randomNumberPredicateFn)
    );
  }
}
