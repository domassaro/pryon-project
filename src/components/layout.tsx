import LoginButton from "../components/login-button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
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
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <LoginButton />
      <div className="bg-red-600">{children}</div>
    </>
  );
}
