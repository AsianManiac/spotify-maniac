import { listenNowAlbums } from "@/app/music/data/albums";
import { Heart } from "lucide-react";
import FavouriteContent from "./_components/FavouriteContent";

const Favourite = async () => {
  const songs = await listenNowAlbums;
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <div className="mt-20">
        <div className="flex m-2 bg-neutral-800/50 flex-row items-center gap-x-5">
          <div className="relative flex items-center bg-gradient-to-br from-green-700 to-pink-200 h-32 w-32 lg:h-44 lg:w-44">
            <div className="justify-center mx-auto">
              <Heart fill="white" size={65} />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
            <p className="md:block font-semibold text-sm lg:text-xl text-neutral-300">
              Playlist
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Liked songs
            </h1>
          </div>
        </div>
      </div>
      <FavouriteContent songs={songs} />
    </div>
  );
};

export default Favourite;
