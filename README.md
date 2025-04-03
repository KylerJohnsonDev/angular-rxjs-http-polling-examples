# Polling with Angular + RxJS

[Angular](https://angular.dev) version 19.2.5.

## Description

This project demonstrates polling in Angular using RxJS. There are three examples:

1. Simple polling - This just polls a http endpoint every `n` number of seconds indefinitely.

2. Start/Stop polling - This example allows you to start and stop the polling process based on a user action.

3. Polling until the response meets a specified condition

For more info, see my [blog post](https://www.kylerjohnson.dev/blog/polling-http-angular-rxjs)

## Running it locally

This is a standard [Angular CLI](https://angular.dev/tools/cli) project. You must have node installed.

Clone this repository:

```bash
git clone https://github.com/KylerJohnsonDev/angular-rxjs-http-polling-examples.git
```

Install dependencies: 
```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
