import { JsIcon } from "./Icons/JsIcon";
import { Typesc } from "./Icons/Type";
import { ReacT } from "./Icons/React";
import { Git } from "./Icons/Git";
import { Story } from "./Icons/Story";
import { Js } from "./Icons/Js";
import { Ex } from "./Icons/Exicon";
import { Nestjs } from "./Icons/Nestjs.icon";
import { Socket } from "./Icons/Socket";
import { Sass } from "./Icons/Sass";
import { Mongo } from "./Icons/Mongo";

import { Figma } from "./Icons/Fig";
import { Cypress } from "./Icons/Cypress";

let apps = [
  { id: 1, text: "JavaScript", icon: <JsIcon /> },
  { id: 2, text: "Typescript", icon: <Typesc /> },
  { id: 3, text: "React", icon: <ReacT /> },
  { id: 4, text: "Next.js", icon: <Nestjs /> },
  { id: 5, text: "Node.js", icon: <Js /> },
  { id: 6, text: "Express.js", icon: <Ex /> },
  { id: 7, text: "Nest.js", icon: <Nestjs /> },
  { id: 8, text: "Socket.io", icon: <Socket /> },
  { id: 9, text: "Story", icon: <Story /> },
  { id: 10, text: "MongoDB", icon: <Mongo /> },
  { id: 11, text: "Sass/Scss", icon: <Sass /> },
  { id: 13, text: "ReFigmaact", icon: <Figma /> },
  { id: 14, text: "Cypress", icon: <Cypress /> },
  { id: 16, text: "Git", icon: <Git /> },
];

const Tool = (props) => {
  const { text, icon } = props;
  return (
    <div className="">
      <p className="flex justify-center mb-2">{icon}</p>
      <p className="text-center dark:text-gray-100">{text}</p>
    </div>
  );
};

export const Code = () => {
  return (
    <div className=" grid grid-cols-3 lg:grid-cols-7 gap-y-12">
      {apps.map((app) => {
        return <Tool key={app.id} icon={app.icon} text={app.text}></Tool>;
      })}
    </div>
  );
};
