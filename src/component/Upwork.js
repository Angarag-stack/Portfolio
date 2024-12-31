let datas = [
  {
    id: 1,
    head: <img src="logo-upwork.png" className="w-24 h-7 "></img>,
    date: "Nov 2021 - Present",
    experience: "Sr. Frontend Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    head: <img src="logo-upwork.png" className="w-24 h-7 "></img>,
    date: "Jul 2017 - Oct 2021",
    experience: "Team Lead",
    skills: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    head: <img src="logo-upwork.png" className="w-24 h-7 "></img>,
    date: "Dec 2015 - May 2017",
    experience: "Full Stack Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Work = () => {
  return (
    <div className="">
      {datas.map((data, index) => {
        const { head, date, experience } = data;
        return (
          <div
            key={index}
            className="p-8 bg-white rounded-xl mb-6 ,  dark:bg-gray-800  lg:mb-12 lg:mx-8 lg:flex lg:justify-center items-center"
          >
            <div className="lg:flex lg:gap-12 ">
              <div>{head}</div>
              <div className="lg:flex lg:flex-row-reverse ">
                <div className="mb-4 text-base font-normal text-gray-700  dark:text-gray-300">
                  {date}
                </div>

                <div className="mb-4 text-lg font-semibold text-gray-900  dark:text-gray-200 lg:text-start">
                  {experience}
                  {data.skills.map((skill, index) => {
                    return (
                      <url key={index}>
                        <li className="px-8 dark:text-gray-300 text-base font-normal text-gray-700 mb-1 lg:w-[492px]">
                          {skill}
                        </li>
                      </url>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
