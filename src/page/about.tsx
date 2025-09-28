"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16 space-y-8">

            <BlurFade delay={0.25} inView>
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                <p className="text-muted-foreground max-w-3xl">
                    I’m a web developer focused on building delightful user experiences and robust frontends. With a strong
                    foundation in JavaScript/TypeScript, React, and Laravel, I convert ideas into polished, accessible interfaces.
                    I care deeply about performance, design systems, and maintainable code.
                </p>
            </BlurFade>

            <div className="grid md:grid-cols-1 gap-6">
                <BlurFade delay={0.25} inView>

                    <Card>
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-lg">
                            <div>
                                <p className="font-medium">Diploma in Computer Engineering</p>
                                <p className="text-muted-foreground">Gujarat Technological University 2021 - 2024<strong> with 9.05 CGPA</strong></p>
                            </div>
                            <div>
                                <p className="font-medium">Schooling 10 standard </p>
                                <p className="text-muted-foreground">Adarsh School 2010 - 2021 <strong> with 86%</strong></p>
                            </div>
                        </CardContent>
                    </Card>
                </BlurFade>
                {/* <BlurFade delay={0.25} inView>
                
                <Card>
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div>
                            <p className="font-medium">Frontend Developer • Company A</p>
                            <p className="text-muted-foreground">2023 – Present</p>
                            <p className="mt-1">
                                Built component libraries and dashboards in React, led accessibility and performance improvements.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium">Web Developer • Company B</p>
                            <p className="text-muted-foreground">2022 – 2023</p>
                            <p className="mt-1">
                                Delivered responsive marketing sites and integrated CMS workflows using modern tooling.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                </BlurFade> */}
            </div>
        </section>
    )
}
