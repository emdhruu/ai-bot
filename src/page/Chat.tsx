import PromptsBox from "@/components/chat/PromptsBox";
import { Button } from "@/components/ui/button";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";
import { useChatStore } from "@/store/ChatState";
import { ArrowUp, Square } from "lucide-react";
import { motion } from "framer-motion";
import MsgContainner from "@/components/chat/MsgContainner";
import TopNavbar from "@/components/chat/TopNavbar";

const Chat = () => {
  const {
    input,
    setInput,
    isLoading,
    setLoading,
    sendMessage,
    isMessaging,
    setMessaging,
  } = useChatStore();

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setMessaging(true);
    setLoading(true);
    await sendMessage(input);
  };

  return (
    <div className="min-h-screen">
      <header>
        <TopNavbar />
      </header>
      <section className="h-[70%] flex flex-col justify-center items-center mx-2 lg:mx-0">
        <div className="w-full max-w-2xl min-h-[200px] flex justify-center items-center mb-24">
          {!isMessaging ? (
            <motion.div
              layout
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isLoading ? 0 : 1,
                scale: isLoading ? 0.95 : 1,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <PromptsBox />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-lg font-semibold text-gray-600"
            >
              <MsgContainner />
            </motion.div>
          )}
        </div>

        <div className="w-full max-w-2xl fixed bottom-7 ">
          <PromptInput
            value={input}
            onValueChange={setInput}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            className="w-full max-w-(--breakpoint-md)"
          >
            <PromptInputTextarea placeholder="Ask me anything..." />
            <PromptInputActions className="justify-end pt-2">
              <PromptInputAction
                tooltip={isLoading ? "Stop generation" : "Send message"}
              >
                <Button
                  variant="default"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <Square className="size-5 fill-current" />
                  ) : (
                    <ArrowUp className="size-5" />
                  )}
                </Button>
              </PromptInputAction>
            </PromptInputActions>
          </PromptInput>
        </div>
      </section>
    </div>
  );
};

export default Chat;
