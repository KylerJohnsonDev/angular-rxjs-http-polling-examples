import { first, Observable, switchMap, timer } from 'rxjs';

// Custom RxJS operator
export function pollEveryNMillisecondsUntil<T>(pollInterval: number, responsePredicateFn: (response: T) => boolean) {
  return (source$: Observable<T>) =>
    timer(0, pollInterval)
    .pipe(
      switchMap(() => source$),
      // evaluate the value emitted from source$ to determine if polling should continue or not
      // by passing in your own predicate function
      // this function should return true if the polling should continue
      // and false if it should stop
      first(responsePredicateFn)
    )
}
