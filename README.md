# Henry-OverFlow API

## Estos son los ENDPOINTS disponibles hasta el momento:
<br/>

__USERS__

  - GET, POST http://localhost:3001/users
  - GET, PUT http://localhost:3001/users/{idUser}

__POSTS__

  - GET http://localhost:3001/posts
  - POST http://localhost:3001/posts/{idUser}
  - GET, PUT, DELETE http://localhost:3001/posts/{idPost}
  
__COMMENTS__

  - POST http://localhost:3001/comments/{idPost}/{idUser}
  - PUT, DELETE http://localhost:3001/comments/{idComment}

__TAGS & MODULES__

  - GET http://localhost:3001/modules
  - GET http://localhost:3001/tags
