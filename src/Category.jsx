import { BiDrink, BiFoodMenu } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { MdFoodBank, MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";

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
        name:"Lunch",
        icon:<PiBowlFoodBold  className="size-[100%] text-green-600"/>
    },
    {
        id:4,
        name:"Snacks",
        icon:<IoFastFood  className="size-[100%] text-green-600"/>
    },
    {
        id:5,
        name:"Dinner",
        icon:<MdFoodBank  className="size-[100%] text-green-600"/>
    },
    {
        id:5,
        name:"SoftDrinks",
        icon:<BiDrink  className="size-[100%] text-green-600"/>
    },
]

export default categories