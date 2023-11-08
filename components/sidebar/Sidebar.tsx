"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiLogoInternetExplorer, BiSearch } from "react-icons/bi";
import Box from "../Box";
import SidebarItem from "./SidebarItem";
import { ScrollArea } from "../ui/scroll-area";
import Playlist from "./Playlist";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        icon: HiHome,
        active: pathname === "/",
        href: "/",
      },
      {
        label: "Search",
        icon: BiSearch,
        active: pathname === "/search",
        href: "/search",
      },
      {
        label: "Explore",
        icon: BiLogoInternetExplorer,
        active: pathname === "/explore",
        href: "/explore",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <Playlist />
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
