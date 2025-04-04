import download from "@/assets/download.png";
import review from "@/assets/review.png";
import { Link } from "react-router-dom";

const CenterLayout = () => {
  return (
    <div className="h-[60%] w-full flex flex-col justify-center items-center mx-2 lg:mx-0 text-center">
      {/* Top Section */}
      <div className="flex items-center justify-center space-x-6 w-full max-w-5xl">
        {/* Left Image */}
        <div className="mt-40">
          <img src={download} width={200} className="hidden xl:block " />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-3xl p-6 rounded-xl flex flex-col items-center space-y-5">
          <div className="relative w-fit space-x-1 py-1 px-3.5 rounded-2xl text-sm border overflow-hidden bg-gradient-to-r from-blue-200 via-white to-blue-200 animate-shimmer">
            <span className="text-blue-700">New!</span>
            <span>Introducing Ai BOT 🎉</span>
          </div>

          <h1 className="text-5xl font-bold">The next gen of Ai ChatBOT.</h1>
          <p>
            An AI chatbot designed to assist, learn, and grow with every
            conversation. <br />
            Your intelligent companion, always ready to help.
          </p>
          <Link  to="/chat" className="bg-black text-white p-1.5 px-9 rounded-2xl font-extralight">
            Start for free
          </Link>
        </div>

        {/* Right Image */}
        <div className=" mt-40">
          <img src={review} width={270} className="hidden xl:block" />
        </div>
      </div>
    </div>
  );
};

export default CenterLayout;
