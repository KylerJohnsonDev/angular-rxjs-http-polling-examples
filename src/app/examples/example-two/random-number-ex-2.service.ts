import { Injectable, signal } from '@angular/core';
import { from, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { pollEveryNMilliseconds } from '../poll-every-n-milliseconds';
import { HttpClient } from '@angular/common/http';
import { RandomNumberResponse } from '../models';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberEx2Service {

  // encapsulated members
  private readonly baseURL = '/api/random/int';
  private start$ = new Subject<number>();
  private stop$ = new Subject<void>();
  private randomNumber$ = this.start$.pipe(
    tap(() => this.pollingStatusSignal.set('polling')),
    switchMap(intervalMilliseconds => {
      return this.pollRandomNumber(intervalMilliseconds)
    })
  )

  //public members
  pollingStatusSignal = signal<'polling' | 'not_polling'>('not_polling');
  randomNumberSignal = toSignal(this.randomNumber$);

  constructor(private http: HttpClient) {}

  startPolling(milliseconds: number): void {
    this.start$.next(milliseconds);
  }

  stopPolling(): void {
    this.stop$.next();
    this.pollingStatusSignal.set('not_polling');
  }

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

  // make this private so it can only be started internally
  private pollRandomNumber(intervalMilliseconds: number = 5_000): Observable<number> {
    return from(this.fetchRandomNumber(1, 10)).pipe(
      pollEveryNMilliseconds(intervalMilliseconds),
      takeUntil(this.stop$), // takeUntil MUST be the last operator in the chain for it to stop polling
    );
  }
}
