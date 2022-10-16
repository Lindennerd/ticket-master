import { Ticket } from "@/domain/Ticket/Ticket.entity";
import { useTicket } from "@/domain/Ticket/useTicket";
import { Paper, Title, Text, createStyles, usesy } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useStyles = createStyles({
  redText: {
    color: "red",
  },
});

export default function TicketDetailPage() {
  const { query } = useRouter();
  const { id } = query;
  const { fetchTicket } = useTicket();
  const [ticket, setTicket] = useState<Ticket>();

  const { classes } = useStyles();

  useEffect(() => {
    fetchTicket(id as string).then(setTicket);
  }, [id]);

  return (
    <div>
      <Paper shadow="sm" p="sm">
        <Title order={1} className={classes.redText}>
          {ticket?.title}
        </Title>
        <Text>{ticket?.description}</Text>
      </Paper>
    </div>
  );
}
