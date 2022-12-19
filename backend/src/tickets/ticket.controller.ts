import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { Ticket } from './ticket.entity';
import { TicketService } from './ticket.service';

// Ignoring authentication for now

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async getTickets(): Promise<Ticket[]> {
    const tickets = await this.ticketService.getTickets();
    return tickets;
  }

  @Get(':ticketId')
  getTicketById(
    @Param('ticketId') ticketId: string,
  ): Promise<Ticket> {
    return this.ticketService.getTicketById(ticketId);
  }

  @Patch(':ticketId')
  updateTicketDetails(
    @Param('ticketId') ticketId: string,
    @Body() ticket: DeepPartial<Ticket>,
  ): Promise<Ticket> {
    return this.ticketService.updateTicketById(ticketId, ticket);
  }
}
