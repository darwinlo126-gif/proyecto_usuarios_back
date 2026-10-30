//importamos la cadena de conexion de la bd
import db from "../../config/dbconexion.js";
import bcrypt from "bcryptjs";

export const productoModel = {
  findALL: async () => {
    const sql = "SELECT * FROM productos";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql);

    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM productos WHERE codigo=?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM productos WHERE codigo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    let codigo = data.codigo;
    //console.log(data);
    // validamos que el email no exista ! , el usuario lo validaremos por el
    codigo;
    const [codigoExiste] = await db.query(
      "SELECT * FROM productos WHERE codigo = ?",
      [codigo],
    );
    if (codigoExiste.length > 0) {
      //dispara el gestor de errores de node js y le crea el error   
      throw new Error("El producto ya está registrado");
    }
    const ProductoNuevo = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio,
    

    };
    const sql = "INSERT INTO productos SET ?";
    const [rows] = await db.query(sql, [ProductoNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE productos SET ? WHERE codigo= ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
