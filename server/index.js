const express = require('express')
const app = express()
const messageCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = "/api/messages"

app.post(messagesBaseUrl, messageCtrl.create)

app.get(messagesBaseUrl, messageCtrl.read)

app.put(`${messagesBaseUrl}/:id`, messageCtrl.update)

app.delete(`${messagesBaseUrl}/:id`, messageCtrl.delete)


const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port} `)
})
