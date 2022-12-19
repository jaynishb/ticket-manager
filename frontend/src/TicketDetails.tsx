import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Ticket, TicketStatus } from "./TicketList";

export const TicketDetails = () => {
    const [loading, setLoading] = useState(true)
    const [ticket, setTicket] = useState<Ticket>()

    const { id } = useParams();

    const baseUrl = `http://localhost:5001/tickets/${id}`

    const getTicket = async () => {
        setLoading(true);
        const { data } = await axios.get(baseUrl)
        setTicket(data);
        setLoading(false);
    }

    const updateTicket = async (ticket: Partial<Ticket>) => {
        setLoading(true);
        const { data } = await axios.patch(baseUrl, ticket)
        setTicket(data);
        setLoading(false);
    }

    useEffect(() => {
        getTicket()
    }, [])

    const updateStatus = async ({ target }: any) => {
        const value: TicketStatus = target.value;
        updateTicket({ ...ticket, status: value })
    }

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <Container>
            <Row>
                <Col md="8">
                    <h2>{ticket?.title}</h2>
                </Col>
                <Row>
                    <Col md="8">
                        <span>{ticket?.description}</span>
                    </Col>
                    <Col md="4">
                        <Form.Select size={'sm'} onChange={updateStatus} value={ticket?.status} aria-label="Default select example">
                            {Object.keys(TicketStatus).map(status => (
                                <option value={status}>{status}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}