const express = require('express');
const cors = require('cors');
// const generateUsers = require('./usersGenerator');

const generateRouter = require('./routers/generateRouter');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', generateRouter);

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
