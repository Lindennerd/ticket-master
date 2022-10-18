import {
  AppShell,
  Header,
  Navbar,
  useMantineTheme,
  Text,
  MediaQuery,
  Aside,
  Footer,
  Burger,
} from "@mantine/core";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AppHeader } from "../components/UI/AppHeader";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated" && router.asPath !== "/organization/new") {
    return (
      <>
        <Head>
          <title>Ticket Master</title>
          <meta name="description" content="Ticket Master" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppShell>{children}</AppShell>
      </>
    );
  }

  if (status !== "authenticated" || router.asPath === "/organization/new") {
    return (
      <div>
        <AppHeader />
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
