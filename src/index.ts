import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static('public'))
const server = http.createServer(app);

app.get('/api/:text', (req, res) => {
    let text = req.params["text"];
    res.send(text);
})

server.listen(PORT);