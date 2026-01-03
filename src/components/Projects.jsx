import { Github } from "lucide-react";


const projList = [
    {
        id: 1,
        title: "QuackHaven",
        description: "A virtual pet game where players care for a digital companion by managing its vital status, and includes the QuackJack minigame which is based on Blackjack.",
        image: "/projects/1.png",
        tags: ["Java", "JavaFX", "JUnit", "CSS", "JSON", "Git", "UML", "IntelliJ"],
        githubUrl: "https://github.com/BlockingSeal24/QuackHaven",
    },

    {
        id: 2,
        title: "Canada Computers Stock Tracker",
        description: "An automated stock tracking script for products listed on the Canada Computers website. Sends Discord notifications when items are back in stock.",
        image: "/projects/2.png",
        tags: ["JavaScript", "Node.js", "Playwright", "Axios", "Discord Webhooks"],
        githubUrl: "https://github.com/BlockingSeal24/CCTrack",
    }

];

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projList.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="aspect-4/3 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-secondary text-xs px-2 py-1 rounded-full font-medium text-secondary-foreground border bg-primary/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-muted-foreground text-sm mb-4 max-w-prose mx-auto leading-relaxed">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};