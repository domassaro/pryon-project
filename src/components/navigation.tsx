import {
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
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export const Navigation = ({ session }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Navbar className="bg-white">
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
                    src: session.user?.image as string,
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
    </>
  );
};
