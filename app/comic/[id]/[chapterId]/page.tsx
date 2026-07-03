import ComicDisplay from "@/components/ComicDisplay";
import { getChapterImages } from "@/lib/getChapterImages";

const VALID_COMICS = new Set(["Girllasttour", "ShinejiSimulation"]);

interface PageProps {
  params: Promise<{
    id: string;
    chapterId: string;
  }>;
}

export default async function ComicChapterPage({ params }: PageProps) {
  const { id, chapterId } = await params;

  if (!VALID_COMICS.has(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Comic not found</h1>
          <p className="text-zinc-600">The comic you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  if (id === "ShinejiSimulation") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 font-inter">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Coming Soon</h1>
          <p className="text-zinc-600 leading-relaxed"> 
            Shineji Simulation is currently being updated. Please check back later!
          </p>
        </div>
      </div>
    );
  }

  const images = getChapterImages(chapterId);

  return <ComicDisplay value={images} chapter={chapterId} />;
}