import getSongs from "@/actions/getSongs";
import Content from "../../_components/Content";
import GenreSelect from "./_components/GenreSelect";

const Explore = async () => {
  const songs = await getSongs();
  return (
    <div className="flex flex-col">
      <GenreSelect />

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        <Content songs={songs} />
      </div>
    </div>
  );
};

export default Explore;
