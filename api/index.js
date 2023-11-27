const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json()); // todos os dados que irão chegar já serão convertidos em JSON

const port = 3000;

app.get('/teste', (req, res) => res
	.status(200)
	.send({'mensage': 'Boas vindas a API'
	}));

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));

module.exports = app;