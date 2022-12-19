import { TicketStatus } from './ticket-status.enum';
export declare class Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
