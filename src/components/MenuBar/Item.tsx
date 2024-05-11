type MenuBarItemProps = React.ComponentProps<"button">;

function Item({ children, className, ...rest }: MenuBarItemProps) {
  return (
    <button
      className={`hover:bg-gray-300 p-2 rounded-md bg-gray-200 flex-auto min-w-fit ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Item;
