import { Song } from "@/types";
import MediaItem from "./MediaItem";
import { ScrollArea } from "../ui/scroll-area";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
  const onPlay = useOnPlay(songs);

  return (
    <ScrollArea className="h-[300px]">
      <h2 className="relative text-lg font-semibold tracking-tight text-white">
        Library
      </h2>
      {songs.map((item) => (
        <MediaItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </ScrollArea>
  );
};

export default Library;
