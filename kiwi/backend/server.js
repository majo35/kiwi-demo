const express = require('express')
const combinations = require('./t9service')
const app = express()
const cors = require('cors')

const port = 4000
app.use(cors())

//Todo endpoit rename api/t9 ?
app.get('/', (req, res) => {
    req.query ? res.send(combinations(req.query.number)) : res.send('My Server')
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))