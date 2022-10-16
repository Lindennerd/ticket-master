import { TicketList } from "@/components/Tickets/TicketList";
import { Ticket } from "@/domain/Ticket/Ticket.entity";
import { useTicket } from "@/domain/Ticket/useTicket";
import { Button } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const { fetchTickets } = useTicket();
  const [tickets, setTickets] = useState<Ticket[]>();

  useEffect(() => {
    fetchTickets().then(setTickets);
  }, []);

  return (
    <div className={styles.container}>
      <Button onClick={(e) => router.push("/tickets/new")}>New Ticket</Button>
      <TicketList tickets={tickets} />
    </div>
  );
};

export default Home;
