"use client";
import { createContext, useContext } from "react";

const BasePathContext = createContext("");

export function BasePathProvider({ children, value }: { children: React.ReactNode; value: string }) {
  return <BasePathContext.Provider value={value}>{children}</BasePathContext.Provider>;
}

export function useBasePath() {
  return useContext(BasePathContext);
}
