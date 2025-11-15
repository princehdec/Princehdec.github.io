import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full nav-frost">
      <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center py-3">
        <Link href="#hero" className="font-heading text-2xl font-bold text-white">
          Prince<span className="text-[var(--accent)]">zoid</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="font-heading font-medium text-dark-text-muted hover:text-[var(--accent)] transition-colors">
            About
          </Link>
          <Link href="#projects" className="font-heading font-medium text-dark-text-muted hover:text-[var(--accent)] transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="font-heading font-medium text-dark-text-muted hover:text-[var(--accent)] transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="font-heading font-medium text-dark-text-muted hover:text-[var(--accent)] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;