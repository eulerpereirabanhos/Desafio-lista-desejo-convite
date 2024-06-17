const express = require('express');
const bodyParser = require('body-parser');
const desejosRoutes = require('./routes/desejosRoutes');
const conviteRoutes = require('./routes/conviteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', desejosRoutes);
app.use('/api', conviteRoutes);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
