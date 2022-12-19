"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let TicketService = class TicketService {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async findOne(id) {
        return this.ticketRepository.findOne({ id });
    }
    async findOneOrFail(id) {
        return this.ticketRepository.findOneOrFail({ id });
    }
    async addTicket(ticket) {
        return this.ticketRepository.save(ticket);
    }
    async getTickets() {
        return this.ticketRepository.find();
    }
    async getTicketById(id) {
        return this.ticketRepository.findOneOrFail({ id });
    }
    async updateTicketById(id, data) {
        const feature = await this.ticketRepository.findOneOrFail({
            id,
        });
        return this.ticketRepository.save(Object.assign(Object.assign({}, feature), data));
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map