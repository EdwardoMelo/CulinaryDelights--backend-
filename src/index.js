import express from "express";
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
    return res.json("Hello World");
})

mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log("successfuly conected with database");
}).catch((e) => console.log(e));

app.listen(port || 3000, () => console.log(`servidor em http://localhost:3000`));


