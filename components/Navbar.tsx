import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-bg/80 backdrop-blur-md border-b border-dark-surface">
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center py-4">
        <Link href="#hero" className="font-heading text-2xl font-bold text-white">
          Prince<span className="text-primary">zoid</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="font-heading font-semibold text-dark-text-muted hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="font-heading font-semibold text-dark-text-muted hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="font-heading font-semibold text-dark-text-muted hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="font-heading font-semibold text-dark-text-muted hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;