const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname ));

app.get('/', (req, res) => res.send('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))