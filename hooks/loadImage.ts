import { madeForYouAlbums } from "@/app/music/data/albums";
import { Song } from "@/types";

const loadImage = (song: Song) => {
  if (!song) {
    return null;
  }

  const imageData = madeForYouAlbums;

  return imageData;
};

export default loadImage;
