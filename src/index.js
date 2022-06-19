import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())

const users = []
const tweets = []

function newUser(user) {
    return {
        username: user.username,
        avatar: user.avatar
    }
}

app.post('/sign-up', (req, res) => {

})

app.post('/tweets', (req, res) => {

})

app.get('/tweets', (req, res) => {
    
})

app.listen(5000)