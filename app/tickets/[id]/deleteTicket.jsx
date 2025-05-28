"use client";

import { useRouter } from "next/navigation";

export default function DeleteTicket({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this ticket?"
    );
    if (!isConfirmed) return null;
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
      alert("Ticket deleted successfully.");
      router.push("/tickets");
    } else {
      alert("Failed to delete the ticket.");
    }
  };

  return (
    <button className="btn-danger ml-auto" onClick={handleDelete}>
      Delete Ticket
    </button>
  );
}
