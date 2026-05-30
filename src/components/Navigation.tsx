import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Mission", id: "mission" },
  { label: "Process", id: "process" },
  { label: "Team", id: "team" },
  { label: "Support Us", id: "donations" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Manus Nova - A Helping Hand"
              className="h-12 w-auto rounded-full logo-3d-hover cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-muted-foreground hover:text-foreground transition-all text-3d-hover cursor-pointer text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden sm:inline-flex"
                >
                  Get Involved
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get Involved with Manus Nova</DialogTitle>
                  <DialogDescription>We'd love to have you join our team!</DialogDescription>
                </DialogHeader>
                <Card className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contact Us</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Email:</span>{" "}
                        <a href="mailto:teammanusnova@gmail.com" className="text-primary hover:underline">
                          teammanusnova@gmail.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Location:</span> Bronx High School of Science
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Instagram:</span>{" "}
                        <a
                          href="https://instagram.com/projectmanusnova"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          @projectmanusnova
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Reach out by email or Instagram to join.
                    </p>
                  </div>
                </Card>
              </DialogContent>
            </Dialog>

            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:teammanusnova@gmail.com" className="text-primary text-sm font-medium">
              Get Involved →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
