"use client";

import { useRouter } from "next/navigation";
import NavbarMenuItem from "./navbar-menu-item";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    name: "home",
    items: [
      { name: "Flights", link: "/" },
      { name: "Cars", link: "/" },
      { name: "Cruise", link: "/" },
      { name: "Hotels", link: "/" },
    ],
  },
  { name: "destinations", link: "/" },
  { name: "tours", link: "/" },
  { name: "blog", link: "/" },
  { name: "item", link: "/" },
  { name: "item-2", link: "/" },
];

const NavbarMenu = () => {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAV_ITEMS.map(({ name, link, items }) => {
          if (!items?.length) {
            return (
              <NavigationMenuItem key={name}>
                <Link href={link || "/"} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn("uppercase", navigationMenuTriggerStyle())}
                  >
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={name}>
              <NavigationMenuTrigger className="uppercase">
                {name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-40">
                {items.map((item) => (
                  <NavbarMenuItem
                    key={item.name}
                    label={item.name}
                    onClick={() => router.push(item.link)}
                  />
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMenu;
