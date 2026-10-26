## paso a paso 
-verificar version de node: node -v 
-inicializar el proyecto : npm init 
-crea el package json 
-cambiamos esta linea : "type": "module",para poder implementar modules de ES6
-paquetes basicos :npm i nodemon cors express mysql2
    -nodemon: solo para desarrollar! sirve para cambiar el codigo y que se actualice automaticamente 
    cors:setear la seguridad de interactuar con direcciones ip diferentes -http 7
    -express: libreria para crear un servidor rest (get,post,put,delete)
    -mysql2: esto es una libreria que permite hacer consultas de sql desde nodejs 


    -Cambiamos la secion scripts en package.json asi:
    "dev": "nodemon index.js",
    "start": "node index.js",
    con el fin de tener dos scripts de ejecucion, uno de desarrollo y uno de produccion(despliegue)