import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketService {

    constructor(
        @InjectRepository(Ticket)
        private readonly ticketRepository: Repository<Ticket>,
    ) {}

    async findOne(id: string) {
        return this.ticketRepository.findOne({ id });
    }

    async findOneOrFail(id: string) {
        return this.ticketRepository.findOneOrFail({ id });
    }

    async addTicket(ticket: Ticket) {
        return this.ticketRepository.save(ticket);
    }

    async getTickets(): Promise<Ticket[]> {
        return this.ticketRepository.find();
    }

    async getTicketById(id: string): Promise<Ticket> {
        return this.ticketRepository.findOneOrFail({ id });
    }

    async updateTicketById(
        id: string,
        data: DeepPartial<Ticket>
    ): Promise<Ticket> {
        const feature = await this.ticketRepository.findOneOrFail({
            id,
        });
        return this.ticketRepository.save({ ...feature, ...data });
    }
}
