import { WebSocketServer } from "ws";
import prisma from "@repo/db/prisma"

const server = new WebSocketServer({
    port: 3002
});

server.on("connection", async (socket) => {
    try{
        await prisma.user.create({
            data: {
                name: Math.random().toString(),
                username: Math.random().toString(),
                password: Math.random().toString(),
            }
        })
        console.log("User added from ws")
    }catch(e){
        console.error(e)
    }
    socket.send("Hi there, you are connected to the server")
})