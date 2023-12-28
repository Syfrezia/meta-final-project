import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruschetta.svg";
import lemon from "../assets/lemon dessert.jpg";

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
