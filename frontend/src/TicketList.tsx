import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { TicketTile } from "./TicketTile";

export enum TicketStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    CODE_REVIEW = 'CODE_REVIEW',
    CLOSED = 'CLOSED'
}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
}

export const TicketList = () => {
    const [tickets, setTickets] = useState<Ticket[]>([])

    useEffect(() => {
        axios.get('http://localhost:5001/tickets').then((response) => {
            setTickets(response.data);
        });
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container fluid="md">
                <h2>Tickets</h2>
                <Row>
                    {tickets.map((ticket, index) => {
                        return (<TicketTile key={`${ticket.title}-${index}`} {...ticket} />)
                    })}
                </Row>

            </Container>

        </div>
    );
}