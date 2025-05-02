
const AboutSection = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="prose max-w-none animate-on-scroll">
              <p className="text-lg mb-4">
                I am a passionate Software Developer with a Bachelor's degree in Computer Science and Engineering from Lovely Professional University. 
                My expertise spans across web development, machine learning, and data analysis.
              </p>
              <p className="text-lg mb-4">
                With strong problem-solving skills and experience in team collaboration, 
                I enjoy tackling complex challenges and creating innovative solutions. 
                I have worked on various projects ranging from portfolio websites to 
                face detection systems and machine learning models.
              </p>
              <p className="text-lg">
                I am constantly learning and adapting to new technologies, with a focus on 
                building efficient, user-friendly applications. I am dedicated to writing clean, 
                maintainable code and delivering high-quality software products.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-medium w-24">Name:</span>
                    <span>Aman Kumar Ray</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-24">Email:</span>
                    <span>amanray627@gmail.com</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-24">Phone:</span>
                    <span>8728884245</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">My Interests</h3>
                <ul className="space-y-2">
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Data Analysis</li>
                  <li>Problem Solving</li>
                  <li>Open Source</li>
                </ul>
              </div>
              <div className="bg-accent rounded-lg p-6 md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Professional Skills</h3>
                <ul className="space-y-2">
                  <li>Problem-Solving Skills</li>
                  <li>Team Player</li>
                  <li>Project Management</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
