import myPhoto from "../assets/me.jpg";

export const AboutMe = () => {
    return <section id="about" className="py-24 px-5 relative">
        {" "}
        <div className="mx-auto max-w-fit">
            <div className="rounded-2xl bg-background/40 backdrop-blur border-4 border-primary p-8">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <img
                                src={myPhoto}
                                alt="Tony Li"
                                className="rounded-2xl border-3 border-primary shadow-lg max-w-xs md:max-w-sm object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 gap-4">
                        <h3 className="text-2xl font-semibold"></h3>

                        <p className="text-muted-foreground">
                            Hello! I'm Tony Li and I'm a third-year <span className="text-primary font-semibold">Computer Science</span> student at Western University and
                            an <span className="text-primary font-semibold">Honours Business Administration</span> student at Ivey Business School. 
                        </p>

                        <p className="text-muted-foreground">
                            I'm excited to learn more about systems engineering, systems design, and developing software that solves real-world problems, 
                            no matter how small they seem. I'm also eager to grow my skill set through new projects, internships, and hands-on experience.
                        </p>

                        <p className="text-muted-foreground">
                            I love exploring new tech, especially building PCs and experimenting with integrating unique hardware. 
                            Over time, I've also developed an interest in audio-visual productions and live events, 
                            learning new consoles and how different systems integrate for each show.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <a href="/Tony_Resume.pdf" target="_blank" rel="noopener noreferrer" className="buttons">
                                Resume
                            </a>

                            <a href="#contact" className="buttons bg-transparent text-primary border border-primary hover:bg-primary hover:text-background">
                                Get in Touch
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
};