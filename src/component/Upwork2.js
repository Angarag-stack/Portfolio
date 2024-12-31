import { Upwork } from "./Icons/Upworksvg";
let datas = [
  {
    id: 1,
    head: <Upwork />,
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
    head: <Upwork />,
    date: "Jul 2017 - Oct 2021",
    experience: "Team Lead",
    skills: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit. ",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 3,
    head: <Upwork />,
    date: "Dec 2015 - May 2017",
    experience: "Full Stack Developer",
    skills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];
// const Head = (props) => {

//   return (
//     <div>
//       <div>{head}</div>
//       <div>
//         <div>{date}</div>
//         <div>
//           <div>{experience}</div>
//           <li>{skill}</li>
//           {skills.map((skill) => {
//             return;
//           })}
//         </div>
//       </div>
//       ;
//     </div>
//   );
// };
// const Developer = (props) => {
//   const { skill } = props;
//   return <li>{skill}</li>;
// };

export const Experience = () => {
  return (
    <div>
      {datas.map((data, index) => {
        const { head, date, experience } = data;
        return (
          <div key={index}>
            <div>{head}</div>
            <div>
              <div>{date}</div>
              <div>
                <div>{experience}</div>

                {data.skills.map((skill, index) => {
                  return (
                    <url key={index}>
                      <li>{skill}</li>
                    </url>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
// return{skills.map((skill) => {
//     return <li skill={skill}></li>;
//   })}
//   <Head
//     date={data.date}
//     experience={data.experience}
//     head={data.head}
//   ></Head>
