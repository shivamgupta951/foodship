import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import { LuSoup } from "react-icons/lu";
import { MdFoodBank, MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFoodBold, PiPizza } from "react-icons/pi";

export const categories = [
    {
        id:1,
        name:"All",
        icon:<BiFoodMenu  className="size-[100%] text-green-600"/>
    },
    {
        id:2,
        name:"Breakfast",
        icon:<MdOutlineEmojiFoodBeverage className="size-[100%] text-green-600"/>
    },
    {
        id:3,
        name:"Burger",
        icon:<CiBurger  className="size-[100%] text-green-600"/>
    },
    {
        id:4,
        name:"Pasta",
        icon:<IoFastFood  className="size-[100%] text-green-600"/>
    },
    {
        id:5,
        name:"Main_course",
        icon:<MdFoodBank  className="size-[100%] text-green-600"/>
    },
    {
        id:6,
        name:"Soups",
        icon:<LuSoup  className="size-[100%] text-green-600"/>
    },
    {
        id:7,
        name:"Pizza",
        icon:<PiPizza  className="size-[100%] text-green-600"/>
    },
]

export default categories