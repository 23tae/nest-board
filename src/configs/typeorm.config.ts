import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: '172.17.0.3',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}