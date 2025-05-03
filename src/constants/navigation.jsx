import { IoMdHome } from "react-icons/io";
import { PiTelevisionLight } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

export const navigation = [
    {
        label: "TV Shows",
        href: 'tv',
        icon: <PiTelevisionLight/>
    },
    {
        label: "Movies",
        href: 'movie',
        icon: <TbMovie />
    }
]

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon: <IoMdHome/>
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icon: <IoSearch/>
    }
]