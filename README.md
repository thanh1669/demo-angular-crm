

# Angular CRM

A simple CRM client built with Angular 14, Nx workspace, ngrx, TailwindCSS and ng-zorro.


## Tech stack

`Front-end`
- [Angular 14][angular]
- [ngrx][ngrx] and [ngrx/component-store][ngrx-component-store]
- [ng-zorro][ng-zorro] UI component: tooltip, modal, slider, switch and more
- [Tailwind Css][Tailwind] A utility-first CSS framework

[angular]: https://github.com/angular/angular
[ngrx]: https://ngrx.io/
[ngrx-component-store]: https://ngrx.io/guide
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[Tailwind]: https://tailwindcss.com/docs/installation


## Structure

Below is the simplified version of the application structure.

```bash
.
└── root
    ├── apps
    │   └── app-crm
    └── libs
        └── web (dir)
            ├── shell (dir)
            │   ├── feature (angular:lib) - for configure any forRoot modules
            │   └── ui
            │       └── layout (angular:lib)
            ├── auth (dir)
            │   ├── data-access (angular:lib)
            │   ├── feature (angular:lib)
            ├── partner (dir)
            │   ├── data-access (angular:lib)
            │   ├── feature (angular:lib)
            │   │   ├── customer (angular:lib)
            │   │   ├── supplier (angular:lib)
            │   └── ui (dir)
            └── shared (dir)
                ├── app-config (injection token for environment)
                ├── data-access (angular:lib, API call, Service or State management to share across the Client app)
                ├── ui (dir)
                ├── pipes (dir)
                ├── directives (dir)
                └── utils (angular:lib, usually shared Guards, Interceptors, Validators...)
```


## Getting Started

1. Clone My Project: `git clone https://github.com/thanh1669/demo-angular-crm.git`
2. Install dependencies: `yarn install`
3. Running: `yarn start` to starting Angular web application
4. The app should run on `http://localhost:4200`
5. Building Production: `yarn build`


## Author: Thanh Nguyen

- A seasoned engineer with seven years of passion in creating experience-driven products. I am proficient in 
- `Back-end`: Nodejs, Go, MySql, Postgresql, Mongodb, Redis, RabbitMQ and Micro-service architecture. 
- `Front-end`: Angular, React and TypeScript development.
- Personal profile: https://github.com/thanh1669
- Say hello: thanhlocalhost@gmail.com


## License

Feel free to use my code on your project. Please put a reference to this repository.

[MIT](https://opensource.org/licenses/MIT)