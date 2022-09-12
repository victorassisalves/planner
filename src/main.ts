import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { useContainer } from 'class-validator';

const serviceAccount = require('../firebase-auth.json');

// Initialize Firebase
initializeApp({ credential: cert(serviceAccount) });

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const db = getFirestore();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
