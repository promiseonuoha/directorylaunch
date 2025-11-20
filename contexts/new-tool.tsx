"use client";
import { NewTool } from "@/types/schema";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

interface NewToolContextType {
  newTool?: NewTool;
  setNewTool: Dispatch<SetStateAction<NewTool | undefined>>;
}

const NewToolContext = createContext<NewToolContextType | undefined>(undefined);

interface NewToolProviderProps {
  children: ReactNode;
}

export const NewToolProvider: FC<NewToolProviderProps> = ({ children }) => {
  const [newTool, setNewTool] = useState<NewTool | undefined>();

  return (
    <NewToolContext.Provider value={{ newTool, setNewTool }}>
      {children}
    </NewToolContext.Provider>
  );
};

export const useNewTool = (): NewToolContextType => {
  const context = useContext(NewToolContext);
  if (context === undefined) {
    throw new Error("useNewTool must be used within a NewToolProvider");
  }
  return context;
};
