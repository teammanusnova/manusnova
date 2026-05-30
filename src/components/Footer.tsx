const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">MN</span>
              </div>
              <h3 className="text-xl font-semibold">manus nova</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering students to engineer solutions that transform lives,
              one prosthetic at a time. Join us in our mission to make mobility
              accessible to everyone in our community.
            </p>
            <a
              href="https://instagram.com/projectmanusnova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @projectmanusnova
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Our Mission", id: "mission" },
                { label: "Our Process", id: "process" },
                { label: "Meet the Team", id: "team" },
                { label: "Support Us", id: "donations" },
                { label: "Get in Touch", id: "contact" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>The Bronx High School of Science</p>
              <p>75 W 205th St</p>
              <p>Bronx, NY 10468</p>
              <p className="pt-2">
                <a href="mailto:teammanusnova@gmail.com" className="hover:text-primary-foreground transition-colors">
                  teammanusnova@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Manus Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
