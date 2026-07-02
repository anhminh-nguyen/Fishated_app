import ComicDetailPage from "@/components/ComicDetailPage";

const COMIC_PAGES = {
  Girllasttour: {
    chapterCount: 3,
    chapterName: "Girllasttour",
  },
  ShinejiSimulation: {
    chapterCount: 3,
    chapterName: "ShinejiSimulation",
  },
};

export default async function ComicPage({ params }) {
  const { id } = await params;
  const config = COMIC_PAGES[id];

  if (!config) {
    return <div>Not found</div>;
  }

  return (
    <ComicDetailPage
      chapterCount={config.chapterCount}
      chapterName={config.chapterName}
    />
  );
}
