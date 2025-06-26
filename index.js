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


app.delete('/delete/book/', (req,res)=>{
    console.log(req.body)
    const {del} = req.body
    if (del) {
    const ind = parseInt(del)
    books.splice(ind,1)
    console.log(books)
    res.send('success')
    }
    else{
        res.send('fail')
    }
})

app.put('/put/book/', (req, res) => {
    console.log(req.body)
    const {p} = req.body
    const {id} = req.body
    let i = parseInt(id)
    if (p && books[i]){
        books[i] = p
        console.log(books)
        res.send('success')
    } else{
        res.send('fail')
    }
})


app.listen(port,()=>{
    console.log('app is listening')
})