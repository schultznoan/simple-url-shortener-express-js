import express from 'express'
import router from './router'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import errorMiddleware from './middlewares/error/index'
dotenv.config()

const app = express()

app.use(express.json())

app.use(router)
app.use(errorMiddleware)

const init = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || '')

        app.listen(process.env.PORT, () => {
            console.log(`Server listen on ${process.env.PORT} PORT`)
        })
    } catch (error) {
        console.log(error)
    }
}

init()