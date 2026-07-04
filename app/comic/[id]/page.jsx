import ComicDetailPage from "@/components/ComicDetailPage";
import { COMICS } from "@/lib/comics";


export default async function ComicPage({ params }) {
  const { id } = await params;
  const chapterNumber = COMICS.find((comic)=>comic.id === id)?.sl || 0;

  return <ComicDetailPage id={id} chapterCount={chapterNumber} chapterName={id}/>;
}


