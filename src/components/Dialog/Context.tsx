import React, { createContext, useState } from "react";

type DialogContextType = {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export const DialogProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};
