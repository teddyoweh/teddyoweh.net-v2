/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';

import { APIModules } from './modules';
import { Env } from './env';
import mongoose from 'mongoose';
import os, {platform } from 'os'
const env = new Env();


async function bootstrap() {
  const app = await NestFactory.create(APIModules);
 
  mongoose.connect(env.env().URI).then(
    () => {
      
      console.log('Database is connected');
    },
    (err) => {
      console.log('Can not connect to the database' + err);
    },
  );

  app.enableCors();
  const server = await app.listen(80,'0.0.0.0');
  const address = server.address();
  const host = address.address;
  const port = address.port;

  console.log(`Server running at http://${env.ip()}:${port}`);
 

}
bootstrap();
