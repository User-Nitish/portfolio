import React from 'react';
import Image from "next/image";

const Introduction = () => {
  return (
    <section className='py-16 md:py-24 max-w-6xl mx-auto px-4' id='introduction'>
      <h2 className="text-3xl md:text-4xl text-white mb-4 text-center font-medium">A bit about me</h2>

      <div className='space-y-8'>
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-brand mb-4">Introduction</h3>
          <p className="text-white text-base md:text-lg">
            I'm Nitish Kumar Singh, a third-year B.Tech CSE student with a deep passion for technology and innovation. I'm driven by the endless possibilities that digital systems and intelligent applications bring to everyday life.
          </p>
          <p className="text-white mt-3 mb-4 text-base md:text-lg">
            My technical skills center around Full Stack Web Development and Artificial Intelligence, with hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js). I create interactive and responsive web applications, working seamlessly across both frontend and backend to deliver smooth user experiences.
          </p>
          <p className="text-white mt-3 mb-4 text-base md:text-lg">
            In addition to MERN, I have practical knowledge of PHP, which I use for backend development and server-side scripting. Coupled with my ability to work with relational databases like MySQL, it broadens my versatility as a developer.
          </p>
          <p className="text-white mt-3 mb-4 text-base md:text-lg">
            I also have a strong foundation in Data Structures and Algorithms (DSA) using C++, which enhances my algorithmic thinking and problem-solving skills. Alongside this, I also hold basic knowledge of Java Programming language.
          </p>
          <p className="text-white mt-3 mb-4 text-base md:text-lg">
            Over the course of my academic journey, I've built a variety of projects—from dynamic websites and RESTful APIs to data-driven applications. I prioritize clean coding practices, logical structuring, and optimizing performance.
          </p>
          <p className="text-white mt-3 mb-4 text-base md:text-lg">
            A believer in continuous growth, I actively explore new technologies and engage with developer communities. I'm enthusiastic about contributing to impactful projects and learning through hands-on challenges.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-brand mb-4">Skills</h3>
          <div className="flex flex-wrap gap-8 justify-center">
            <SkillContainer />
            <FrameworkContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillContainer = () => {
  const tech = [
    { name: "HTML", img: "/HTML.svg" },
    { name: "CSS", img: "/CSS.svg" },
    { name: "JavaScript", img: "/JS.svg" },
    { name: "TypeScript", img: "/TYPESCRIPT.svg" },
    { name: "Python", img: "/PYTHON.svg" },
    { name: "SQL", img: "/SQL.svg" }
  ];

  return (
    <div className="bg-opacity-77 p-4 rounded-lg max-w-xs md:max-w-sm shadow-lg">
      <h3 className="text-lg md:text-xl font-medium text-white text-center mb-4">Programming Languages</h3>
      <div className="grid grid-cols-3 gap-4">
        {tech.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const FrameworkContainer = () => {
  const tools = [
    { name: "React", img: "/REACT.svg" },
    { name: "NextJS", img: "/NEXT.svg" },
    { name: "Express", img: "/EXPRESS.svg" },
    { name: "MongoDB", img: "/MONGO.svg" },
    { name: "Node.js", img: "/NODE.svg" },
    { name: "Tailwind", img: "/TAILWIND.svg" },
    { name: "PHP", img: "/PHP.svg" },
    { name: "MySQL", img: "/MYSQL.svg" },
    { name: "C++", img: "/CPP.svg" },
    { name: "Figma", img: "/FIGMA.svg" },
    { name: "Java", img: "/JAVA.svg" },
    { name: "JavaScript", img: "/JS.svg" }
  ];

  return (
    <div className="bg-opacity-77 p-4 rounded-lg max-w-5xl shadow-lg">
      <h3 className="text-lg md:text-xl font-medium text-white text-center mb-4">Frameworks & Tools</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((skill, index) => (
          <SkillBox key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBox = ({ skill }) => (
  <div className="flex flex-col items-center justify-center bg-[#0E101B] bg-opacity-77 rounded-lg p-3 md:p-4 w-[90px] md:w-[100px] h-[90px] md:h-[100px] text-center shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image src={skill.img} alt={skill.name} width={30} height={30} className="mb-2" />
    <p className="text-white text-xs md:text-sm truncate">{skill.name}</p>
  </div>
);

export default Introduction;
