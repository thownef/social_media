import { create } from "zustand";
import { createLoadingSlice, IsLoadingSlice } from "./loadingSlice";

export const useBoundStore = create<IsLoadingSlice>()((...a) => ({
  ...createLoadingSlice(...a),
}))