import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret', // Cambia esto a una clave secreta más segura
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // 1 hora
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.enableCors({
    origin: 'http://localhost:5173', // Asegúrate de que esta URL sea la correcta para tu frontend
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
