const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const projetos = [
      { link: 'https://github.com/AgileKrakens/DemoQuerycy', imagem:'/assets/img/demoquerycy.jpg' },
      { link: '/helpnei', imagem:'/assets/img/helpnei3.webp'}
    ];
  
    res.render('index', {projetos: projetos});
  });

  app.get('/helpnei', (req, res) => {
    res.render('helpnei');
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
