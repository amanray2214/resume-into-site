
import { 
  Code, 
  FileCode, 
  Coffee, 
  Binary, 
  CircleSlash, 
  FileText, 
  Palette, 
  Layout,
  Server,
  ReactIcon,
  Database,
  GitBranch,
  Github,
  FileTerminal
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
        { name: "C++", icon: Code },
        { name: "JavaScript", icon: FileCode },
        { name: "Java", icon: Coffee },
        { name: "Python", icon: Binary },
        { name: "R", icon: CircleSlash }
      ]
    },
    {
      name: "Front-end",
      skills: [
        { name: "HTML", icon: FileText },
        { name: "CSS", icon: Palette },
        { name: "Bootstrap", icon: Layout },
        { name: "React", icon: ReactIcon }
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Code },
      ]
    },
    {
      name: "Databases/Tools",
      skills: [
        { name: "MySQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Hadoop", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "Visual Studio", icon: FileTerminal }
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
