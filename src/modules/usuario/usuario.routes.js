//importa el creador de rutas de express
///api/usuario
import { Router } from "express"; 

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo router de express para crear las rutas 
//la ruta tiene dos parametros, la ruta en si mismaa y el metodo que la resuelve 
router.get("/usuarios", usuarioCtr.obtenerUsuarios);

export default router;
