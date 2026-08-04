import express from 'express';

const app = express();
let PORT = 8080;

app.get('/', (req, res) => {
    res.send("server running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});