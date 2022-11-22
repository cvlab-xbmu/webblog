export const Headline = (props: {
  title: string;
  citation?: string;
  url: string;
}) => {
  return (
    <a href={props.url} target={"_blank"} rel="noreferrer">
      <div className="flex cursor-pointer flex-col justify-center py-5 hover:text-yellow-900">
        <h2 className="mx-10 my-3 text-center text-3xl">{props.title}</h2>
        <div className="mx-auto my-3 flex w-fit max-w-6xl justify-center border-t border-b py-3 text-gray-600">
          <p className="mx-10 text-sm">{props.citation}</p>
        </div>
      </div>
    </a>
  );
};
