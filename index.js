const express = require('express');
const cors = require('cors');
const generateUsers = require('./usersGenerator');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/generate', (req, res) => {
    const { seed, page, nat, results, errors } = req.query;

    generateUsers(page, seed, nat, results, errors);
});

const start = async () => {
    try {
        app.listen(PORT, () =>
            console.log(`server started on the port ${PORT}`)
        );
    } catch (err) {
        console.log(err);
    }
};

start();
