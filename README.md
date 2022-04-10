# library-API

library-API is a simple REST API made by [Xoán Carneiro](https://github.com/xocarva) with Express/Node.js and MySQL for academic purposes. This project is licensed under the terms of the [GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

- [Open Endpoints](#open-endpoints)

---

## Open Endpoints

Open endpoints require no authentication.

- [Books endpoints](#books-endpoints)

&nbsp;

## Books endpoints

* [Create A Book](#create-a-book) : `POST /books/`
* [Retrieve Accessible Books](#retrieve-accesible-books) : `GET /books/`
* [Retrieve A Book](#retrieve-a-book) : `GET /books/:id/`
* [Update A Book](#update-a-book) : `PATCH /books/:id`
* [Delete A Book](#delete-a-book) : `DELETE /books/:id`

&nbsp;

### Create A Book :


- **URL** : `/books/`

- **Method** : `POST`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : None

- **Body** :
    - title (required  | string | min : 1 | max : 50)
    - author (required  | string | min : 1 | max : 50)
    - genre (required  | string | accepted values: 'fantasy', 'sci-fi', 'historical', 'romance', 'biography', 'comedy', 'thriller', 'essay', 'others')
    - publisher (required  | string | min : 1 | max : 50)
    - releaseYear (required  | integer | min : 1 | max : 9999)
    - isbn (required | string | must be a valid ISBN 10 or ISBN 13 format)

- **Body example** :

```json
{
    "title": "Extraordinary APIs",
    "author": "Jane Doe",
    "genre": "others",
    "publisher": "Bankrupt Publishing",
    "releaseYear": 2022,
    "isbn": "3849383189354"
}
```

#### _Success Responses_


- **Condition** : Provided data is correct.

- **Code** : `201 Created`

- **Content example** :

```json
{
    "message": "Book has been created",
    "data": {
        "bookId": 5
    }
}
```

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : ISBN already registered.

- **Code** : `409 Conflict`

- **Content** : `{"error": "ISBN already registered"}`


#### OR

- **Condition** : Invalid provided data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"title\" must be a string"
}
```

&nbsp;

### Retrieve Accesible Books :


- **URL** : `/books/`

- **Method** : `GET`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : None

- **Body** : None


#### _Success Responses_


- **Condition** : There are no accesible Books.

- **Code** : `200 Ok`

- **Content** : `{[]}`.

##### OR

- **Condition** : There are accesible Books.

- **Code** : `200 Ok`

- **Content example** :

```json
{
    "message": "ok",
    "data": [
        {
            "id": 1,
            "title": "Extraordinary APIs",
            "author": "Jane Doe",
            "genre": "others",
            "publisher": "Bankrupt Publishing",
            "releaseYear": 2022,
            "isbn": "3849383189354"
        },
        {
            "id": 2,
            "title": "Halitosis dragons: double nightmare",
            "author": "John Doe",
            "genre": "fantasy",
            "publisher": "Bankrupt Publishing",
            "releaseYear": 2020,
            "isbn": "3849374789351"

        }
    ]
}
```

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

&nbsp;
### Retrieve A Book :


- **URL** : `/books/:id`

- **Method** : `GET`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : id

- **Body** : None


#### _Success Responses_


- **Condition** : The books exists and it is accesible.

- **Code** : `200 Ok`

- **Content example** :

```json
{
    "message": "ok",
    "data": {
        "id": 1,
        "title": "Extraordinary APIs",
        "author": "Jane Doe",
        "genre": "others",
        "publisher": "Bankrupt Publishing",
        "releaseYear": 2022,
        "isbn": "3849374789351"
    }
}
```

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : The book with the given id does not exist.

- **Code** : `404 Not found`

- **Content** : `{"error": "Book not found"}`


&nbsp;
### Update A Book :


- **URL** : `/books/`

- **Method** : `PATCH`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : id

- **Body** :
    - title (string | min : 1 | max : 50)
    - author (string | min : 1 | max : 50)
    - genre (string | accepted values: 'fantasy', 'sci-fi', 'historical', 'romance', 'biography', 'comedy', 'thriller', 'essay', 'others')
    - publisher (string | min : 1 | max : 50)
    - releaseYear (integer | min : 1 | max : 9999)
    - isbn (string | must be a valid ISBN 10 or ISBN 13 format)

- **Body example** :

```json
{
    "title": "Honest politicians",
    "genre": "comedy"
}
```

#### _Success Responses_


- **Condition** : Provided data is correct.

- **Code** : `200 Ok`

- **Content example** :

```json
{
    "message": "Book updated",
    "data": {
        "id": 1,
        "title": "Honest politicians",
        "author": "John Doe",
        "genre": "comedy",
        "publisher": "Bankrupt Publishing",
        "releaseYear": 2010,
        "isbn": "3920192011"
    }
}
```

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : ISBN already registered.

- **Code** : `409 Conflict`

- **Content** : `{"error": "ISBN already registered"}`


#### OR

- **Condition** : Invalid provided data.

- **Code** : `400 Bad Request`

- **Content example** :

```json
{
    "error": "\"title\" must be a string"
}
```

&nbsp;
### Delete A Book :


- **URL** : `/books/:id`

- **Method** : `DELETE`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : id

- **Body** : None


#### _Success Responses_


- **Condition** : The books exists and it is accesible.

- **Code** : `200 Ok`

- **Content** : `{ "message": "Book has been deleted" }`

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : The book with the given id does not exist.

- **Code** : `404 Not found`

- **Content** : `{"error": "Book not found"}`

#### OR

- **Condition** : The book could not be deleted.

- **Code** : `400 Bad Request`

- **Content** : `{"error": "Book could not be deleted"}`