# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. 

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

There are three components in this project:

- BookComponent.js
- ShelfComponent.js
- SearchComponent.js

## Backend Server

This is the backend server for develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. 