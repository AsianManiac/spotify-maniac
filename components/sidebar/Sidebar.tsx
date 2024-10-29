"use client";

import usePlayer from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";
import { Song } from "@/types";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiLogoInternetExplorer, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "../Box";
import Library from "./Library";
import Playlist from "./Playlist";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
  const pathname = usePathname();
  const player = usePlayer();

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
        label: "Favourites",
        icon: Heart,
        active: pathname === "/favourite",
        href: "/favourite",
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
    <div
      className={cn("flex h-[10vh]", player.activeId && "h-[calc(100%-80px)]")}
    >
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-2">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto  px-5 py-4">
          <Library songs={songs} />
        </Box>
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <Playlist />
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
