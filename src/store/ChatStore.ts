import { create } from "zustand";
import axios from "axios";

interface ChatState {
  input: string;
  isRequesting: boolean;
  isMessaging: boolean;
  isLoading: boolean;
  result: string | null;
  setInput: (text: string) => void;
  setLoading: (loading: boolean) => void;
  setMessaging: (loading: boolean) => void;
  sendMessage: (message: string) => Promise<void>;
  setRequesting: (requesting: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  input: "",
  isLoading: false,
  result: null,
  isRequesting: false,
  isMessaging: false,

  setInput: (text) => set({ input: text }),

  setLoading: (loading) => set({ isLoading: loading }),

  setMessaging: (messaging) => set({ isMessaging: messaging }),

  setRequesting: (requesting) => set({ isRequesting: requesting }),

  sendMessage: async (message) => {
    set({ isRequesting: true, isLoading: true });

    try {
      const { data } = await axios.post(
        `https://apivultra2.kidjig.com/provider/api/v1/openai/chat/completions`,
        {
          model: "gpt-4o-mini",
          prompt: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_SECRET_KEY,
          },
        }
      );
      if (data?.data?.response) {
        set({
          result: data.data.response,
          isRequesting: false,
          isLoading: false,
        });
      } else {
        set({
          result: "No response received.",
          isRequesting: false,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      set({
        result: "Failed to fetch response.",
        isRequesting: false,
        isLoading: false,
      });
    } finally {
      set({ isRequesting: false, isLoading: false });
    }
  },
}));
