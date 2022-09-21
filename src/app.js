import express from 'express';
import morgan from 'morgan';
import employesRoutes from './routes/employes.routes.js';
import homeRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/', homeRoutes);
app.use('/api/employes', employesRoutes);

//? ruta que no exista
app.use((_, res, next) => {
  res.status(404).json({ messages: 'endpoint not found' });
});

export default app;
