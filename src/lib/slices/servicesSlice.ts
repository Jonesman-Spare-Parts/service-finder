import { StateCreator } from "zustand";
import { getServices } from "@/sanity/sanity-utils";
import { Service } from "@/types/Service";

export interface ServicesSlice {
  services: Service[];
  fetchServices: () => Promise<void>;
}

export const useServicesSlice: StateCreator<ServicesSlice> = (set) => ({
  services: [],
  fetchServices: async () => {
    const services = await getServices();
    set({ services: services });
  },
});
