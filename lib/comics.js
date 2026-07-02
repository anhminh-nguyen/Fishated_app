export const COMICS = [
  {
    id: "ShinejiSimulation",
    title: "Shimeji Simulation",
    poster: "/images/shimeji.png",
    desc: "My name is Anh Minh Nguyen, Nice to meet you, welcome to my tour ",
  },
  {
    id: "Girllasttour",
    title: "Girls Last Tour",
    poster: "/images/girlslast.png",
    desc: 'Hi, enjoy reading and dont be hesitate to call my name "Anh Minh"',
  },
];

export function getComicById(id) {
  return COMICS.find((comic) => comic.id === id);
}

export function getLoopItems(items) {
  return items.length < 25 ? [...items, ...items, ...items] : items;
}
