import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: "1",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "This is one of the most effective ways to save for your first international trip. Create a separate account and start adding funds to it on a monthly,",
  },
  {
    id: "2",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Endless Tour and Travels provide 5-star services on your trek! We were only three girls in the trek along with the organizers of the trek but they have given us ...",
  },
  {
    id: "3",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "we are specialize for the one day tour in private basis , we provide high quality service . all tours starting from Hilton hotel Colombo, 7.00am & 9.00am",
  },
];

export const tours = [
  {
    id: "1",
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "ourney across Tibet's Wild Frontier, as you explore the most famous mountains in the world - the Himalayas",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: "2",
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque",
    location: "india",
    duration: "9 days",
    cost: "from $5600",
  },
  {
    id: "3",
    image: tour3,
    date: "june 4th, 2020",
    title: "German shepard",
    text: "ourney across Tibet's Wild Frontier, as you explore the most famous mountains in the world - the Himalayas",
    location: "germany",
    duration: "9 days",
    cost: "from $1500",
  },
  {
    id: "4",
    image: tour4,
    date: "august 2th, 2020",
    title: "artic Adventure",
    text: "ourney across Tibet's Wild Frontier, as you explore the most famous mountains in the world - the Himalayas",
    location: "artic",
    duration: "6 days",
    cost: "from $2100",
  },
];
