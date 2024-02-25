import Sidebar from "@/components/sidebar/Sidebar";
import { Song } from "@/types";
import { listenNowAlbums } from "../music/data/albums";
import ToasterProvider from "@/components/providers/toaster-provider";
import PlayerSec from "@/components/MusicPlayer/PlayerSec";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const userSongs = listenNowAlbums;
  return (
    <div>
      <ToasterProvider />
      <main>
        <Sidebar songs={userSongs}>{children}</Sidebar>
        <PlayerSec />
      </main>
    </div>
  );
}
