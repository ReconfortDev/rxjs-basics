Here's a revised version of your README that includes the new labs and summarizes the content for better readability:

---

# RxJS Basics

This project demonstrates the basic usage of RxJS operators and includes examples of debounced search, data combination, error handling, and loading states in an Angular application.

## Labs 1

### 1. Using `of` Operator
- **Description**: Creates an observable that emits a sequence of values.
- **Implementation**: See `exampleOf()` in `app.component.ts`.

### 2. Working with `from` Operator
- **Description**: Creates an observable from an array or iterable object.
- **Implementation**: See `exampleFrom()` in `app.component.ts`.

### 3. Using `interval` Operator
- **Description**: Emits values at regular intervals.
- **Implementation**: See `exampleInterval()` in `app.component.ts`.

### 4. Combining Observables with `concat`
- **Description**: Sequentially combines multiple observables.
- **Implementation**: See `exampleCombine()` in `app.component.ts`.

### 5. Error Handling in Observables
- **Description**: Demonstrates error handling using the `catchError` operator.
- **Implementation**: See `exampleErrorHandling()` in `app.component.ts`.

## Labs 2

## Live Link 

check live App here [SearchBox](https://amaliseacrch.netlify.app/)
  

### 1. Implement Debounced Search
- **Description**: Creates an observable from the search input field, delays emissions, filters short terms, simulates an API call, and displays results.
- **Implementation**:
  - Create observable for search input.
  - Use `debounceTime` to delay emissions.
  - Filter out empty or short terms.
  - Simulate API calls with `switchMap` and `of`.
  - Display search results.

### 2. Combine Data from Multiple Endpoints
- **Description**: Combines data from multiple sources and handles errors and loading states.
- **Implementation**:
  - Create observables for different data sources (e.g., user details and posts).
  - Use `combineLatest` to merge results.
  - Transform combined data for display.
  - Handle errors and display loading states.

### 3. Error Handling
- **Description**: Includes error handling for search and data combination processes, and displays appropriate error messages.
- **Implementation**:
  - Handle errors in observables.
  - Show error messages to users.

### 4. Loading States
- **Description**: Manages loading indicators for both search and data combination processes.
- **Implementation**:
  - Implement and display loading indicators.
  - Reflect loading states in the UI.

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/` to view the application. It will automatically reload on file changes.

## Code Scaffolding

Use `ng generate component component-name` to generate new components. Other Angular CLI commands can be used for generating directives, pipes, services, and more.

## Build

Run `ng build` to build the project. Build artifacts will be stored in the `dist/` directory.

## Further Help

For more help with Angular CLI, use `ng help` or check the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---
