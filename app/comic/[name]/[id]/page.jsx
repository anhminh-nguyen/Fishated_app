import ComicDisplay from "@/components/ComicDisplay";
import { getChapterImages } from "@/lib/getChapterImages";

const VALID_COMICS = new Set(["Girllasttour", "ShinejiSimulation"]);

export default async function ComicChapterPage({ params }) {
  const { name, id } = await params;

  if (!VALID_COMICS.has(name)) {
    return <div>I love you</div>;
  }

  if (name === "ShinejiSimulation") {
    return <></>;
  }

  const images = getChapterImages(id);

  return <ComicDisplay value={images} chapter={id} />;
}
