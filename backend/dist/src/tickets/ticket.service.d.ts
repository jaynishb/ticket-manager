import { DeepPartial, Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
export declare class TicketService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    findOne(id: string): Promise<any>;
    findOneOrFail(id: string): Promise<any>;
    addTicket(ticket: Ticket): Promise<any>;
    getTickets(): Promise<Ticket[]>;
    getTicketById(id: string): Promise<Ticket>;
    updateTicketById(id: string, data: DeepPartial<Ticket>): Promise<Ticket>;
}
