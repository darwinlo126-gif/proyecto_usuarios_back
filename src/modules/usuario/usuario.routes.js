//importa el creador de rutas de express
///api/usuario
import { Router } from "express"; 

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo router de express para crear las rutas 
//la ruta tiene dos parametros, la ruta en si mismaa y el metodo que la resuelve 
router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioId);
router.post("/usuarios", usuarioCtr.crearUsuario);
router.delete("/usuarios/:id", usuarioCtr.borrarUsuario);
router.put("/usuarios/:id", usuarioCtr.actualizarUsuario);

export default router;
