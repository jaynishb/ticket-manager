"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedTicketsToDb1671435254770 = void 0;
class seedTicketsToDb1671435254770 {
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO public.tickets
        (id, title, description, status, "createdAt", "updatedAt")
        VALUES(uuid_generate_v4(), 'Show all the tickets on dashboard', 'Show ticket tiles on ticket manager dashboard', 'OPEN'::tickets_status_enum, now(), now())`);
        await queryRunner.query(`INSERT INTO public.tickets
        (id, title, description, status, "createdAt", "updatedAt")
        VALUES(uuid_generate_v4(), 'Open single ticket', 'Open single ticket when user clicks to ticket tile', 'OPEN'::tickets_status_enum, now(), now())`);
        await queryRunner.query(`INSERT INTO public.tickets
        (id, title, description, status, "createdAt", "updatedAt")
        VALUES(uuid_generate_v4(), 'update ticket status', 'User should be able to update the ticket status', 'OPEN'::tickets_status_enum, now(), now())`);
    }
    async down(queryRunner) {
    }
}
exports.seedTicketsToDb1671435254770 = seedTicketsToDb1671435254770;
//# sourceMappingURL=1671435254770-seed-tickets-to-db.js.map