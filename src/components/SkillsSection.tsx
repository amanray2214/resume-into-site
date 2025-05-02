
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
  Atom,
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
    color: string;
    bgColor: string;
  }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "C++", icon: Code, color: "#00599C", bgColor: "#E2F0FF" },
        { name: "JavaScript", icon: FileCode, color: "#F7DF1E", bgColor: "#FFFBE8" },
        { name: "Java", icon: Coffee, color: "#007396", bgColor: "#E0F2F7" },
        { name: "Python", icon: Binary, color: "#3776AB", bgColor: "#EBF1F8" },
        { name: "R", icon: CircleSlash, color: "#276DC3", bgColor: "#E9F1FA" }
      ]
    },
    {
      name: "Front-end",
      skills: [
        { name: "HTML", icon: FileText, color: "#E34F26", bgColor: "#FDEEEA" },
        { name: "CSS", icon: Palette, color: "#1572B6", bgColor: "#E3F2FD" },
        { name: "Bootstrap", icon: Layout, color: "#7952B3", bgColor: "#F3EFF9" },
        { name: "React", icon: Atom, color: "#61DAFB", bgColor: "#E6FBFF" }
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Node.js", icon: Server, color: "#339933", bgColor: "#EBFAEB" },
        { name: "Express.js", icon: Code, color: "#000000", bgColor: "#F0F0F0" },
      ]
    },
    {
      name: "Databases/Tools",
      skills: [
        { name: "MySQL", icon: Database, color: "#4479A1", bgColor: "#ECF2F8" },
        { name: "MongoDB", icon: Database, color: "#47A248", bgColor: "#ECFAEC" },
        { name: "Hadoop", icon: Database, color: "#FF7A00", bgColor: "#FFF1E6" },
        { name: "Git", icon: GitBranch, color: "#F05032", bgColor: "#FDECE8" },
        { name: "GitHub", icon: Github, color: "#181717", bgColor: "#E8E8E8" },
        { name: "Visual Studio", icon: FileTerminal, color: "#5C2D91", bgColor: "#F0EBF7" }
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
                  <div key={skill.name} className="flex flex-col items-center group">
                    <div 
                      className="p-4 rounded-full shadow-md mb-3 skill-icon transition-all duration-300 transform group-hover:scale-110" 
                      style={{ 
                        backgroundColor: skill.bgColor, 
                        border: `2px solid ${skill.color}`
                      }}
                    >
                      <skill.icon size={32} color={skill.color} />
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
