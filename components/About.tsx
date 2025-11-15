const About = () => {
  const focusAreas = [
    "Realistic game environments & level art",
    "Environment storytelling and lighting",
    "High-fidelity AR/VR prop creation",
    "Product visualization for web & e-commerce",
  ];

  return (
    <section id="about" className="border-b border-dark-surface">
      <div className="container-wrapper grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2>About Me</h2>
          <p>
            As a 3D artist with a passion for digital craftsmanship, I have experience in both freelance texturing and studio environments. I thrive on building believable game worlds, creating realistic props, and developing optimized assets for product visualization.
          </p>
          <p>
            My technical pipeline is robust, covering modeling and UVs in Maya, intricate texturing in Substance Painter, and final assembly, animation, and export using Blender. I'm highly comfortable delivering web-ready GLB/GLTF assets, including for AR/VR applications and complex web configurators.
          </p>
          <p>
            Based in Lucknow, India, I'm always open to exciting new remote and international opportunities. I’m passionate about collaborating with creative teams to build the next generation of visual experiences.
          </p>
        </div>
        <div className="bg-dark-surface p-8 rounded-lg">
          <h3 className="font-heading text-2xl text-secondary mb-6">What I’m currently focusing on:</h3>
          <ul className="space-y-4">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-primary text-2xl font-bold mr-3 ›">›</span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;