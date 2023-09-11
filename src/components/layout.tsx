import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { Navigation } from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        <Navigation session={session} />
        <div className="flex flex-col items-center justify-center py-8 px-2">
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen h-14 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center py-8">
        <Card>
          <CardBody>
            <Button
              onClick={() => signIn("pryon", { callbackUrl: "/profile" })}
              as={Link}
              color="default"
              href="#"
              variant="flat"
            >
              Sign In
            </Button>
            <p className="text-xs py-2">
              By signing up, you agree to the&nbsp;
              <a
                className="underline"
                href="https://pryon.com/terms-of-use/"
                color="foreground"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="underline"
                href="https://pryon.com/legal/"
                color="foreground"
              >
                Privacy Policy
              </a>
              , including Cookie Use.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
