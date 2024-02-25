"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/sidebar/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import { useRouter } from "next/navigation";

interface FavouriteContentProps {
  songs: Song[];
}

const FavouriteContent = ({ songs }: FavouriteContentProps) => {
  const router = useRouter();
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs have been favourited
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6 h-full">
      {songs.map((item) => (
        <div key={item.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={item} />
          </div>
          <LikeButton songId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default FavouriteContent;
