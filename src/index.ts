import { PrismaClient } from '@prisma/client';
import express from 'express';
import { Request, Response } from 'express';

import { IndexRouter } from './routes/index_router';
import { UserRouter } from './routes/user_router';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use('/',IndexRouter);
app.use('/users',UserRouter);

app.listen(3000, () => {
  console.log('server listening at http://localhost:3000')
})