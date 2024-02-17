const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

// Configura o Express para servir arquivos estáticos a partir do diretório 'public'
app.use('/public', express.static('public'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/index.html'))
});
router.get('/catalogo', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages/catalogo.html'))
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor em Funcionamento!");
});
