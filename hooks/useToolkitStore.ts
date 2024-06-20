import { create } from "zustand";
import { ImageT } from "@/types/types";

type ToolkitState = {
  isImgEditorShown: boolean;
  toolkitImage?: ImageT;
  setIsImgEditorShown: (shown: boolean) => void;
  setToolkitImage: (image?: ImageT) => void;
  handleToolkit: (image: ImageT) => void;
};

const useToolkitStore = create<ToolkitState>((set) => ({
  isImgEditorShown: false,
  toolkitImage: undefined,
  setIsImgEditorShown: (shown) => set({ isImgEditorShown: shown }),
  setToolkitImage: (image) => set({ toolkitImage: image }),
  handleToolkit: (image) =>
    set({ toolkitImage: image, isImgEditorShown: true }),
}));

export default useToolkitStore;
