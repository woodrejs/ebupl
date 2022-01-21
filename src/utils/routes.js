import { v4 as uuidv4 } from "uuid";
export const routes = [
  {
    id: uuidv4(),
    name: "home",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "about",
    path: "/about",
  },
  {
    id: uuidv4(),
    name: "offer",
    path: "/offers",
  },
  {
    id: uuidv4(),
    name: "contact",
    path: "/contact",
  },
];
