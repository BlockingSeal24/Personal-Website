import { ArrowDown, ChevronDown } from "lucide-react";
import HeroTitle from "./HeroTitle";


export const HeroSection = () => {
    return (<section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <HeroTitle />
                </h1>

                <p>
                    {/* Paragraph under Name */}
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="buttons">
                        View My Projects
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground"> About Me </span>

            <div className="flex flex-col items-center -space-y-4">
                <ChevronDown className="h-6 w-6 scale-x-150 origin-center opacity-100" />
                <ChevronDown className="h-6 w-6 scale-x-150 origin-center opacity-60" />
                <ChevronDown className="h-6 w-6 scale-x-150 origin-center opacity-20" />
            </div>
        </div>
    </section>);
};