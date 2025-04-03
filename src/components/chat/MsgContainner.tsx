import { useChatStore } from "@/store/ChatStore";
import { Message, MessageAvatar, MessageContent } from "../ui/message";
import { Loader } from "../ui/loader";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import icon from "@/assets/message.png";

function MsgContainer() {
  const { result, input, isRequesting } = useChatStore();

  console.log(result);

  return (
    <div className="flex flex-col gap-8 relative h-[600px] overflow-y-scroll  p-1.5 rounded-2xl custom-scrollbar">
      {input && (
        <Message className=" flex flex-row justify-end w-fit rounded-2xl p-1.5">
          <div className="mt-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="you" />
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-start space-y-1.5">
            <span className="text-base text-slate-600">You</span>
            <MessageContent className="bg-slate-100 ">{input}</MessageContent>
          </div>
        </Message>
      )}

      {result && (
        <Message className="justify-start">
          <MessageAvatar src={icon} alt="AI" fallback="AI" />
          <div className="flex flex-col items-start space-y-1.5">
            <span className=" font-light text-slate-800 text-2xl ">
              Chat BOT
            </span>
            <MessageContent
              markdown={true}
              className="prose prose-h2:mt-2 prose-h2:scroll-mt-4 text-start text-gray-800 leading-relaxed tracking-wide max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md"
            >
              {result}
            </MessageContent>
          </div>
        </Message>
      )}

      {isRequesting && (
        <div className="absolute left-4 bottom-4 flex items-center">
          <Loader variant="dots" />
        </div>
      )}
    </div>
  );
}

export default MsgContainer;
