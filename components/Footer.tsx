const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-8 bg-black text-dark-text-muted text-sm border-t border-dark-surface">
      <div className="container-wrapper !py-0">
        <p className="font-heading text-lg text-white mb-1">Prince Sharma (Princezoid)</p>
        <p>3D Environment Artist • Lucknow, India</p>
        <p className="mt-4">&copy; {year} Prince Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;