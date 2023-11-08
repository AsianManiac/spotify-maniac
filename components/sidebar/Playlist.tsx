import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { playlists } from "@/app/music/data/playlists";
import { BiSolidPlaylist } from "react-icons/bi";

const Playlist = () => {
  return (
    <ScrollArea className="h-[300px]">
      <h2 className="relative text-lg font-semibold tracking-tight text-white">
        Playlists
      </h2>
      {playlists?.map((playlist, i) => (
        <Button
          key={`${playlist}-${i}`}
          variant="ghost"
          className="w-full justify-start flex gap-x-4 font-normal text-neutral-400"
        >
          <BiSolidPlaylist className="h-6 w-6" />
          {playlist}
        </Button>
      ))}
    </ScrollArea>
  );
};

export default Playlist;
