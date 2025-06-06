import { notFound } from "next/navigation";
import DeleteTicket from "./deleteTicket";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function deleteTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    method: "DELETE",
  });

  console.log(res.status);

  if (res.status === 201) {
    // throw new Error("Failed to delete ticket");
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <DeleteTicket id={ticket.id} />
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
