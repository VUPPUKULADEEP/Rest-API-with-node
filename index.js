const express = require('express');


const app = express()

app.use(express.json())
const port = 3000

const books = ['maths', 'physics', 'science']


app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/book/:id', (req, res) => {
    const {id} = req.params
    res.send(books[id])
})

app.post('/book/', (req,res)=>{
    console.log(req.body)
    const {book} = req.body
    if (book){
        books.push(book)
        console.log(books)
        res.send('success')
    }
    else{
    res.send('fail')
    }
})

app.listen(port,()=>{
    console.log('app is listening')
})