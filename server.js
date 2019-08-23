const express = require('express');

const app = express();

app.get('/', (req, res) => (
	res.send('Server listen localhost:3001')
));

app.listen(3001);