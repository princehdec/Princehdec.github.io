import Link from 'next/link';
import { FaArtstation, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container-wrapper max-w-3xl mx-auto text-center">
        <h2 className="text-center">Get In Touch</h2>
        <p className="text-xl">
          I'm currently available for freelance projects and full-time remote roles. 
          Let's collaborate on your next project or just talk tech and art.
        </p>
        
        <a 
          href="mailto:princehdec@gmail.com"
          className="font-heading text-3xl text-white my-8 inline-block transition-colors hover:text-primary"
        >
          princehdec@gmail.com
        </a>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="mailto:princehdec@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-black font-heading font-bold uppercase tracking-wider hover:bg-transparent hover:text-primary border-2 border-primary transition-all">
            <FaEnvelope /> Email Me
          </Link>
          <Link href="https://artstation.com/princezoid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-md bg-transparent text-white font-heading font-bold uppercase tracking-wider border-2 border-gray-600 hover:border-white transition-all">
            <FaArtstation /> ArtStation
          </Link>
          <Link href="https://www.linkedin.com/in/prince-s-414803133/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-md bg-transparent text-white font-heading font-bold uppercase tracking-wider border-2 border-gray-600 hover:border-white transition-all">
            <FaLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;