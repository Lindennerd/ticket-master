// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = (AppProps & Session) & {
  Component: NextPageWithLayout;
};

//TODO fix layout types
//@ts-ignore
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  //@ts-ignore
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout): ReactNode => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
