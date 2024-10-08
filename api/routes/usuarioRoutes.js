import express from "express";
const router = express.Router();
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
  getUsuarios,
  updateUsuario,
  rutaTest,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

//Auth, Registro y Confirmación de usuarios

router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);

//manera compacta para que si es post use nuevoPassword y si es get use comprobarToken
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

//TODO rutas admin

router.get("/usuarios", checkAuth, getUsuarios);
router.put("/usuarios/:id", checkAuth, updateUsuario);

router.get("/test", rutaTest);

export default router;
