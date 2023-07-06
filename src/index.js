import express from "express";
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/users.js';
import { RecipeRouter } from './routes/recipes.js';

const app = express();
dotenv.config();
const port = process.env.PORT;


app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", RecipeRouter);

app.get('/', (req, res) => {
    return res.json("Hello World");
})


mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log("successfuly conected with database");
}).catch((e) => console.log(e));

app.listen(port || 3000, () => console.log(`server running on http://localhost:3000` ));


