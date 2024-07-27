/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Layout from "./sub-components/Layout";
import AnimatedText from "./sub-components/AnimatedText";
import {
  Html,
  HtmlHover,
  Css,
  CssHover,
  JavaScript,
  JavaScriptHover,
  ReactIcon,
  ReactIconHover,
  ReactNative,
  ReactNativeHover,
  Expo,
  ExpoHover,
  Ionic,
  IonicHover,
  NextJS,
  NextJSHover,
  TailwindCSS,
  TailwindCSSHover,
  NodeJS,
  NodeJSHover,
  ExpressJS,
  ExpressJSHover,
  PHP,
  PHPHover,
  MongoDB,
  MongoDBHover,
  MySQL,
  MySQLHover,
  PostgreSql,
  PostgreSqlHover,
  TypeScript,
  TypeScriptHover,
} from "./icons/icons";

const skills = [
  { Icon: Html, HoverIcon: HtmlHover, alt: "HTML" },
  { Icon: Css, HoverIcon: CssHover, alt: "CSS" },
  { Icon: JavaScript, HoverIcon: JavaScriptHover, alt: "JavaScript" },
  { Icon: TypeScript, HoverIcon: TypeScriptHover, alt: "TypeScript" },
  { Icon: ReactIcon, HoverIcon: ReactIconHover, alt: "React" },
  { Icon: ReactNative, HoverIcon: ReactNativeHover, alt: "React Native" },
  { Icon: Expo, HoverIcon: ExpoHover, alt: "Expo" },
  { Icon: Ionic, HoverIcon: IonicHover, alt: "Ionic" },
  { Icon: NextJS, HoverIcon: NextJSHover, alt: "Next.js" },
  { Icon: TailwindCSS, HoverIcon: TailwindCSSHover, alt: "Tailwind CSS" },
  { Icon: NodeJS, HoverIcon: NodeJSHover, alt: "Node.js" },
  { Icon: ExpressJS, HoverIcon: ExpressJSHover, alt: "Express.js" },
  { Icon: PHP, HoverIcon: PHPHover, alt: "PHP" },
  { Icon: MongoDB, HoverIcon: MongoDBHover, alt: "MongoDB" },
  { Icon: PostgreSql, HoverIcon: PostgreSqlHover, alt: "PostgreSql" },
  { Icon: MySQL, HoverIcon: MySQLHover, alt: "MySQL" },
];

const SkillIcon = ({ Icon, HoverIcon, alt }) => (
  <div className="flex flex-col items-center">
    <motion.div
      className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 group"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 fill-black/90 dark:fill-white/90" />
      <HoverIcon className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
    <p className="mt-2 text-sm font-medium text-black dark:text-white">{alt}</p>
  </div>
);

const Skills = () => {
  return (
    <main
      id="skills"
      className="flex items-center text-black w-screen min-h-fit dark:text-white text-center"
    >
      <Layout className="pt-16">
        <AnimatedText
          text="Expertise to help bring your ideas to life"
          className="mb-8"
        />
        <h2 className="mb-4 text-3xl font-bold uppercase text-black/75 dark:text-white/75 cursor-default">
          Skills
        </h2>
        <div className="h-full w-full mx-auto flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <SkillIcon
                Icon={skill.Icon}
                HoverIcon={skill.HoverIcon}
                alt={skill.alt}
              />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default Skills;
