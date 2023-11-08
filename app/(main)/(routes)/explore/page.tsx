import SongCard from "@/components/MusicPlayer/SongCard";
import GenreSelect from "./_components/GenreSelect";
import { useGetTopChartsQuery } from "@/redux/services/shazamCore";

const page = () => {
  const { data, isFetching, error } = useGetTopChartsQuery("");
  return (
    <div className="flex flex-col">
      <GenreSelect />

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((song, i) => (
          <SongCard key={i} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
