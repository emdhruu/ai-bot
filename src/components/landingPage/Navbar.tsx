import icon from "@/assets/message.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GripVertical } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const itm = [
    {
      name: "Product",
    },
    {
      name: "Resource",
    },
    {
      name: "Cutomers",
    },
    {
      name: "Pricing",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-3 md:py-4 md:px-12">
      {/* Left-Side */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between">
        <div className="flex items-center gap-3">
          <img src={icon} alt="icon" height={40} width={40} />
          <h1 className="text-lg font-semibold md:text-2xl">Ai ChatBOT</h1>
        </div>

        {/* Dropdown for smaller screens */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GripVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 bg-white shadow-lg rounded-lg"
            >
              {itm.map((idx, i) => (
                <DropdownMenuItem
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  {idx.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Center nav items (Hidden on small screens) */}
      <div className="hidden lg:flex lg:items-center lg:space-x-10 text-sm mt-4 lg:mt-0 w-full lg:w-auto justify-center">
        {itm.map((idx, i) => (
          <span key={i} className="hover:text-gray-700 cursor-pointer">
            {idx.name}
          </span>
        ))}
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
        <button className="border p-1.5 rounded-2xl px-4 text-sm font-light hover:cursor-pointer">
          Sign in
        </button>

        {/* Hidden on small screens */}
        <Link
          to="/chat"
          className="hidden lg:flex bg-black text-white p-1.5 px-4 rounded-2xl text-sm font-light"
        >
          Start for free
        </Link>

        {/* Dropdown menu for navigation on medium screens */}
        <div className="hidden md:flex lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GripVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 bg-white shadow-lg rounded-lg"
            >
              {itm.map((idx, i) => (
                <DropdownMenuItem
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  {idx.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
