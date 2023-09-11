import LoginButton from "../components/login-button";
import {
  Card,
  CardBody,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  User,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">Pryon</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive={router.asPath.includes("profile")}>
              <Link href="/profile" color="foreground">
                Profile
              </Link>
            </NavbarItem>
            <NavbarItem isActive={router.asPath.includes("astronauts")}>
              <Link href="/astronauts" color="foreground">
                Astronauts
              </Link>
            </NavbarItem>
            <NavbarItem isActive={router.asPath.includes("location")}>
              <Link color="foreground" href="/location">
                ISS Location
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Dropdown>
                <DropdownTrigger>
                  <User
                    name={session.user?.name}
                    description={session.user?.email}
                    avatarProps={{
                      src: session.user?.image,
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onClick={() => signOut()}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <LoginButton />
        <div className="flex flex-col items-center justify-center py-8 px-2">
          hello
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
              onClick={() => signIn()}
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
