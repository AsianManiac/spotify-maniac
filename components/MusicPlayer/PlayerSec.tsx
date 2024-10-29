"use client";

import { useSongById } from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";
import { Button } from "../ui/button";
import PlayerContent from "./PlayerContent";
import { routes } from "@/app/music/data/menu";

const Playersec = () => {
  const player = usePlayer();
  const { song } = useSongById(player.activeId);
  //   console.log(song);

  if (!song || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 px-4">
      <PlayerContent key={song.id} song={song} songUrl={song.songUrl} />
    </div>
  );
};

export default Playersec;
