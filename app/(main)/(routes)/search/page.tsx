import SearchInput from "@/app/(main)/(routes)/search/_components/SearchInput";
import { listenNowAlbums } from "@/app/music/data/albums";
import SearchContent from "./_components/SearchContent";
import getSearchSong from "@/actions/getSearchSong";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = ({ searchParams }: SearchProps) => {
  const song = getSearchSong(searchParams.title);
  const songs = listenNowAlbums;
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <div className="flex flex-col w-80 mb-2 px-6 gap-y-6">
        <h1 className="text-white text-3xl font-semibold">Search</h1>
        <SearchInput />
      </div>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
