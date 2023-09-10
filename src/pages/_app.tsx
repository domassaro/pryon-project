import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import "../components/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any;
  pageProps: {
    session: any;
  };
}) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
