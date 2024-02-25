"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface LinkeButtonProps {
  songId: string;
}

const LikeButton = ({ songId }: LinkeButtonProps) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [songId]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    if (isLiked == false) {
      setIsLiked(true);
      toast.success("Song has been liked");
    } else {
      setIsLiked(false);
      toast.success("Song removed from favorites");
    }
  };

  return (
    <Button
      onClick={handleLike}
      className="hover:opacity-75 transition"
      variant={"ghost"}
      size={"icon"}
    >
      <Icon
        color={isLiked ? "#22CC55E" : "white"}
        className={`h-5 w-5 lg:h-7 lg:w-7`}
      />
    </Button>
  );
};

export default LikeButton;
