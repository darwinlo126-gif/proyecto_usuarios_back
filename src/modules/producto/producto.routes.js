//importa el creador de rutas de express
///api/usuario
import { Router } from "express"; 

import * as productoCtr from "./producto.controller.js";

const router = Router(); //uso el metodo router de express para crear las rutas 
//la ruta tiene dos parametros, la ruta en si mismaa y el metodo que la resuelve 
router.get("/productos", productoCtr.obtenerProducto);
router.get("/productos/:id", productoCtr.productoId);
router.post("/productos", productoCtr.crearProducto);
router.delete("/productos/:id", productoCtr.borrarProducto);
router.put("/productos/:id", productoCtr.actualizarProducto);

export default router;
