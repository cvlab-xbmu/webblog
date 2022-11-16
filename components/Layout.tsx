export const Main = (props: { children?: React.ReactNode }) => {
  return (
    <main className="md:px-30 lg:px-30 min-h-screen px-10 sm:px-20 xl:px-40">
      {props.children}
    </main>
  );
};

export const Row = (props: { children?: React.ReactNode }) => {
  return <div className="justify-center lg:flex">{props.children}</div>;
};

export const Col = (props: {
  children?: React.ReactNode;
  numerator: number;
  denominator: number;
}) => {
  return (
    <div className={`basis-${props.numerator}/${props.denominator} mx-2 w-full`}>
      {props.children}
    </div>
  );
};
