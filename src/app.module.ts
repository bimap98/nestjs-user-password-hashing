import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type : 'postgres',
    host : process.env.POSTGRES_HOST,
    port : parseInt(process.env.POSTGRES_PORT),
    username : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DB,
    entities : [
        User
    ],
    synchronize : true
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
