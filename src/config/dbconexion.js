//administra la conexion con la base de datos
// usam os la libreria mysql2 para interactuar con MYSQL
//esta libreria me permite  implementar consultas , transacciones ,
//procedimeintos almacenados, etc.
//una mejor opcion es usar un ORM : son librerias con clases independientes 
//del motor de bases de datos
// import mysql from "mysql2/promise"; //importamos la libreria 

// // creamos una constante POOL 
// const pool = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "app_usuario",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
//     timezone: "Z",
//   dateStrings: true,
//   decimalNumbers: true,
// });

// export default pool;
import mysql from "mysql2/promise"; // importamos la libreria
//creamos una constante POOL
const pool = mysql.createPool({
  host: "localhost" || process.env.APP_HOST,
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
  user: process.env.MYSQL_ADDON_USER || "root&quot",
  password: process.env.MYSQL_ADDON_PASSWORD || "",
  database: process.env.MYSQL_ADDON_DB || "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});
export default pool;