import { useEffect, useMemo, useState } from "react";

import { madeForYouAlbums } from "@/app/music/data/albums";
import { Song } from "@/types";

export function useSongById(id?: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [song, setSong] = useState<Song | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    function fetchSong(id?: string) {
      const song = madeForYouAlbums.find((item) => item.id === id);
      return song;
    }
    const song = fetchSong(id);
    setSong(song as any);
    setIsLoading(false);
  }, [id]); // Pass [id] as the second argument to useEffect

  return useMemo(
    () => ({
      isLoading,
      song,
    }),
    [isLoading, song]
  );
}
