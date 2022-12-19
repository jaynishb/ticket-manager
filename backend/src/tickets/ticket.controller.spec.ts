import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { Ticket } from './ticket.entity';
import { TicketService } from './ticket.service';

describe('TicketController', () => {
    let ticketController: TicketController;
    let ticketService: TicketService;

    beforeEach(async () => {
        const ticket: TestingModule = await Test.createTestingModule({
            controllers: [TicketController],
            providers: [TicketService, {
                provide: getRepositoryToken(Ticket),
                useValue: {
                    find: jest.fn()
                }
            }],
        }).compile();

        ticketController = ticket.get<TicketController>(TicketController);
        ticketService = ticket.get<TicketService>(TicketService);
    });

    describe('getTickets', () => {
        it('should call getTickets', async () => {
            const tickets = [new Ticket()]
            jest.spyOn(ticketService, 'getTickets').mockResolvedValue(tickets);

            expect(await ticketController.getTickets()).toEqual(tickets);

            expect(ticketService.getTickets).toHaveBeenCalled()
        });
    });

    describe('getTicketById', () => {
        it('should call getTicketById with valid param', async () => {
            const ticket = new Ticket()
            jest.spyOn(ticketService, 'getTicketById').mockResolvedValue(ticket);

            expect(await ticketController.getTicketById(ticket.id)).toEqual(ticket);

            expect(ticketService.getTicketById).toHaveBeenCalledWith(ticket.id)
        });
    });
});
