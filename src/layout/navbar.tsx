"use client"

import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <NavLink to="/" className="font-semibold text-xl tracking-tight">
              {"<Parth Solanki />"}
            </NavLink>
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "px-3 py-2 text-sm rounded-md transition-colors",
                      isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
                    ].join(" ")
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
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
            <NavLink to="/contact">
              <Button size="sm">Contact Me</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <nav className="md:hidden border-t">
        <div className="mx-auto w-full max-w-5xl px-2 py-2 flex items-center gap-1 overflow-x-auto">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "px-3 py-2 text-sm rounded-md whitespace-nowrap",
                  isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
                ].join(" ")
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
