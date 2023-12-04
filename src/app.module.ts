import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AppGateway } from './app/app.gateway';
import { AuthModule } from './modules/auth/auth.module';
import * as cors from 'cors';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {
  configure(consumer) {
    if (process.env.NODE_ENV === 'development') {
      consumer.apply(cors()).forRoutes('*');
    }
  }
}
