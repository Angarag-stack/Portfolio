import { Shadow, Show } from "./Shadow";
import { Delete } from "./Icons/x";

const heads = ["About", "Work", "Testimonials", "Contact"];

const Headtext = (props) => {
  const { text, index } = props;
  return (
    <div className="text-base text-gray-600 dark:text-gray-400 content-center">
      {text}
    </div>
  );
};

export const Kebab = () => {
  return (
    <div className="sm:block lg:hidden ">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <svg
              width="36px"
              height="36px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20"
                stroke="#4B5563"
                className="dark:stroke-slate-50"
                strokeWinecap="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6H20"
                stroke="#4B5563"
                className="dark:stroke-slate-50"
                strokeWinecap="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="#4B5563"
                className="dark:stroke-slate-50"
                strokeWinecap="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-full sm:px-8   dark:bg-[black]">
            {" "}
            <div className="flex justify-between items-center">
              <p className="text-3xl p-2 pb-4 dark:text-white font-black">
                TOM
              </p>
              <Delete></Delete>
            </div>
            <li className="border-t">
              {heads.map((head, index) => {
                return <Headtext key={index} text={head}></Headtext>;
              })}{" "}
              <div className="border-t p-1 gap-5 flex flex-col ">
                <div className="flex items-center text-base text-gray-600 dark:text-gray-600 font-thin px-1 pt-5">
                  <a className="mr-36 dark:text-gray-400">Switch theme</a>
                  <Shadow className=" dark:" />
                  <Show className="hidden"></Show>
                </div>
                <div className="pb-4">
                  <button className="min-w-72 flex items-center justify-center text-white  px-4 py-2 text-base bg-gray-950 rounded-xl  dark:bg-gray-100 dark:text-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    Download CV
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
