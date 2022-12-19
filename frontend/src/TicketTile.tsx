import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Ticket } from './TicketList';

export const TicketTile = ({ id, title, description }: Ticket) => {
    return (
        <Link to={`/tickets/${id}`}>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}