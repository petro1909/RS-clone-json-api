const jsonServer = require('json-server');

const db = {
    users: [
        {
            "login": "login1",
            "email": "email1@gmail.com",
            "password": "password1",
            "role": "admin",
            "id": 1
        },
        {
            "login": "login2",
            "email": "email2@gmail.com",
            "password": "password2",
            "role": "user",
            "id": 2
        },
        {
            "login": "login3",
            "email": "email3@gmail.com",
            "password": "password3",
            "role": "user",
            "id": 3
        },
    ],
    boards: [
      {
        "id": 1,
        "name": "project1"
      },
      {
        "id": 2,
        "name": "project2"
      }
    ],
    userBoards: [
      {
        "id": 1,
        "userId": 1,
        "boardId": 1
      },
      {
        "id": 2,
        "userId": 2,
        "boardId": 1
      },
      {
        "id": 3,
        "userId": 1,
        "boardId": 2
      }
    ],
    statuses: [
        {
          "id": 1,
          "name": "to do",
          "boardId": 1,
        },
        {
          "id": 2,
          "name": "in progress",
          "boardId": 1,
        },
        {
          "id": 3,
          "name": "done",
          "boardId": 1,
        },
        {
          "id": 4,
          "name": "to do",
          "boardId": 2,
        },
    ],
    tasks: [
      {
        "id": 1,
        "name": "task1",
        "statusId": 1,
      },
      {
        "id": 2,
        "name": "task2",
        "statusId": 1,
      },
      {
        "id": 3,
        "name": "task3",
        "statusId": 2,
      },
    ]
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});