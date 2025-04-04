import icon from "@/assets/message.png";
import { Bookmark, Share } from "lucide-react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="h-fit p-3 flex items-center justify-between">
      <div className="flex justify-between items-center w-[50%]   rounded-2xl p-2">
        <Link to="/" className="flex items-center gap-3 ">
          <img src={icon} alt="icon" height={40} width={40} />
          <h1 className="font-semibold md:text-lg">Ai ChatBOT</h1>
        </Link>
      </div>
      <div className="p-2 mr-5 flex space-x-2">
        <Bookmark />
        <Share />
      </div>
    </div>
  );
};

export default TopNavbar;
