
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
    Frontend: ["React", "TypeScript", "Next.js", "React Router", "Tailwind CSS", "shadcn/ui"],
    Backend: ["Express", "My SQL", "MongoDB", "Laravel","PHP"],
    Tooling: ["Git/GitHub"],
}
const Skill = () => {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16 space-y-8">
            <BlurFade delay={0.25} inView>

                <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
                <p className="text-muted-foreground">A concise look at my current tech stack.</p>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([group, list], idx) => (
                    <BlurFade delay={0.25} inView>
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle>{group}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {list.map((item) => (
                                    <Badge key={item} variant="secondary" className="px-3 py-1">
                                        {item}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </BlurFade>
                ))}
            </div>
        </section>
    )

}

export default Skill
