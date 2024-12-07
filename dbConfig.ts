import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  password: process.env.DB_PASSWORD || '',
  username: process.env.DB_USERNAME || 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  database: 'learn_nest',
  synchronize: true,
  logging: true,
};
