import { X as CloseIcon } from "react-bootstrap-icons";
import { useDialogContext } from "./hooks/useDialogContext";

type CloseDialogButtonProps = React.ComponentProps<"button">;

function CloseButton({
  children,
  onClick,
  className,
  ...rest
}: CloseDialogButtonProps) {
  const { closeDialog } = useDialogContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    closeDialog();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`p-1 hover:bg-gray-100 rounded-md transition-colors duration-200 ease-in-out ${
        className ?? ""
      }`}
      {...rest}
    >
      {children ? children : <CloseIcon size={32} />}
    </button>
  );
}

export default CloseButton;
