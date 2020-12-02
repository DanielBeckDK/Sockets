const express = require("express");
const app = express();
const server = require('http').createServer(app);

const path = require("path");

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("succes");
    socket.on("client sent a message", (res) => {
        socket.broadcast.emit("client sent a message", { res });
    });
});

app.get("/chat", (req, res) => {
    return res.sendFile(path.join(__dirname, "chat.html"));
})

server.listen(8080, (error) => {
    console.log("Server is running on port 8080");
});