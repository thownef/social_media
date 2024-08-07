import { StateCreator } from "zustand";

export interface IsLoadingSlice {
    isLoading: boolean;
    setStatusLoading: (status: boolean) => void;
}

export const createLoadingSlice: StateCreator<IsLoadingSlice, [], [], IsLoadingSlice> = (set) => ({
    isLoading: false,
    setStatusLoading: (status) => set(() => ({ isLoading: status })),
});
