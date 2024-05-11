import Item from "./Item";

type MenuBarProps = React.PropsWithChildren;

function MenuBar({ children }: MenuBarProps) {
  return (
    <div className="bg-gray-50 p-2 rounded-md grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-8 2xl:grid-cols-12">
      {children}
    </div>
  );
}

MenuBar.Item = Item;

export default MenuBar;
