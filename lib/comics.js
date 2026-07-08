export const COMICS = [
  {
    id: "ShimejiSimulation", // router = folder name 
    title: "シメジ シミュレーション", 
    secondTitle:"- Shimeji Simulation -",
    author:"",
    translator:"Fishated",
    titleCard:"Shimeji Simulation",
    poster: "/images/ShimejiSimulationBanner.png", // path image 
    desc: "Một bộ truyện tranh 4-koma siêu thực hài hước được viết và minh họa bởi Tsukumizu.", // desciption of card 
    mainDesc:`Câu truyện xoay quanh Shijima Tsukishima, một hikikomori quyết định theo học trung học sau hai năm sống trong tủ quần áo. Khi chuẩn bị cho ngày đầu đến trường, Shijima bỗng phát hiện ra một điều kỳ lạ: Một cặp nấm Shimeji đã mọc ở ngay trên đầu mình!`,
    secondDesc:`Ở trường, Shijima được gặp Majime Yamashita, một cô bé có quả trứng ốp la ở trên đầu. Majime nói rằng từ khi sinh ra mình đã có quả trứng rán đó. Hai người dần trở nên gắn bó với nhau, và cùng lúc đó, nhiều hiện tượng kỳ ​​lạ khác xảy ra trong thị trấn của họ.`,
    lightDesc:`Một bộ truyện tranh 4-koma siêu thực hài hước được viết và minh họa bởi Tsukumizu.`,
    sl: 10, // number of chapter 
    chapter:["1","2","3","4","5","6","7","8","9","10"], 
  
  },
  {
    id: "GirlsLastTour",
    title: "少女終末旅行",
    secondTitle:"- Girls Last Tour -",
    author:"© Tsukumizu / Shinchosha",
    translator:"Fishated",
    titleCard:"Girls Last Tour",
    poster: "/images/GLTBanner.png",
    desc: 'Một bộ truyện tranh giải trí, nhưng cũng có thể khiến ta suy ngẫm về chiến tranh, hy vọng, tuyệt vọng và cách ta sống.',
    mainDesc:`Đến một ngày nhân loại lụi tàn, thế giới sẽ ồn ào trong hoảng loạn hay
              bị bao trùm bởi sự tĩnh lặng chết chóc và bi ai? Trong Girls'
              last tour, thế giới ấy tuy lặng thinh nhưng cũng đầy yên bình và tươi
              đẹp qua con mắt của hai thiếu
              nữ Chito và Yuuri.`,
    secondDesc:`Hai con người với tính cách và suy nghĩ trái ngược cùng nhau đi tìm ý
              nghĩa của chính chuyến hành trình của họ, với đích đến là đỉnh của
              ngọn tháp, hay cũng như đỉnh thế giới của hai cô gái.`,
    lightDesc:`Bộ truyện là phương tiện giải trí hay cũng có thể là thứ khiến ta suy ngẫm về chiến tranh, về hy vọng, tuyệt vọng và về cách ta sống.`,
    sl: 3,
    chapter:[], 
  
  },

  {
    id: "GirlsLastTourAnthology",
    title: "少女終末旅行",
    secondTitle:"- Girls Last Tour Anthology -",
    author:"© Tsukumizu / Shinchosha",
    translator:"Fishated",
    titleCard:"Girls Last Tour Anthology",
    poster: "/images/GLTAnthologyBanner.png",
    desc: 'Tuyển tập của Tsukumizu, bao gồm tác phẩm tương quan giữa giấc mơ của Chi-chan đến thuyết đa vũ trụ. Một mẩu truyện tranh giải trí, nhưng cũng có thể khiến ta suy ngẫm về chiến tranh, hy vọng, tuyệt vọng và cách ta sống.',
    mainDesc:`Tuyển tập của Tsukumizu, bao gồm tác phẩm tương quan giữa giấc mơ của Chi-chan đến thuyết đa vũ trụ. Đến một ngày nhân loại lụi tàn, thế giới sẽ ồn ào trong hoảng loạn hay
              bị bao trùm bởi sự tĩnh lặng chết chóc và bi ai? Trong Girls'
              last tour, thế giới ấy tuy lặng thinh nhưng cũng đầy yên bình và tươi
              đẹp qua con mắt của hai thiếu
              nữ Chito và Yuuri.`,
    secondDesc:`Hai con người với tính cách và suy nghĩ trái ngược cùng nhau đi tìm ý
              nghĩa của chính chuyến hành trình của họ, với đích đến là đỉnh của
              ngọn tháp, hay cũng như đỉnh thế giới của hai cô gái.`,
    lightDesc:`Bộ truyện là phương tiện giải trí hay cũng có thể là thứ khiến ta suy ngẫm về chiến tranh, về hy vọng, tuyệt vọng và về cách ta sống.`,
    sl: 1,
    chapter:["Final Tour"], 
  },
];

export function getComicById(id) {
  return COMICS.find((comic) => comic.id === id);
}

export function getLoopItems(items) {
  return items.length < 25 ? [...items, ...items, ...items] : items;
}
