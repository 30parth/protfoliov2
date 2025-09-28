import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="mx-auto w-full max-w-5xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Parth Solanki. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/30parth"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
                    >
                        <GitHubLogoIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/parth-solanki-b23a90320/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
                    >
                        <LinkedInLogoIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
