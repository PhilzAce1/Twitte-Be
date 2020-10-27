<h1 align="center">Welcome to Twitee 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/philzace1" target="_blank">
    <img alt="Twitter: philzace1" src="https://img.shields.io/twitter/follow/philzace1.svg?style=social" />
  </a>
</p>

> TWITEE is a mini and substandard runoff of Twitter. Users register and login and can put up

### 🏠 [Homepage](/)

## Technologies Used 👨‍💻

- ##### Server Application
  - [Node.js®](https://nodejs.org/en/), a JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [JSON Web Token (JWT)](https://jwt.io/) for token-based authenication.
  - [PostgreSQL](https://www.postgresql.org/), an open source object-relational database system.
  - [TypeORM](https://typeorm.io), an ORM that can run in NodeJS, Browser, Cordova, PhoneGap and Ionic platforms and can be used with TypeScript and JavaScript.
  - [SendGrid](https://aws.amazon.com/s3/), a scalable, high-speed, low cost, email Service provider

## Install

##### Basic Installation

- Install [Node.js®](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/) on your host environment (or PC).
- Create a Postgres database with the name: `memoiredb` or any appropriate name. Note the host, port, username and password of the database.
- Ensure [Git](https://git-scm.com/) is installed, then clone this [repository](https://github.com/PhilzAce1/Twitte-Be.git) by running `https://github.com/PhilzAce1/Twitte-Be.git` in the terminal.
- Install the project dependencies by running `npm install`
- Create a .ENV file, using the [.env.example](.env.example) as a sample fill all the fields with correct data.
- Ensure the database service is running, then start the server application in development mode by running `npm run dev2`
- Use the [API documentation](https://twitee-be.herokuapp.com/swagger) to see available endpoints.

## Usage

```sh
npm run dev2
```

## Run tests

```sh
npm run test
```

### A top-level directory layout

    .
    ├── dist
    ├── src
          |── controller
          |── dtos
          |── exceptions
          |── intefaces
          |── middleware
          |── migrations
          |── models
          ├── routes
          ├── services
    ├── LICENSE
    └── README.md

## API Endpoints Documentation 📚

Some of the available endpoints are listed below.

- `POST /signup :-->` Sign up a new user
- `POST /login :-->` Log in an existing user
- `GET /post/ :-->` Get all diary post made by the users
- `GET /post/:id :-->` Get post by Id
- `POST /post/create :-->` Create Post

- `DELETE /post/ :-->` Delete a Post

- `POST /post/comment/create :-->` Create a comment
- `POST /post/comment/like :-->` Create a like
- `POST /post/comment/unlike :-->` Create a unlike

## Author

👤 **Akuagwu Philemon**

- Website: https://akuagwuphilemon.netlify.app
- Twitter: [@philzace1](https://twitter.com/philzace1)
- Github: [@philzace1](https://github.com/philzace1)
- LinkedIn: [@philzace1](https://linkedin.com/in/philzace1)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
