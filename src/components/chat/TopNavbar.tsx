import icon from "@/assets/message.png";
import { Bookmark, Share } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="h-fit p-3 flex items-center justify-between">
      <div className="flex justify-between items-center w-[20%]  rounded-2xl p-2">
        <div className="flex items-center space-x-3  ">
          <img src={icon} height={40} width={40} />
          <span className="text-3xl font-light text-black">My Chats</span>
        </div>
      </div>
        <div className="p-2 mr-5 flex space-x-2">
            <Bookmark/>
            <Share/>
        </div>
    </div>
  );
};

export default TopNavbar;
