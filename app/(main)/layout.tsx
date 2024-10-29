import PlayerSec from "@/components/MusicPlayer/PlayerSec";
import ToasterProvider from "@/components/providers/toaster-provider";
import Sidebar from "@/components/sidebar/Sidebar";
import { listenNowAlbums } from "../music/data/albums";

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
