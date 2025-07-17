import express from "express";
import prisma from "@repo/db/prisma"

const app = express();
app.use(express.json());
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hi there")
})

app.post('/signup', async (req, res) => {
    const { name, username, password } = req.body

    try{
        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                password: password
            }
        })
        res.json({
            message: "Signup Successful!",
            id: user?.id
        })
    }catch(e){
        res.send(e)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on PORT - ${PORT}`)
})