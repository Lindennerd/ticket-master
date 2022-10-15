import { remult } from "remult";
import { Ticket, TicketCreateInput } from "./Ticket.entity";

export function useTicket() {
  return {
    fetchTickets: async () => {
      return remult.repo(Ticket).find();
    },

    createTicket: async (ticket: TicketCreateInput) => {
      return await remult.repo(Ticket).insert(ticket);
    },
  };
}
