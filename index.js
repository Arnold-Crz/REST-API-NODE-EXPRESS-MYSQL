import express from 'express';
import morgan from 'morgan';
import employesRoutes from './src/routes/employes.routes.js';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/employes', employesRoutes);

const PORT = 3000;
app.listen(PORT);
console.log(`Server on Port: http://localhost:${PORT}`);
