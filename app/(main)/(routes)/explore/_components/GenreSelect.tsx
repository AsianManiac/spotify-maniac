"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { genres } from "@/lib/constants";
const GenreSelect = () => {
  return (
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <Select onValueChange={() => {}}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select genre..." />
        </SelectTrigger>
        <SelectContent className="text-balck">
          {genres.map((genre) => (
            <SelectItem key={genre.value} value={genre.value}>
              {genre.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenreSelect;
