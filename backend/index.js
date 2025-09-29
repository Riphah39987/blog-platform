// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.get('/posts', (req, res) => res.json(posts));
app.post('/posts', (req, res) => {
  posts.push(req.body);
  res.status(201).json({ message: 'Post added' });
});

app.listen(4000, () => console.log('Backend running on port 4000'));
