"use client";

import SongCard from "@/components/MusicPlayer/SongCard";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface ContenProps {
  songs: Song[];
}

const Content = ({ songs }: ContenProps) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs avaailable</div>;
  }

  return (
    <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((item) => (
        <SongCard
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default Content;
