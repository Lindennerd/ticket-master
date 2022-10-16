import { Ticket, TicketStatus } from "@/domain/Ticket/Ticket.entity";
import { ActionIcon, Table } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons";
import { TicketListMenu } from "./TicketListMenu";

export function TicketList({ tickets }: { tickets: Ticket[] | undefined }) {
  if (!tickets) return <div>No tickets to display</div>;

  const ticketsMap = tickets.map((ticket) => (
    <tr key={ticket.id}>
      <td>{ticket.title}</td>
      <td>{ticket.description}</td>
      <td>{`${ticket.createdAt.toLocaleDateString()} ${ticket.createdAt.toLocaleTimeString()}`}</td>
      <td>{TicketStatus[ticket.status]}</td>
      <td>
        <TicketListMenu ticket={ticket.id} />
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{ticketsMap}</tbody>
    </Table>
  );
}
