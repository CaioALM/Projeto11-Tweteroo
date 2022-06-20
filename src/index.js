import express, { json } from 'express'
import cors from 'cors'
import chalk from 'chalk'


const app = express()
app.use(cors())
app.use(json())

const users = []
const tweets = []

app.post('/sign-up', (req, res) => {
  const user = req.body

  if(user.username === '' || user.avatar === '') {
    res.sendStatus(400).send('Todos os campos são obrigatórios!')
    return
  }
  users.push(user)
  tweets.length === 11 && tweets.slice(0, 1)
  res.sendStatus(201)
})

app.post('/tweets', (req, res) => {
    const received = req.body

    if (received.tweet === '' || received.username === '') {
        res.sendStatus(400).send('Todos os campos são obrigatórios!')
        return
    }
    tweets.push(received)
    res.sendStatus(201)

})

app.get('/tweets', (req, res) => {
    let sends = []
    tweets.map( (tweet) => {
        const findUser = users.find(user => tweet.username === user.username)
        sends.push({...tweet, avatar: findUser.avatar})
    })
    res.send(sends.slice(-10).reverse())

})

app.listen(5000, () => {
    console.log(chalk.bold.green('Server Online'))
})