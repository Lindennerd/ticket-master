import { TicketForm } from "@/components/Tickets/TicketForm";
import { TicketCreateInput } from "@/domain/Ticket/Ticket.entity";
import { useTicket } from "@/domain/Ticket/useTicket";
import { Box, Paper } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewTicketPage() {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const { createTicket } = useTicket();
  const handleSubmit = async (ticket: TicketCreateInput) => {
    setLoading(true);
    await createTicket(ticket);
    push("/");
  };

  return (
    <Paper shadow="xs" p="sm">
      {loading && "Saving your ticket, please wait"}
      <TicketForm onSubmit={handleSubmit} loading={loading} />
    </Paper>
  );
}
