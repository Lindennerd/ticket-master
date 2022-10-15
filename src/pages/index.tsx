import { Button } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Button onClick={(e) => router.push("/tickets/new")}>New Ticket</Button>
    </div>
  );
};

export default Home;
