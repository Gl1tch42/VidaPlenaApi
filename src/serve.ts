import { connect } from 'mongoose';
import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes/index.routes";

// import dotenv from "dotenv/config.js";
require('dotenv').config();

const app = express();

// serve configuration
app.use(helmet());
app.use(cors(
    {
        origin: '*',
    }
));
app.use(express.json());

// start routes
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

// mongo connection

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/VIDA_PLENA';

connect(url, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

}, err => {
    if (err) throw err
    console.log('dataBase are connect!');
});