import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CatsModule } from './cats/cat.module';

@Module({
  imports: [ConfigModule, CatsModule],
})
export class AppModule {}
