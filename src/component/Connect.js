import { Email, Phone, Copy } from "./Icons/Mail";
export const Connect = () => {
  return (
    <div className="lg:text-4xl font-semibold  dark:text-gray-100 ">
      <div className="flex justify-center items-center gap-5">
        <Email></Email>
        <a className="lg:mb-4">tom@pinecone.mn</a>
        <Copy></Copy>
      </div>
      <div className="flex justify-center mb-4 items-center gap-5">
        <Phone></Phone>
        <a>+976 88112233</a>
        <Copy></Copy>
      </div>
    </div>
  );
};
