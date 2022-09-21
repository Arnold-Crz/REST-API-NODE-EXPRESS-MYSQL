import { Router } from 'express';
import {
  deleteEmploye,
  getEmploye,
  getEmployes,
  postEmploye,
  putEmploye,
} from '../controllers/employes.controllers.js';

const route = Router();

route.get('/', getEmployes);
route.get('/:id', getEmploye);
route.post('/', postEmploye);
route.put('/:id', putEmploye);
route.delete('/:id', deleteEmploye);

export default route;
