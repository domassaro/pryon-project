import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import Logo from "../../public/images/logo.png";

interface Props {
  session: Session;
}

export const Navigation = ({ session }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Navbar className="bg-white px-0">
        <NavbarContent className="hidden sm:flex" justify="start">
          <Image
            className="pr-2"
            alt="logo"
            width={200}
            height={100}
            src={Logo.src}
          />

          <NavbarItem isActive={router.asPath.includes("profile")}>
            <Link href="/profile" as={NextLink} color="foreground">
              Profile
            </Link>
          </NavbarItem>
          <NavbarItem isActive={router.asPath.includes("astronauts")}>
            <Link href="/astronauts" as={NextLink} color="foreground">
              Astronauts
            </Link>
          </NavbarItem>
          <NavbarItem isActive={router.asPath.includes("location")}>
            <Link color="foreground" as={NextLink} href="/location">
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
                    src: session.user?.image as string,
                  }}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Actions">
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
    </>
  );
};
