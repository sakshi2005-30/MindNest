import { create } from "zustand";
import { createContent, getContent, deleteContent } from "../services/content";
import toast from "react-hot-toast";

export const useContentStore = create((set, get) => ({
  contents: [],

  create: async (data) => {
    try {
      const res = await createContent(data);

      set({
        contents: [...get().contents, res.data.data],
      });

      toast.success("Content saved to brain");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  },

  fetchContent: async () => {
    try {
      const res = await getContent();

      set({
        contents: res.data.data,
      });
    } catch (error) {
      toast.error("Failed to fetch content");
      console.error(error);
    }
  },

  deleteContentId: async (id) => {
    try {
      await deleteContent(id);

      set({
        contents: get().contents.filter((content) => content._id !== id),
      });

      toast.success("Content deleted successfully");
    } catch (error) {
      toast.error("Failed to delete content");
      console.error(error);
    }
  },
}));
