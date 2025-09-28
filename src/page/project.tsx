import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
type Project = {
    title: string
    description: string
    image: string
    github?: string
    demo?: string
}

const projects: Project[] = [
    {
        title: "Portfolio",
        description: "A portfolio built with React, shadcn/ui, and charting.",
        image: "/new-p.png",
        github: "https://github.com/30parth/protfoliov2",
        demo: "https://example.com/demo-one",
    },
    {
        title: "Foodly ",
        description: "Basical online Food Delivery Marketing Website.",
        image: "/foodly.png",
        github: "https://github.com/30parth/Foodly",
    },
    {
        title: "Old Version of Portfolio",
        description: "Normal HTML CSS based portfolio website.",
        image: "/old_portfilio.png",
        github: "https://github.com/30parth/profiliov1",
        demo: "https://parthsolankij.netlify.app/",
    },
    {
        title: "NewsMonky ",
        description: "A news website built with React and NewsAPI.",
        image: "/news.png",
        github: "https://github.com/30parth/NewsApp",
    },
]


const Project = () => {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16 space-y-8">
            <BlurFade delay={0.25} inView>
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <p className="text-muted-foreground">Some things I’ve built recently.</p>
            </BlurFade>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, idx) => (

                    <BlurFade delay={0.25} inView key={idx}>

                        <Card className="h-full flex flex-col">
                            <CardHeader className="p-0">
                                <img
                                    src={p.image || "/placeholder.svg?height=160&width=320&query=project%20preview"}
                                    alt={`${p.title} preview`}
                                    className="w-full h-40 object-cover rounded-t-lg border-b"
                                />
                            </CardHeader>
                            <CardContent className="pt-4">
                                <CardTitle className="text-lg">{p.title}</CardTitle>
                                <CardDescription className="mt-1">{p.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="mt-auto gap-2">
                                {p.github && (
                                    <a href={p.github} target="_blank" rel="noreferrer">
                                        <Button variant="outline" size="sm">
                                            GitHub
                                        </Button>
                                    </a>
                                )}
                                {p.demo && (
                                    <a href={p.demo} target="_blank" rel="noreferrer">
                                        <Button size="sm">Live Demo</Button>
                                    </a>
                                )}
                            </CardFooter>
                        </Card>
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}

export default Project
