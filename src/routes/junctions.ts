import * as express from 'express';
import { query } from '../db';

const junctionsRoute = express.Router();

junctionsRoute.get('/', async (req, res) => {
  const ret = await query('select * from junction_info;');

  res.json(ret.rows);
});

export default junctionsRoute;
