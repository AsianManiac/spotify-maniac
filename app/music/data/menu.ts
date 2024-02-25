import { Heart } from "lucide-react";
import { BiLogoInternetExplorer, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

export const routes = [
  {
    label: "Home",
    icon: HiHome,
    href: "/",
  },
  {
    label: "Search",
    icon: BiSearch,
    href: "/search",
  },
  {
    label: "Favourites",
    icon: Heart,
    href: "/favourite",
  },
  {
    label: "Explore",
    icon: BiLogoInternetExplorer,
    href: "/explore",
  },
];
