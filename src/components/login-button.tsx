import { useSession, signIn, signOut } from "next-auth/react";
import { Link, Button } from "@nextui-org/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button
          onClick={() => signOut()}
          as={Link}
          color="primary"
          href="#"
          variant="flat"
        >
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn()}
        as={Link}
        color="primary"
        href="#"
        variant="flat"
      >
        Sign In
      </Button>
    </>
  );
}
