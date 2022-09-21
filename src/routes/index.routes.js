import { Router } from 'express';
import { getHome } from '../controllers/index.controllers.js';
const route = Router();

route.get('/', getHome);

export default route;
