import Link from "next/link";

const projects = [
  {
    title: "Sci-Fi Corridor – Real-Time Environment",
    desc: "A modular, game-ready environment created in Unreal Engine, focusing on emissive lighting and PBR storytelling.",
    tools: "Maya, Substance Painter, Unreal Engine 5",
  },
  {
    title: "Modern Living Room – Arch-Viz",
    desc: "A photorealistic interior render focusing on natural lighting, material definition, and high-fidelity assets.",
    tools: "Blender (Cycles), Substance Painter, Photoshop",
  },
  {
    title: "Outdoor Camping Setup – Product + Environment",
    desc: "Product visualization for a series of camping props, rendered in a believable outdoor environment in Marmoset Toolbag.",
    tools: "Maya, Substance, Blender, Marmoset",
  },
  {
    title: "Luxury Chair Configurator – WebGL / GLB Assets",
    desc: "A set of optimized, low-poly GLB models with PBR texture variants for use in a web-based 3D configurator.",
    tools: "Blender, Substance Painter, WebGL",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-b border-dark-surface">
      <div className="container-wrapper">
        <h2 className="text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-dark-surface border border-gray-800 rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
              <div className="h-48 bg-gray-800 rounded-md mb-6 flex items-center justify-center font-heading text-gray-600">[Placeholder Image]</div>
              <h3 className="text-2xl text-primary mb-3">{project.title}</h3>
              <p className="text-sm flex-grow">{project.desc}</p>
              <p className="text-xs text-dark-text-muted italic mb-6">Tools: {project.tools}</p>
              <Link href="https://artstation.com/princezoid" target="_blank" rel="noopener noreferrer" className="mt-auto self-start px-5 py-2 rounded-md bg-transparent text-white font-heading text-sm font-bold uppercase border-2 border-gray-600 hover:border-primary hover:text-primary transition-all">
                See more on ArtStation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;