import { FaPlay } from "react-icons/fa";
import { Button } from "../ui/button";

const PlayButton = () => {
  return (
    <Button
      onClick={() => {}}
      variant={"ghost"}
      size={"icon"}
      className="opacity-0 group-hover:bg-green-500 rounded-full flex items-center bg-green-500 p4 drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
    >
      <FaPlay className="text-black" />
    </Button>
  );
};

export default PlayButton;
