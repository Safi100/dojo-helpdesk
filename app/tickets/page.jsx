import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Ticket</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
