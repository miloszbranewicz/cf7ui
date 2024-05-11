export type DialogBodyProps = React.PropsWithChildren;

function Body({ children }: DialogBodyProps) {
  return <div>{children}</div>;
}

export default Body;
