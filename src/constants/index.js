import {
  salad,
  bruschetta,
  lemon,
  male1,
  female1,
  female2,
  female3,
  marioAdrianA,
  marioAdrianB,
} from "../assets";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const NAV = {
  HOME: "Home",
  ABOUT: "About",
  MENU: "Menu",
  RESERVATIONS: "Reservations",
  ORDER: "Order",
  LOGIN: "Login",
};

export const HERO = {
  TITLE: "Little Lemon",
  SUBTITLE: "Chicago",
  DESCRIPTION:
    "We are a family owned mediterannean restaurant, focused on traditional recipes served with a modern twist.",
  BUTTON: "Reserve a table",
};

export const HIGHLIGHTS_TITLE = {
  NAME: "This weeks' specials!",
  BUTTON: "Online Menu",
};

export const HIGHLIGHTS = [
  {
    image: salad,
    food: "Greek Salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruschetta,
    food: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: lemon,
    food: "Lemon Dessert",
    price: "$5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const TESTIMONIALS = [
  {
    rating: 5,
    picture: male1,
    name: "Joseph Gonzalez",
    review:
      "This is the best restaurant I have ever been to. The food is amazing and the service is even better. I would recommend this place to anyone.",
  },
  {
    rating: 5,
    picture: female1,
    name: "Anne Wheeler",
    review:
      "The food was delicious and the service was great. I would definitely recommend this place to anyone looking for a good meal.",
  },
  {
    rating: 4.5,
    picture: female2,
    name: "Dorothy Gale",
    review:
      "Great food and service. The ambiance is cozy and the staff is friendly. I highly recommend this restaurant for a delightful dining experience.",
  },
  {
    rating: 5,
    picture: female3,
    name: "Samantha Baker",
    review:
      "Top notch service and food. The staff is attentive and friendly, and the dishes are prepared with utmost care and attention to detail.",
  },
];

export const ABOUT = {
  TITLE: "Little Lemon",
  SUBTITLE: "Chicago",
  DESCRIPTION:
    "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.",
  PICTURES: [marioAdrianA, marioAdrianB],
};

export const FOOTER_NAV = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Menu",
    link: "#",
  },
  {
    label: "Reservations",
    link: "/booking",
  },
  {
    label: "Order",
    link: "#",
  },
  {
    label: "Login",
    link: "#",
  },
];

export const FOOTER_CONTACT = [
  {
    label: "Address",
    link: "#",
  },
  {
    label: "Phone Number",
    link: "#",
  },
  {
    label: "Email",
    link: "#",
  },
];

export const FOOTER_SOCIAL = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
];
