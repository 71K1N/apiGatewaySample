const app = require('express')();
const PORT = 3002

app.get('/products', (req, res) => res.send('Hello Products API'));

app.listen(PORT, () => console.log(`Products API listening on port ${PORT}!`));