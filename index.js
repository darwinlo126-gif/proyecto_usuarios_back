import express from "express"; // importamos la libreria
import cors from "cors";
import rutausuario from "./src//modules/usuario/usuario.routes.js";
import rutaproducto from "./src/modules/producto/producto.routes.js"
//creamos una instancia de la libreria express en la constante app
const app = express(); // metodo contructor de la libreria
const PORT = 4100; //puerto donde desplegaremos el server
// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body

app.use(cors());

app.use("/api", rutausuario);
app.use("/api", rutaproducto);
app.listen(PORT, () => {
  console.log(`SERVIDOR iniciado en el puerto ${PORT}`);
});

// enpoints o recursos de la api REST
// app.use('/user', ( req, res) =>{
//   res.send('QUE SE DICE CHACHOS')

// })
//  app.use('/usuario/todos', ( req, res) =>{
//    res.json([{
//      id: 1,
//      nombre : "camilo",
//      apellido: "Otalvaro",
//      Estado: false

//    },
//    {
//      id: 2,
//      nombre : "milo",
//      apellido: "Otalvaro",
//      Estado: false

//    },
// {
//      id:3,
//      nombre : "darwin",
//      apellido: "Otalvaro",
//      Estado: false

//    }])

//  })
// app.use('/error',(req,res)=>{

//     res.status(400).send({
//         mensaje: "el recurso solicitado no existe "

//     })
// })
