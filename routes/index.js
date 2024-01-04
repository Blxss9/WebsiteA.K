// ESTE ARCHIVO CONTIENE TODO LO RELACIONADO A LAS RUTAS
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('¡Hola, mundo, este es el inicio!');
});

router.get('/nosotros', (req, res) => {
    res.send('nosotros');
});

router.get('/contacto', (req, res) => {
    res.send('contacto');
});

export default router;