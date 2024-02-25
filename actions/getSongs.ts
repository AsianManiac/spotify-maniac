import { madeForYouAlbums } from "@/app/music/data/albums";

const getSongs = async () => {
  const songs = await madeForYouAlbums;
  if (!songs) {
    return songs;
  }

  const song = songs.map((item) => item);
  return song;
};

export default getSongs;
