import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
    {
        title: "CRM System",
        description: "A full-featured CRM system built with React and Django.",
        link: "https://your-crm-link.com",
    },
    {
        title: "Dating App",
        description: "A modern dating app using React and Firebase.",
        link: "https://your-dating-app.com",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my skills and projects.",
        link: "https://your-portfolio.com",
    },
];

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {projects.map((project, index) => (
                <Card key={index} className="bg-black text-white hover:shadow-xl transition border border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300">{project.description}</p>
                        <a href={project.link} target="_blank" className="text-blue-400 hover:underline">
                            View Project
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Projects;

