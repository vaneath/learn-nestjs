import { User } from 'src/users/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: '',
  username: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  database: 'learn_nest',
  synchronize: true,
  logging: true,
};
