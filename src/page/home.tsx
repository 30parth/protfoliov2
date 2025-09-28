import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { FlipText } from "@/components/ui/flip-text"
import { TextAnimate } from "@/components/ui/text-animate"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-blue-600">Web Developer</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                            <FlipText>
                                Hi, I’m Parth Solanki
                            </FlipText>
                        </h1>
                        <div className="text-muted-foreground text-pretty">
                            <TextAnimate by="word" delay={0.5} duration={1}>
                                I build performant, accessible web apps with React, Node.js, and modern tooling. I love crafting clean UIs
                                and scalable frontends that users enjoy.
                            </TextAnimate>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <NavLink to="/contact">
                            <Button>Contact Me</Button>
                        </NavLink>
                        <a
                            href="https://github.com/30parth"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                            <GitHubLogoIcon /> GitHub
                        </a>
                    </div>
                </div>
                <BlurFade delay={0.25} inView>
                    <div className="relative">
                        <img
                            src="/parth.png"
                            alt="Developer workspace illustration"
                            className="w-full rounded-xl border"
                        />
                    </div>
                </BlurFade>
            </div>
        </section>

    )
}

export default Home
