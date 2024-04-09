import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./Routes/web.js";
import session from 'express-session';
import MongoStore from "connect-mongo";


const app = express()

app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/Demo_1' }),
    secret: 'this is secret',
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
}));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(routes)


mongoose.connect('mongodb://localhost:27017/Demo_1')

app.listen(5000, () => {
    console.log('server running');
})