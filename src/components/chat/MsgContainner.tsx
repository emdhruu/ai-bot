import { useChatStore } from "@/store/ChatStore";
import { Message, MessageAvatar, MessageContent } from "../ui/message";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import icon from "@/assets/message.png";

function MsgContainer() {
  const { result, input, isRequesting } = useChatStore();


  return (
    <div
      className={
        isRequesting
          ? `flex flex-col sm:w-[700px] h-[600px] p-2`
          : `flex flex-col gap-8 relative h-[600px] overflow-y-scroll p-1.5 rounded-2xl custom-scrollbar w-full max-w-4xl`
      }
    >
      {input && (
        <Message className="flex flex-row items-start w-full rounded-2xl p-1.5">
          <div className="mt-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="you" />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-start space-y-1.5">
            <span className="text-base text-slate-600">You</span>
            <MessageContent className="bg-slate-100 w-full max-w-2xl">
              {input}
            </MessageContent>
          </div>
        </Message>
      )}

      {/* Centered Loader */}
      {isRequesting && (
        <div className="flex items-start w-full ml-12 mt-4">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
          </div>
        </div>
      )}

      {result && (
        <Message className="justify-start">
          <MessageAvatar src={icon} alt="AI" fallback="AI" />
          <div className="flex flex-col items-start space-y-1.5">
            <span className="font-light text-slate-800 text-2xl">Chat BOT</span>
            <MessageContent
              markdown={true}
              className="prose prose-h2:mt-2 prose-h2:scroll-mt-4 text-start text-gray-800 leading-relaxed tracking-wide w-full max-w-2xl p-4 bg-gray-100 rounded-lg shadow-md"
            >
              {result}
            </MessageContent>
          </div>
        </Message>
      )}
    </div>
  );
}

export default MsgContainer;
