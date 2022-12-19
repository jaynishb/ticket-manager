import { DeepPartial } from 'typeorm';
import { Ticket } from './ticket.entity';
import { TicketService } from './ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    getTickets(): Promise<Ticket[]>;
    getTicketById(ticketId: string): Promise<Ticket>;
    updateTicketDetails(ticketId: string, ticket: DeepPartial<Ticket>): Promise<Ticket>;
}
