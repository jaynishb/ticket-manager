import * as dotenv from 'dotenv'

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './tickets/ticket.entity';
import { TicketModule } from './tickets/ticket.module';

dotenv.config()

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Ticket],
    synchronize: true,
  }), TicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
