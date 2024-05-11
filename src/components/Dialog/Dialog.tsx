import { useCallback, useEffect } from "react";
import Body from "./Body";
import CloseButton from "./CloseButton";
import Footer from "./Footer";
import Header from "./Header";
import { useDialogContext } from "./hooks/useDialogContext";
import OpenButton from "./OpenButton";

export type DialogProps = React.PropsWithChildren;
export default function Dialog({ children }: DialogProps) {
  const { isOpen, closeDialog } = useDialogContext();

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeDialog();
    }
  };

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDialog();
      }
    },
    [closeDialog]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out "
        onClick={handleClickOutside}
      >
        <div className="bg-white rounded-md p-4 w-full max-w-[50rem]">
          {children}
        </div>
      </div>
    )
  );
}

Dialog.Header = Header;
Dialog.Footer = Footer;
Dialog.Body = Body;
Dialog.Close = CloseButton;
Dialog.Open = OpenButton;
