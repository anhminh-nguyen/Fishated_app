import ComicDetailPage from "@/components/ComicDetailPage";
import { COMICS } from "@/lib/comics";


export default async function ComicPage({ params }) {
  const { id } = await params;
  const comic =  COMICS.find((comic)=>comic.id === id) || "";
  const chapterNumber = comic.sl || 0;
  const title = comic.title || "";
  const secondTitle = comic.secondTitle || "";

  return <ComicDetailPage 
  id={id} 
  chapterCount={chapterNumber} 
  chapterName={id}  
  title={title}
  secondTitle={secondTitle}
  mainDesc={comic?.mainDesc || ""}
  secondDesc={comic?.secondDesc || ""}
  lightDesc={comic?.lightDesc || ""}
  poster = {comic?.poster || "" }

  />;
}

