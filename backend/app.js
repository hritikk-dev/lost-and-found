
import express from 'express'
import cors from 'cors'

const app = express()

// Middleware
app.use(express.json())

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

// Test Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Campus Lost & Found API is running'
  })
})

export default app
