const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const corsOptions = require('./config/corsOptions');
const generateRouter = require('./routers/generateRouter');

const app = express();

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
    history({
        // index: '/index.html',
        disableDotRule: true,
    })
);

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
