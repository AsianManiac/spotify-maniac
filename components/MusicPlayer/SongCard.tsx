"use client";

import loadImage from "@/hooks/loadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongCardProps {
  key: string;
  onClick: (id: string) => void;
  data: Song;
}

const SongCard = ({ key, onClick, data }: SongCardProps) => {
  const imagePath = loadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="rounded-md relative group flex flex-col items-center justify-center overflow-hidden gap-x-4 bg-neutral-200/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={`/images/${data.cover}`}
          alt={data.name}
          fill
          loading={"lazy"}
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold text-sm truncate w-full">{data.name}</p>
        <p className="text-neutral-400 text-sm pd-4 w-full">{data.artist}</p>
      </div>
      <div className="absolute bottom-20 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongCard;
