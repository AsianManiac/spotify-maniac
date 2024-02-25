import { madeForYouAlbums } from "@/app/music/data/albums";
import { Song } from "@/types";

const getSearchSong = async (title?: string) => {
  const songs = madeForYouAlbums;
  if (!title) {
    const allsongs = madeForYouAlbums;
    return allsongs;
  }

  const song = songs.filter((item) => item.name.includes(title));
  return (song as any) || [];
};

export default getSearchSong;
