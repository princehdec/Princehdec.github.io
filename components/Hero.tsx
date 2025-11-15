import Image from 'next/image';
import Link from 'next/link';
import { FaArtstation, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[84vh] flex items-center">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="mb-3">
              <span className="gradient-text">Prince Sharma</span>
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-white mb-5">3D Environment Artist & Visual Storyteller</p>
            <p className="text-lg text-dark-text-muted max-w-xl mb-8">Crafting immersive worlds, realistic props, and high-fidelity visualizations. I focus on environment art, lighting, and believable materials for games, AR/VR, and product visualization.</p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link href="https://artstation.com/princezoid" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                <FaArtstation /> View Portfolio
              </Link>
              <Link href="#contact" className="btn-outline inline-flex items-center gap-3">
                <FaLinkedin /> Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 glow">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(148,92,255,0.12)] to-[rgba(0,245,195,0.06)] blur-3xl"></div>
              <Image
                src="https://ik.imagekit.io/091k57lic/IMG_E3613.png"
                alt="Prince Sharma, 3D Artist"
                width={384}
                height={384}
                priority
                className="relative rounded-full border-4 border-[rgba(255,255,255,0.04)] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;