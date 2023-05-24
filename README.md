# Sequelize Author API
This API allows you to perform CRUD operations on a database of authors. 

## Endpoints
The following section provides information on the available endpoints for this API. 

### Create an Author

**Method**: ```POST```

**Endpoint**: ```/api/authors```

**Description**: This endpoint creates a new author with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "nationality": "string",
  "genre": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "nationality": "string",
  "genre": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Authors and Associated Books

**Method**: GET

**Endpoint**: ```/api/authors```

**Description**: This endpoint retrieves all the authors and their associated books stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "nationality": "string",
    "genre": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "books": [
      {
        "id": integer,
        "title": "string",
        "genre": "string",
        "authorId: integer,
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  },
]
```

### Update an Author

**Method**: ```PUT```

**Endpoint**: ```/api/authors/:id```

**Description**: This endpoint updates the author with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "nationality": "string",
  "genre": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "nationality": "string",
  "genre": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete an Author

**Method**: ```DELETE```

**Endpoint**: ```/api/authors/:id```

**Description**: This endpoint deletes the author with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "nationality": "string",
  "genre": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Create a Book

**Method**: ```POST```

**Endpoint**: ```/api/authors/:id/books```

**Description**: This endpoint creates a new book that is associated with an author with the provided information in the request body.

Request Body:
```
{
  "title": "string",
  "genre": "string"
}
```

Response:
```
{
  "id": integer,
  "title": "string",
  "genre": "string",
  "authorId": integer,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```
