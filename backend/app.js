import userRouter from './routes/user-route.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

export const app=express()
app.use(express.json())
dotenv.config()
app.use(cors({credentials:true}))
app.use(cookieParser())

app.use('/api/user',userRouter)
