
import { initialTickets } from "@/data";


// Type interface for component
type TicketPageProps = {
    params: {
        ticketId: string;
    };
};

// Component to display ticket details
const TicketPage = ({params}:TicketPageProps) => {
    const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
    if (!ticket) {
      return <p>Ticket not found</p>;
    }
    // Display ticket details
    return (
      <div>
        <h2 className="text-lg">Ticket Page {params.ticketId} </h2>
        <p><strong>Title: </strong>{ticket.title}</p>
        <p><strong>Id: </strong>{ticket.id}</p>
        <p><strong>Content: </strong>{ticket.content}</p>
        <p className="text-sm text-gray-500"><strong>Status: </strong> {ticket.status}</p>
      </div>
    );
  }
  
  export default TicketPage;