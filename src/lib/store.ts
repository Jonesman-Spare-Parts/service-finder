import { ServicesSlice, useServicesSlice } from "@/lib/slices/servicesSlice";
import { create } from "zustand";

type StoreState = ServicesSlice;

export const useAppStore = create<StoreState>()((...args) => ({
  ...useServicesSlice(...args),
}));
