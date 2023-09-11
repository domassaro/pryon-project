import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "@/components/layout";
import React from "react";
import "../components/globals.css";
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any;
  pageProps: {
    session: Session;
  };
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SessionProvider session={session}>
          <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
