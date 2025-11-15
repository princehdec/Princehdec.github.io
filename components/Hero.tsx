import Image from 'next/image';
import Link from 'next/link';
import { FaArtstation, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center border-b border-dark-surface">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Prince Sharma
              </span>
            </h1>
            <p className="font-heading text-3xl text-white mb-6">
              3D Environment Artist & Visual Storyteller
            </p>
            <p className="text-lg md:text-xl">
              Crafting immersive worlds, realistic props, and high-fidelity visualizations. With a strong focus on environment art, lighting, and believable materials, I bring digital concepts to life for games, AR/VR, and web applications.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <Link href="https://artstation.com/princezoid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-black font-heading font-bold uppercase tracking-wider hover:bg-transparent hover:text-primary border-2 border-primary transition-all">
                <FaArtstation /> View Portfolio
              </Link>
              <Link href="https://www.linkedin.com/in/prince-s-414803133/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-md bg-transparent text-white font-heading font-bold uppercase tracking-wider border-2 border-gray-600 hover:border-white transition-all">
                <FaLinkedin /> LinkedIn
              </Link>
            </div>
          </div>
          
          {/* Avatar Image */}
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="https://ik.imagekit.io/091k57lic/IMG_E3613.png"
              alt="Prince Sharma, 3D Artist"
              width={350}
              height={350}
              priority
              className="rounded-full border-4 border-dark-surface shadow-lg shadow-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;