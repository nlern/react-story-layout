import thumb1 from "./images/thumb-1.jpg";
import thumb2 from "./images/thumb-2.jpg";
import thumb3 from "./images/thumb-3.jpg";
import story1 from "./images/story-1.jpg";
import story2 from "./images/story-2.jpg";
import story3 from "./images/story-3.jpg";
import story4 from "./images/story-4.jpg";
import story5 from "./images/story-5.jpg";
import story6 from "./images/story-6.jpg";
import story7 from "./images/story-7.jpg";

export default [
  {
    username: "The Voyage",
    thumbnail: {
      src: thumb1,
      alt: "thumb 1"
    },
    slides: [
      {
        text: "https://unsplash.com/@marekpiwnicki",
        image: story1
      },
      {
        text: "https://unsplash.com/@cozza",
        image: story2
      },
      {
        text: "https://unsplash.com/@nimbus_vulpis",
        image: story3
      },
      {
        text: "https://unsplash.com/@cozza",
        image: story4
      },
      {
        text: "https://unsplash.com/@gantas",
        image: story5
      }
    ],
    timer: 4000
  },
  {
    username: "Infinity Shots",
    thumbnail: {
      src: thumb2,
      alt: "thumb 2"
    },
    slides: [
      {
        text: "https://unsplash.com/@borkography",
        image: story6
      },
      {
        text: "https://unsplash.com/@hans_isaacson",
        image: story7
      }
    ],
    timer: 4000
  },
  {
    username: "World Travel",
    thumbnail: {
      src: thumb3,
      alt: "thumb 3"
    },
    slides: [
      {
        text: "https://unsplash.com/@cozza",
        image: story2
      }
    ],
    timer: 4000
  }
];
