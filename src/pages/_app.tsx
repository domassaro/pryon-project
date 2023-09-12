import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "@/components/layout";
import React from "react";
import "../components/globals.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
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
