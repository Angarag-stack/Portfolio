export const Texts = (props) => {
  const { text, para } = props;
  return (
    <div>
      <div className="mb-4 text-center gap-y-6 lg:mb-6">
        <a className="text-sm font-medium dark:bg-gray-600 text-gray-600 py-1 px-5 rounded-xl border-gray-200 bg-gray-200  dark:text-gray-200 ">
          {text}
        </a>
      </div>
      <p className="mb-12 text-center font-normal text-gray-600 text-lg dark:text-gray-400">
        {para}
      </p>
    </div>
  );
};
