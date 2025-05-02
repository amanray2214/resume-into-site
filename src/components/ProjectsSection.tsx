
import { 
  Code,
  BarChart,
  Music
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: React.ElementType;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      duration: "Jan 2023 - March 2023",
      description: [
        "Designed and developed a dynamic portfolio website to showcase personal projects, skills, and experience as software web developer",
        "Created responsive and interactive UI using HTML, CSS, JavaScript with responsive design",
        "Implemented backend functionality with Node.js and Express.js to manage server-side logic and APIs for seamless content delivery"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
      icon: Code,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    },
    {
      title: "Face Detection System",
      duration: "July 2023 - Dec 2023",
      description: [
        "Developed a real-time face detection system using OpenCV and TensorFlow, capable of identifying faces in live video streams with high accuracy and low latency",
        "Applied advanced computer vision techniques for precise face detection, and feature extraction for robust facial recognition across varying lighting and position conditions",
        "Integrated and deployed models on desktop platforms for real-time performance, demonstrating practical implementation of deep learning in computer vision"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Jupyter Notebook"],
      icon: BarChart,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      title: "Spotify Songs Popularity Prediction",
      duration: "May 2024 - Sept 2024",
      description: [
        "Built a machine learning model to predict Spotify song popularity based on audio features and metadata",
        "Collected and processed real-time song data via Spotify API; performed exploratory data analysis to uncover patterns and insights",
        "Improved model accuracy through feature engineering, correlation analysis, and performance tuning using regression techniques and evaluation metrics",
        "Developed APIs to form a smooth interface between database and the platform"
      ],
      technologies: ["Python", "Spotify API", "Pandas", "Numpy", "Matplotlib", "Jupyter Notebook"],
      icon: Music,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card animate-on-scroll overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
                <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
