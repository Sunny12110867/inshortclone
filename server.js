import express from 'express';
import Connection from './datatbase/db.js';
import DefaultData from './default.js'
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(cors());
app.use('/', Route);

if(process.env.NODE_ENV=== 'production'){
    app.use(express.static("client/build"));
}
const PORT = process.env.port || 8000;

const username =process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL =process.env.MONGODB_URL || `mongodb://${username}:${password}@ac-f4gent8-shard-00-00.efsrw12.mongodb.net:27017,ac-f4gent8-shard-00-01.efsrw12.mongodb.net:27017,ac-f4gent8-shard-00-02.efsrw12.mongodb.net:27017/DEMO?ssl=true&replicaSet=atlas-svryga-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);
app.listen(PORT, ()=> console.log(`server is runnings succefully on port ${PORT}`));

DefaultData();

