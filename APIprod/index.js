const app = require('express')();
const PORT = 3002

app.get('/products', (req, res) => res.send('API PROD: works fine!!!'));
app.get('/products/second', (req, res) => res.send('API PROD: second route works fine!!!'));

app.listen(PORT, () => console.log(`Products API listening on port ${PORT}!`));