import { useState } from "react";
import { BsArrowRepeat, BsShuffle } from "react-icons/bs";

export const Repeat = () => {
  const [repeat, setRepeat] = useState<boolean>(false);
  return (
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  );
};

export const Shuffle = () => {
  const [shuffle, setShuffle] = useState(false);
  return (
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  );
};
