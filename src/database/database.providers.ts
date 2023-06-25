import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/entities/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3000,
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: 'MARKETDB',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
