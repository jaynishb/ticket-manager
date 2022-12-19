import { MigrationInterface, QueryRunner } from "typeorm";

export class seedTicketsToDb1671435254770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
