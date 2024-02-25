"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/sidebar/MediaItem";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
  if (songs.length === 0) {
    return (
      <div className="flec flex-col gap-y-2 w-full px-6 text-neutral-400">
        <p>No Songs Found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((item) => (
        <div key={item.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={item} />
          </div>
          <LikeButton songId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
