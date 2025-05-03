
import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
    return (
      <div>
        { initialTickets.map((ticket) => (
          <div key={ticket.id} className="border-b-2 p-4 border-gray-200 py-4">
            <h2 className="text-lg">{ticket.title}</h2>
            <Link
              href={ticketPath(ticket.id)} >
              View Ticket
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default TicketsPage;