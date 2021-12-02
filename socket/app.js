require('dotenv').config()
const nats = require('./natsConnection')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.SOCKET_SERVER_PORT || 3001

server.listen(PORT, () => {
    console.log(`SOCKET server listening on port ${PORT}`)
})

app.get('/test', (req, res) => {
    return res.sendFile(__dirname + '/front/socket_test.html')
})
app.use(express.static(__dirname + '/front'))

io.on('connection', (socket) => {
   nats.subscribe('vehicle.test-bus-1', (data) => {
       socket.emit('vehicle_data', { data })
   })
})
