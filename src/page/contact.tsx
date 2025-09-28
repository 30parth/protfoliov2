
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BlurFade } from '@/components/ui/blur-fade';
const Contact = () => {

    const form = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('Success:', result.text);
                alert('Thanks! Your message has been sent.');
                setStatus("success");
            },
            (error) => {
                console.log('Error:', error.text);
                alert('Oops! Something went wrong.');
            }
        );
        e.currentTarget.reset()
    }

    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16 space-y-8">
            <BlurFade delay={0.25} inView>

                <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
                <p className="text-muted-foreground">Have a project in mind? Let’s talk.</p>
            </BlurFade>


            <form ref={form} onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-4 border rounded-lg p-4 md:p-6">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project..." required rows={6} />
                </div>
                <div className="flex items-center gap-3">
                    <Button type="submit" disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                    {status === "success" && <p className="text-sm text-emerald-600">Thanks! I’ll get back to you soon.</p>}
                </div>
            </form>
        </section>
    )
}

export default Contact