import { useDialogContext } from "./hooks/useDialogContext";

type OpenDialogButtonProps = React.ComponentProps<"button">;

function OpenButton({ children, onClick, ...rest }: OpenDialogButtonProps) {
  const { openDialog } = useDialogContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    openDialog();
  };

  return (
    <button type="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

export default OpenButton;
