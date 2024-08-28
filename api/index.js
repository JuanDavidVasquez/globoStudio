import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectarDB from "./config/db.js";
import usuarioRoute from './routes/usuarioRoutes.js';
import categoriaRoute from './routes/categoriaRoutes.js';
import productoRoute from './routes/productoRoutes.js';
import orderRoute from './routes/orderRoutes.js';
import orderItemRoute from './routes/orderItemRoutes.js';
import roleRoute from './routes/roleRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

connectarDB();

/* 
const PORT = process.env.PORT || 4000;
const whitelist = ["http://127.0.0.1:5173"];
const blacklist = [];
*/

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  app.use(cors(corsOptions));

//Routing

app.use('/api/usuarios', usuarioRoute);
app.use('/api/categorias', categoriaRoute);
app.use('/api/productos', productoRoute);
app.use('/api/orders', orderRoute);
app.use('/api/order-items', orderItemRoute);
app.use('/api/role', roleRoute);

app.get('/api/prueba', (req, res) => {
    res.send('Node.js funciona OK ^_^');
});


const PORT = process.env.PORT || 4000;

const servidor = app.listen(4000, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
});
