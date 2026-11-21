
import express from 'express';
import connectDB from './config/db.js';
const app = express();
const PORT = 3000;

app.use(express.json());

await connectDB();
app.get('/', (req,res) =>{
  res.send("server is running");
});


app.listen(PORT, ()=>{
  console.log("running on port no 3000");
});