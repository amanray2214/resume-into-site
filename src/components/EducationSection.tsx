
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  grade: string;
}

const EducationSection = () => {
  const educations: Education[] = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "Since August 2022",
      grade: "CGPA: 8.7"
    },
    {
      institution: "RPM +2 High School",
      location: "Jamshedpur",
      degree: "12th Standard",
      duration: "April 2020 - March 2022",
      grade: "Percentage: 78.4%"
    },
    {
      institution: "Chhatasgareswar Vikas High School",
      location: "Jamshedpur",
      degree: "10th Standard",
      duration: "April 2018 - March 2020",
      grade: "Percentage: 81.8%"
    }
  ];

  const certificates = [
    "Data Analysis with Tableau - Coursera (Aug 24 - Nov 24)",
    "Complete Machine Learning & Data Science Program - GFG (May 24 - Sept 24)",
    "Excel Skills for Data Analytics and Visualization - Coursera (Jan 24 - April 24)",
    "Supervised Machine Learning Regression and Classification - Coursera (Aug 24 - Oct 24)",
    "Data Structures and Algorithm - NSec Celeb (July 25 - Nov 23)",
    "CSS & JavaScript-Certification course for Beginners - Udemy (Sept 23 - Dec 23)"
  ];

  return (
    <section id="education" className="bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Academic Background</h3>
            {educations.map((edu, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <School className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <p className="text-sm text-gray-500">{edu.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-600">{edu.duration}</span>
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Certificates</h3>
            <Card>
              <CardHeader>
                <CardTitle>Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-md">
                      <div className="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">Achievements</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Participated in various Hackathons and Workshops at Lovely Professional University.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Contributed to a Community Development Project aimed at improving digital literacy.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
