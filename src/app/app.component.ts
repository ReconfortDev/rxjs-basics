import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {catchError, concat, concatMap, from, interval, of, take, throwError} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjsBasics'

  numberValues: number[] = [];
  colorValues: string[] = [];
  combinedValues: any[] = [];
  intervalValues: number[] = [];
  errorHandlingResult: string | null = null;


  constructor() {
    //1. create and subscribe from observable with of operator
    const numberObservable = of(1, 2, 3, 4, 5);
    numberObservable.subscribe({
      next: value => this.numberValues.push(value),
      complete: () => console.log('of complete')
    });

    // 2. Working with 'from'
    const favoriteColors = ['red', 'blue', 'green'];
    const colorObservable = from(favoriteColors);
    colorObservable.subscribe({
      next: color => this.colorValues.push(color),
      complete: () => console.log('from complete')
    });

    const myPromise = new Promise(resolve => resolve('Resolved!'));
    from(myPromise).subscribe({
      next: value => console.log('next:', value),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    //3. Using interval
    const intervalObservable = interval(1000).pipe(take(5));
    intervalObservable.subscribe({
      next: value => this.intervalValues.push(value),
      complete: () => console.log('interval complete')
    });

    // 4. Combining Observable
    const numberSeq = of(10, 20, 30);
    const arrayObservable = from([100, 200, 300]);
    const combinedObservable = concat(numberSeq, arrayObservable);
    combinedObservable.subscribe({
      next: value => this.combinedValues.push(value),
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
        this.errorHandlingResult = 'Error handled and replaced with a new value';
        return of('Error handled and replaced with a new value');
      })
    );

    errorObservable.subscribe({
      next: value => console.log('error handling next:', value),
      complete: () => console.log('error handling complete')
    });
  }
}
