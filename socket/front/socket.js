const socket = io()
console.log(socket)


socket.on('vehicle_data', (data) => {
    console.log(data)
})
