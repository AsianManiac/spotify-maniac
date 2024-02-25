import { madeForYouAlbums } from "../music/data/albums";
import Content from "./_components/Content";

export const revalidate = 0;

export default async function Home() {
  const songs = await madeForYouAlbums;
  return (
    <main className="h-screen">
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">New Songs</h1>
        </div>
        <Content songs={songs} />
      </div>
    </main>
  );
}
