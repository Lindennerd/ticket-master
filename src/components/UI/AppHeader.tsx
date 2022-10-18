import { Button, Group, Header, Text } from "@mantine/core";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { UserMenu } from "../User/UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function AppHeader() {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Ticket Master</title>
        <meta name="description" content="Ticket Master" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header height={60} p="md">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text>Task Master</Text>
          {status === "authenticated" && <UserMenu />}
          {status !== "authenticated" && (
            <Group>
              <Button onClick={(e) => signIn("auth0")}>Sign In</Button>
              <ThemeSwitcher />
            </Group>
          )}
        </div>
      </Header>
    </>
  );
}
