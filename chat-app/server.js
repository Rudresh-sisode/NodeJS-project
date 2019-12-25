const express=require('express')
const http=require('http')
const app=express()

const server=http.createServer(app)
const io=require('socket.io')(server)
//now the connection o fclient and erver makes it as full duplex

server.listen(8080,()=>{
    console.log('server listening onport 8080')
})
//web socket, if any client connect handle the connection
io.sockets.on('connection',(socket)=>{

    console.log('new person connected')

    socket.on('send message',(data)=>{
        console.log("message received ",data)

    })
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})