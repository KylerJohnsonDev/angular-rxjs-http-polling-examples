import { Observable, switchMap, timer } from 'rxjs';

// Custom RxJS operator
export function pollEveryNMilliseconds<T>(pollInterval: number) {
  return (source$: Observable<T>) =>
    timer(0, pollInterval).pipe(switchMap(() => source$));
}
