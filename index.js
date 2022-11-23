require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const userController = require('./controllers/userController.js');
const categoryController = require('./controllers/categoryController.js');
const postController = require('./controllers/postController.js');

const validateUserInfo = require('./middlewares/validateUserInfo');
const validateLoginFields = require('./middlewares/validateLoginFields');
const validateJWT = require('./middlewares/validateJWT');
const validatePostInfo = require('./middlewares/validatePostInfo');

app.use(express.json());
app.use(cors());

app.listen(3300, () => console.log('Hellooo Prgm Team!'));

app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateUserInfo, userController.create);

app.post('/login', validateLoginFields, userController.login);

app.get('/user', validateJWT, userController.getAll);

app.get('/user/:id', validateJWT, userController.getById);

app.post('/categories', validateJWT, categoryController.create);

app.get('/categories', validateJWT, categoryController.getAll);

app.post('/post', validateJWT, validatePostInfo, postController.create);

app.get('/post', postController.getAll);
