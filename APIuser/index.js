const app = require('express')();
const PORTS = 3001;

app.get('/users', (req, res) => res.send('USER API: works fine!!!'));
app.get('/users/second', (req, res) => res.send('USER API: second route works fine!!!'));

app.listen(3001, () => console.log(`Users API listening on port ${PORTS}!`));