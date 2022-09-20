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
route.put('/', putEmploye);
route.delete('/', deleteEmploye);

export default route;
