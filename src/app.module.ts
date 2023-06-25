import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'main',
      password: 'rootmain123',
      database: 'MARKETDB',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
