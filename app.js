const express = require('express')
const app = express()
const port = 5050
const { Author, Book } = require('./models')

app.get('/', (req, res) => {
    Author.findAll({
        include: [Book]
    })
    .then(author=> {
        res.send(author)
    })
    .catch(err => {
        res.send(err)
    })
})

app.listen(port, ()=> console.log('mulai...'))