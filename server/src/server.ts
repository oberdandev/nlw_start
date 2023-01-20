import Fastify from "fastify";
import {PrismaClient} from "@prisma/client"
import cors from '@fastify/cors'

const app = Fastify()
app.register(cors)
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    return 'hello world'
})

app.get('/habits', async (req, res) => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({port: 3333}, ()=> console.log('listening on port ' + 3333))
