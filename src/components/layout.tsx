import React from "react";
import { useSession } from "next-auth/react";
import { Navigation } from "./navigation";
import Login from "./login";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="min-h-screen h-full h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        <Navigation session={session} />
        <div className="max-w-[1024px] flex w-full items-center justify-center m-auto py-5">
          {children}
        </div>
      </div>
    );
  } else if (status === "unauthenticated") {
    return <Login />;
  } else {
    return <></>;
  }
}
