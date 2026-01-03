import { Mail, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "../lib/util";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;

        setIsSubmitting(true);

        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("EmailJS environment variables are missing.");
            }

            await emailjs.sendForm(serviceID, templateID, form, publicKey);

            form.reset();

            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out! I will get back to you as soon as possible.",
            });

        } catch (err) {
            console.error("Error sending email:", err);

            toast({
                title: "Message Sending Failed.",
                description: "Failed to send message. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold md:text-4xl mb-4 text-center text-primary underline decoration-foreground decoration-2 underline-offset-8">Contact <span className="text-foreground">Me</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:items-center">
                <div className="space-y-8 flex flex-col justify-center md:pl-32">
                    <h3 className="text-2xl font-semibold mb-6 text-primary"> {/*Title*/}
                        Let's Get in Touch!
                    </h3>
                    <div className="space-y-6 justify-center">
                        <p className="mx-auto text-center leading-relaxed max-w-[30ch]">Thanks for checking out my personal portfolio! If you have any questions, opportunities, feedback, or just want to say hello, feel free to reach out!</p>
                        <div className="flex justify-center">
                            <a
                                href="mailto:tli.hba2027@ivey.ca"
                                className="relative flex items-center px-4 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors min-w-65"
                            >
                                <Mail className="absolute left-4 h-6 w-6" />
                                <span className="mx-auto text-muted-foreground hover:text-primary">
                                    tli.hba2027@ivey.ca
                                </span>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="https://www.linkedin.com/in/tonyhdli/"
                                target="_blank"
                                className="relative flex items-center px-4 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors min-w-65"
                            >
                                <FaLinkedin className="absolute left-4 h-6 w-6 text-[#0A66C2]" />
                                <span className="mx-auto text-muted-foreground hover:text-primary">
                                    Tony Li
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="date"
                            value={new Date().toLocaleString()}
                        />

                        <div>
                            <label htmlFor="name" className="text-left block text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required placeholder="Your Name" />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-left block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required placeholder="Your Email" />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-left block text-sm font-medium mb-2">Message</label>
                            <textarea id="message" name="message" className="w-full h-32 px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required placeholder="Message" />
                        </div>
                        
                        <button type="submit" className={cn("buttons w-full flex items-center justify-center gap-2",)} disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
};