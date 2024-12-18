import express from 'express'

import { router } from './routes';
import { debConection } from './mongo';

const app = express();

//middleware
app.use(express.json())

//Rutas - endpoints ---------------------------------------------------------------------------
app.use(router);


app.listen(3000, function (){
    
    console.log("Servidor corriendo en el puerto 3000")
});

debConection().then(function (){

    console .log("conectado a MongoDb")
})
