import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {catchError, concat, concatMap, from, interval, of, take, throwError} from "rxjs";
import {SearchComponent} from "./components/search/search.component";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjsBasics';

  constructor() {

    //1. create and subscribe from observable with of operator
    // Use when you want to emit a series of values sequentially.
    const numberObservable = of(1, 2, 3, 4, 5);
    numberObservable.subscribe({
      next: value => console.log('of next:', value),
      complete: () => console.log('of complete')
    });

    // 2. Working with 'from'
    // Converts an array, promise, or other iterable objects into an observable stream.
    const favoriteColors = ['red', 'blue', 'green'];
    const colorObservable = from(favoriteColors);
    colorObservable.subscribe({
      next: color => console.log('from next:', color),
      complete: () => console.log('from complete')
    });

    const myPromise = new Promise(resolve => resolve('Resolved!'));
    from(myPromise).subscribe({
      next: value => console.log('next:', value),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    //3. Using interval
    // Emits an increasing number at regular intervals (e.g., every second).
    const intervalObservable = interval(1000).pipe(take(5));
    intervalObservable.subscribe({
      next: value => console.log('interval next:', value, 'timestamp:', new Date()),
      complete: () => console.log('interval complete')
    });

    // 4. Combining Observable
    const numberSeq = of(10, 20, 30);
    const arrayObservable = from([100, 200, 300]);
    const combinedObservable = concat(numberSeq, arrayObservable);
    combinedObservable.subscribe({
      next: value => console.log('combined next:', value),
      complete: () => console.log('combined complete')
    });



    // 5. Error Handling
    const errorObservable = of(1, 2, 3).pipe(
      concatMap(value => {
        if (value === 3) {
          return throwError(() => new Error('Oops! Something went wrong.'));
        }
        return of(value);
      }),
      catchError(err => {
        console.log('Error caught:', err.message);
        return of('Error handled and replaced with a new value');
      })
    );

    errorObservable.subscribe({
      next: value => console.log('error handling next:', value),
      complete: () => console.log('error handling complete')
    });
  }

}
