"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { IconMovie, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function NavBar({ session }: { session: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Inicio",
      href: "/home",
    },
    {
      label: "Peliculas",
      href: "/movies",
    },
    {
      label: "Series",
      href: "/series",
    },
    {
      label: "Explorar",
      href: "#",
    },
    "Cerrar sesión",
  ];

  const navItems = [
    {
      label: "Inicio",
      href: "/home",
    },
    {
      label: "Peliculas",
      href: "/movies",
    },
    {
      label: "Series",
      href: "/series",
    },
    {
      label: "Explorar",
      href: "#",
    },
  ];

  return (
    <Navbar
      className={`mt-5 p-5 bg-transparent ${
        pathname === "/home" ? "absolute" : "flex"
      }`}
      classNames={{
        menu: "flex flex-col items-center justify-center top-0 bg-default rounded-b-2xl",
        wrapper: "max-w-full",
      }}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex gap-3">
          <IconMovie className="text-primary" />
          <Link className="text-inherit" href="/">
            <p className="font-bold text-inherit text-2xl">Movie-Verse</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex gap-4 px-10 rounded-full bg-default"
        justify="center"
      >
        {navItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={item.href === pathname}
          >
            <Link
              className={`${
                pathname.includes(item.href)
                  ? "text-primary font-semibold"
                  : "text-white"
              } text-lg`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button radius="full" isIconOnly>
            <IconSearch className="text-primary" size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          {session ? (
            <Button
              color="primary"
              className="text-black"
              radius="full"
              onClick={() => signOut()}
            >
              Cerrar sesión
            </Button>
          ) : (
            <Button
              color="primary"
              className="text-black"
              radius="full"
              as={Link}
              href="/login"
            >
              Iniciar sesión
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button radius="full" fullWidth>
            <IconSearch size={20} />
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {typeof item === "object" ? (
              <Link
                className={`${
                  pathname.includes(item.href)
                    ? "text-primary font-semibold"
                    : "text-white"
                } text-lg`}
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <Button
                color="primary"
                className="text-black"
                radius="full"
                onClick={() => signOut()}
              >
                {item}
              </Button>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
