import { ArrowUp, Github, Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"


export const Footer = () => {

    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-6 flex flex-wrap justify-between items-center">
        <div>
            <h2 className="text-lg text-muted-foreground text-left font-semibold"> Tony Li</h2>
            <p className="text-sm text-muted-foreground text-left"> tli.hba2027@ivey.ca </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-center">
            <a href="mailto:tli.hba2027@ivey.ca" className="relative flex items-center px-4 py-3 rounded-full bg-primary/20 hover:bg-primary/40 hover:text-primary transition-colors" >
                <Mail className="h-8 w-8"/>
            </a>

            <a
                href="https://www.linkedin.com/in/tonyhdli/"
                target="_blank"
                className="relative flex items-center px-4 py-3 rounded-full bg-primary/20 hover:bg-primary/40 hover:text-primary transition-colors"
            >
                <FaLinkedin className="h-8 w-8"/>
            </a>

            <a
                href="https://github.com/BlockingSeal24/"
                target="_blank"
                className="relative flex items-center px-4 py-3 rounded-full bg-primary/20 hover:bg-primary/40 hover:text-primary transition-colors"
            >
                <Github className="h-8 w-8"/>
            </a>
        </div>

        <a href="#hero" className="rounded-full bg-primary/40 hover:bg-primary/60 transition-colors h-12 w-12 flex items-center justify-center">
            <ArrowUp className="h-8 w-8" />
        </a>
    </footer>
}