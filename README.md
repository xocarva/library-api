# library-API

library-API is a simple restful API made by [Xoán Carneiro](https://github.com/xocarva) with Express/Node.js and MySQL for academic purposes. This project is licensed under the terms of the [GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Open Endpoints

Open endpoints require no authentication.

---



## Books related

* Show Accessible Books : `GET /books/`
* Show A Book : `GET /books/:id/`

&nbsp;

### Show Accesible Books :


- **URL** : `/books/`

- **Method** : `GET`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : None


#### _Success Responses_


- **Condition** : There are no accesible Books.

- **Code** : `200 OK`

- **Content** : `{[]}`.

##### OR

- **Condition** : There are accesible Books.

- **Code** : `200 OK`

- **Content example** :

```json
{
    "message": "ok",
    "data": {
        [
            {
                "id": 1,
                "title": "Extraordinary APIs",
                "author": "Jane Doe",
                "genre": "Guide",
                "publisher": "Bankrupt Publishing",
                "releaseYear": 2022
            },
            {
                "id": 2,
                "title": "Halitosis dragons: double nightmare",
                "author": "John Doe",
                "genre": "Fantasy",
                "publisher": "Bankrupt Publishing",
                "releaseYear": 2020
            }
        ]
    }
}
```

#### _Error Responses_


- **Condition** : Some condition.

- **Code** : `400 BAD REQUEST`

- **Content** : `{"error": "Error message"}`

&nbsp;
### Show A Book :


- **URL** : `/books/:id`

- **Method** : `GET`

- **Auth required** : No

- **Permissions required** : None

- **Query params** : id


#### _Success Responses_


- **Condition** : The books exists and it is accesible.

- **Code** : `200 OK`

- **Content example** :

```json
{
    "message": "ok",
    "data": {
        "id": 1,
        "title": "Extraordinary APIs",
        "author": "Jane Doe",
        "genre": "Guide",
        "publisher": "Bankrupt Publishing",
        "releaseYear": 2022
    }
}
```

#### _Error Responses_


- **Condition** : Something went wrong accesing database.

- **Code** : `500 Internal Server Error`

- **Content example** : `{"error": "Error message"}`

#### OR

- **Condition** : The book with the given id does not exist.

- **Code** : `400 Bad Request`

- **Content** : `{"error": "Book not found"}`
