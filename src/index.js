const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// para ja tratar json (request.body)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);