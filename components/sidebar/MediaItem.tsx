import { cn } from "@/lib/utils";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  key?: string;
  onClick?: (id: string) => void;
  data: Song;
  className?: any;
}

const MediaItem = ({ key, onClick, data, className }: MediaItemProps) => {
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
    //Turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center
         gap-x-3 cursor-pointer hover:bg-neutral-800/50 will-change-auto p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] ">
        <Image
          src={`/images/${data.cover}`}
          fill
          alt={data.name}
          className={cn("object-cover rounded-md", className)}
          loading={"eager"}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate md:text-sm text-xs">{data.name}</p>
        <p className="text-neutral-400 md:text-xs text-[10px] truncate">
          {data.artist}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
