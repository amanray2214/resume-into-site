
import { 
  CPlusPlus, 
  JavaScript, 
  Java, 
  Python, 
  R, 
  Html, 
  Css, 
  Bootstrap,
  Nodejs,
  React as ReactIcon,
  Mysql,
  Mongodb,
  Git,
  Github,
  Database,
  Code,
  VisualStudio
} from "lucide-react";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: React.ElementType;
  }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "C++", icon: CPlusPlus },
        { name: "JavaScript", icon: JavaScript },
        { name: "Java", icon: Java },
        { name: "Python", icon: Python },
        { name: "R", icon: R }
      ]
    },
    {
      name: "Front-end",
      skills: [
        { name: "HTML", icon: Html },
        { name: "CSS", icon: Css },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "React", icon: ReactIcon }
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: Code },
      ]
    },
    {
      name: "Databases/Tools",
      skills: [
        { name: "MySQL", icon: Mysql },
        { name: "MongoDB", icon: Mongodb },
        { name: "Hadoop", icon: Database },
        { name: "Git", icon: Git },
        { name: "GitHub", icon: Github },
        { name: "Visual Studio", icon: VisualStudio }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="space-y-10 animate-on-scroll">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-bold mb-6 text-center">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-md mb-3 skill-icon">
                      <skill.icon size={32} />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
