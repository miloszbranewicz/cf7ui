import CloseButton from "./CloseButton";

export type DialogHeaderProps = React.PropsWithChildren;

function Header({ children }: DialogHeaderProps) {
  return (
    <header className={`flex gap-4 ${children ? `mb-8` : ""}`}>
      {children}
      <CloseButton className="ml-auto self-start" />
    </header>
  );
}

export default Header;
