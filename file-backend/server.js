const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config({path:'.env'});

const app = express();
const corsOption = {
    origin : process.env.CLIENT_ORIGEN || 'http://7zone.co.kr'
};

app.use(express.json());
app.use(cors(corsOption));

app.get('/', (req, res) => {

    res.send('hello server');
})


const port = 5000;
app.listen(port, () => {
    console.log(`server is ready ${port}`);
});