import express, { Router } from 'express';
import router from './routes/index.js';

const app = express();

// Puerto:
const port = process.env.PORT || 4000;

// PUG:
app.set('view engine', 'pug');

// Obtener año actual:
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.añoActual = year.getFullYear();
    next();
});

// Public Folder
app.use(express.static('public'))

// Router:
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
