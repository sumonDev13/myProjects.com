import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/dbConnect.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.json('Backend successfully running');
});

app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})