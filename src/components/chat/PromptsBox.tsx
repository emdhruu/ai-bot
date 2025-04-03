import message from "@/assets/message.png";
import { useChatStore } from "@/store/ChatStore";

const PromptsBox = () => {
  const prompts = [
    {
      id: 1,
      text: "I need assistance with my account.",
    },
    {
      id: 2,
      text: "Recommend a good restaurant nearby",
    },
    {
      id: 3,
      text: "How do I reset my password",
    },
    {
      id: 4,
      text: "What's the weather like today",
    },
  ];

  const { setInput } = useChatStore();

  return (
    <div className="flex flex-1 flex-col justify-center items-center  w-[90%] max-w-2xl p-6 rounded-xl">
      <img
        src={message}
        height={70}
        width={70}
        alt="icon"
        className="bg-slate-50 rounded-xl p-1.5"
      />
      <span className="text-3xl text-center mt-4">
        Let's chat! What's on your mind?
      </span>
      <p className="text-center text-gray-700 mt-2">
        Choose from the prompts below or start asking queries. I'm here to help
        with whatever you need.
      </p>
      <div className="mt-0 lg:mt-8 w-full p-4">
        <p className="mb-2 text-center">Try these prompts:</p>

        {/* Show only first 2 buttons by default */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {prompts.slice(0, 2).map((val, i) => (
            <button
              key={i}
              onClick={() => setInput(val.text)}
              className="p-2 w-full text-center rounded-2xl border border-slate-300 shadow"
            >
              {val.text}
            </button>
          ))}
        </div>

        {/* Show all 4 buttons on sm screens */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4">
          {prompts.map((val, i) => (
            <button
              key={i}
              onClick={() => setInput(val.text)}
              className="p-2 w-full text-center rounded-2xl border border-slate-300 shadow"
            >
              {val.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptsBox;
