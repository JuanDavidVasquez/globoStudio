import express from "express";
const router = express.Router();
import {
    crearPunto,
    obtenerPunto,
    obtenerPuntos,
    editarPunto,
    eliminarPunto
} from '../controllers/puntoController.js';

import checkAuth from '../middleware/checkAuth.js';

router.get('/', obtenerPuntos);
router.post('/new-punto', checkAuth, crearPunto);
router.get('/:id', obtenerPunto);
router.put('/:id', checkAuth, editarPunto);
router.delete('/:id', checkAuth, eliminarPunto);

export default router;