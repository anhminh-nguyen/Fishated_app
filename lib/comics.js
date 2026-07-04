export const COMICS = [
  {
    id: "ShinejiSimulation",
    title: "Shimeji Simulation",
    secondTitle:"",
    titleCard:"Shimeji Simulation",
    poster: "/images/shimeji.png",
    desc: "My name is Anh Minh Nguyen, Nice to meet you, welcome to my tour ",
    sl: 3,
  },
  {
    id: "Girllasttour",
    title: "少女終末旅行",
    secondTitle:"- Girls Last Tour -",
    titleCard:"Girls Last Tour",
    poster: "/images/girlslast.png",
    desc: 'Hi, enjoy reading and dont be hesitate to call my name "Anh Minh"',
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
  },
];

export function getComicById(id) {
  return COMICS.find((comic) => comic.id === id);
}

export function getLoopItems(items) {
  return items.length < 25 ? [...items, ...items, ...items] : items;
}
