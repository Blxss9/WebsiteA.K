// ESTE ARCHIVO CONTIENE TODO LO RELACIONADO A LAS RUTAS EXISTENTES
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

router.get('/servicios', (req, res) => {
    res.render('servicios');
});

router.get('/galeria', (req, res) => {
    res.render('galeria');
});

export default router;