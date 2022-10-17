import { Ticket, TicketStatus } from "@/domain/Ticket/Ticket.entity";
import { useTicket } from "@/domain/Ticket/useTicket";
import { Paper, Title, Text, createStyles, Badge } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingPage } from "@/components/UI/LoadingPage";
import { TaskAdd } from "@/components/Task/TaskAdd";
import { useAtom } from "jotai";
import { atom } from "jotai";
import { TaskList } from "@/components/Task/TaskList";

export const ticketAtom = atom<Ticket | null>(null);

export default function TicketDetailPage() {
  const { query } = useRouter();
  const { id } = query;
  const { fetchTicket } = useTicket();
  const [ticket, setTicket] = useAtom(ticketAtom);
  const [loading, setLoading] = useState(false);

  const { classes } = useStyles();

  useEffect(() => {
    setLoading(true);
    fetchTicket(id as string).then((ticket) => {
      setTicket(ticket);
      setLoading(false);
    });
  }, [id]);

  if (loading && !ticket) return <LoadingPage />;
  if (!loading && !ticket)
    return <Text color={"red"}>Invalid Ticket selected</Text>;

  if (ticket)
    return (
      <div className={classes.pageLayout}>
        <Paper shadow="sm" p="sm">
          <Text>{`Openned by user at ${ticket.createdAt.toLocaleDateString()} ${ticket?.createdAt.toLocaleTimeString()}`}</Text>
          <div className={classes.ticketHeader}>
            <Title order={1}>{ticket?.title}</Title>
            <div>
              <Badge>{TicketStatus[ticket!.status]}</Badge>
            </div>
          </div>
          <Text>{ticket?.description}</Text>
        </Paper>
        <Paper shadow="sm" p="sm">
          <TaskAdd ticket={ticket!} />
        </Paper>
        <Paper>
          <TaskList tasks={ticket!.tasks} />
        </Paper>
      </div>
    );
}

const useStyles = createStyles({
  ticketHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  newTaskButton: {
    width: "100%",
  },
  pageLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});
