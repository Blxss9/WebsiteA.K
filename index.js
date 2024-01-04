import express, { Router } from 'express';
import router from './routes/index.js';

const app = express();

// Puerto:
const port = process.env.PORT || 4000;

// Router:
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
