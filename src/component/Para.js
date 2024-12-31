import styles from "@/component/tomSty.module.css";
import { Locationsvg } from "./location";

export const Tomintroduction = () => {
  return (
    <div className="gap-y-2">
      <h1 className="text-4xl font-semibold text-grey-900 lg:text-6xl lg:font-bold dark:text-gray-200">
        Hi, Im Tom 👋
      </h1>
      <p className="text-gray-600 text base font-normal dark:text-gray-400">
        I specialize in full stack development, particulary with React.js and
        Node .js. My main goal is to create exceptional dijital experiences that
        are fast, visusally appealing, and accessible to everyone. With over
        7years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
    </div>
  );
};

export const Location = () => {
  return (
    <div className="gap-y-2">
      <div className="flex gap-x-2">
        <Locationsvg></Locationsvg>
        <p className="text-gray-600 text-base font-normal  dark:text-gray-400">
          Ulaanbaatar, Mongolia
        </p>
      </div>
      <div className="flex gap-x-2">
        <div className="w-2 h-2 rounded-md border-0 bg-emerald-500 ml-2 mt-2 "></div>
        <p className="text-gray-600 text-base font-normal ml-2 dark:text-gray-400">
          Available for new project
        </p>
      </div>
    </div>
  );
};

export const Tomcareer = () => {
  return (
    <div className="text-start gap-y-6">
      <div className="text-2xl font-semibold text-gray-900 mb-6 lg:text-3xl dark:text-gray-50">
        Curious about me? Here you have it:
      </div>
      <div className="flex flex-col space-y-4 text-base font-normal text-gray-600 gap-y-4 dark:text-gray-400">
        <div>
          Im a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </div>
        <div>
          Since starting my web development journey in 2015, Ive embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, Im building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </div>
        <div>
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, youll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </div>
        <div>Finally, some quick bits about me.</div>
        <div className={styles.list}>
          <div>
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
          </div>
          <div>
            <li>Avid learner</li>
          </div>
        </div>
        <div>
          One last thing, Im available for freelance work, so feel free to reach
          out and say hello! I promise I do not bite 😉
        </div>
      </div>
    </div>
  );
};
