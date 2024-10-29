"use client";

import { useEffect, useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import {
  BsArrowRepeat,
  BsPauseFill,
  BsPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
// @ts-ignore
import useSound from "use-sound";

import MediaItem from "../sidebar/MediaItem";

import usePlayer from "@/hooks/usePlayer";

import { Song } from "@/types";
import { FaBackward, FaForward } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";
import VolumeSlider from "./VolumeSlider";
import Seekbar from "./Seekbar";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
  const player = usePlayer();
  const [volume, setVolume] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(song.songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false), onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3", "ogg"],
  });

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <ScrollArea>
      <div className="grid grid-cols-2 bg-gray-500 sm:bg-transparent rounded-sm md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem
              className={isPlaying && "animate-spin rounded-3xl"}
              data={song}
              onClick={handlePlay}
            />
          </div>
        </div>

        <div className="flex md:hidden col-auto w-full justify-end items-center space-x-4 pr-3">
          <FaBackward
            className={
              "text-neutral-200 cursor-pointer hover:text-white  h-4 w-4"
            }
            onClick={onPlayPrevious}
          />
          <div
            onClick={handlePlay}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 cursor-pointer"
          >
            <Icon size={25} className={"text-black"} />
          </div>
          <FaForward
            className={
              "text-neutral-200 cursor-pointer hover:text-white transition h-4 w-4"
            }
            onClick={onPlayNext}
          />
        </div>

        <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6 md:ml-2">
          <BsArrowRepeat
            size={20}
            color={repeat ? "whie" : "text-neutral-400"}
            onClick={() => setRepeat((prev) => !prev)}
            className="hidden lg:block text-neutral-400 cursor-pointer hover:text-white transition"
          />
          <AiFillStepBackward
            size={30}
            className={
              "text-neutral-400 cursor-pointer hover:text-white transition"
            }
            onClick={onPlayPrevious}
          />
          <div
            onClick={handlePlay}
            className={
              "flex justify-center items-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
            }
          >
            <Icon size={30} className={"text-black"} />
          </div>
          <AiFillStepForward
            size={30}
            className={
              "text-neutral-400 cursor-pointer hover:text-white transition"
            }
            onClick={onPlayNext}
          />
          <BsShuffle
            size={20}
            color={shuffle ? "white" : "text-neutral-400"}
            onClick={() => setShuffle((prev) => !prev)}
            className="hidden lg:block text-neutral-400 cursor-pointer hover:text-white transition"
          />
        </div>

        <div className={"hidden md:flex w-full justify-end pr-2"}>
          <div className={"flex items-center gap-x-2 w-[120px]"}>
            <VolumeIcon
              size={30}
              onClick={toggleMute}
              className={"cursor-pointer"}
            />
            <VolumeSlider
              value={volume}
              onChange={(value) => setVolume(value)}
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default PlayerContent;
