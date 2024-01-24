import express from 'express'
import router from './router'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`Server listen on ${process.env.PORT} PORT`)
})