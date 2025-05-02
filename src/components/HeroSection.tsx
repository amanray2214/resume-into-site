
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-accent pt-16">
      <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="animate-on-scroll">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary">Aman Kumar Ray</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 animate-on-scroll">
            Software Developer with expertise in Machine Learning and Web Development
          </p>
          <div className="pt-4 flex flex-wrap gap-4 animate-on-scroll">
            <a href="#contact">
              <Button size="lg">Contact Me</Button>
            </a>
            <a href="/resume.pdf" download="Aman_Kumar_Ray_Resume.pdf">
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center animate-on-scroll">
          <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-8 border-white shadow-xl">
            <img
              src="/lovable-uploads/6790d807-798b-45b9-98cb-c9af50242dcf.png"
              alt="Aman Kumar Ray"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
