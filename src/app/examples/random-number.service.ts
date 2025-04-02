import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { pollEveryNMilliseconds } from './poll-every-n-milliseconds';
import { HttpClient } from '@angular/common/http';

export interface RandomNumberResponse {
  resultType: string
  number: number
  message: string
  signature: string
  elapsedTime: number
  timestamp: string
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  private readonly baseURL = '/api/random/int';

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

  pollRandomNumber(): Observable<number> {
    return from(this.fetchRandomNumber(1, 10)).pipe(
      pollEveryNMilliseconds(5_000)
    );
  }
}
