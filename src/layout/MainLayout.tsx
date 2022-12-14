import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { UnnauthNavbar } from "@/components/UI/UnnauthNavbar";
import { ThemeSwitch } from "@/components/UI/ThemeSwitch";
import Head from "next/head";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>Ticket Master</title>
        <meta name="description" content="Manage tasks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<UnnauthNavbar opened={opened} />}
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
              <ThemeSwitch />
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
}
