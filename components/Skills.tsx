const artSkills = [
  "Environment Design", "Level Art & Composition", "Hard-Surface Modeling",
  "PBR Texturing & Materiality", "Lighting & Atmosphere", "Look Development",
  "Environment Storytelling"
];

const techSkills = [
  "Blender 4.x", "Autodesk Maya 2023", "Substance Painter 11", "Adobe Photoshop",
  "Unreal Engine / Unity", "Marmoset Toolbag / Sketchfab", "WebGL / GLB / USD Pipelines"
];

const Skills = () => {
  return (
    <section id="skills" className="border-b border-dark-surface">
      <div className="container-wrapper">
        <h2 className="text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Art & Design Skills */}
          <div>
            <h3 className="text-3xl text-secondary mb-6 pb-2 border-b border-gray-700">Art & Design Skills</h3>
            <ul className="space-y-3">
              {artSkills.map((skill) => (
                <li key={skill} className="bg-dark-surface p-4 rounded-md border-l-4 border-secondary transition-all hover:bg-gray-800">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* Software & Tech */}
          <div>
            <h3 className="text-3xl text-secondary mb-6 pb-2 border-b border-gray-700">Software & Tech</h3>
            <ul className="space-y-3">
              {techSkills.map((skill) => (
                <li key={skill} className="bg-dark-surface p-4 rounded-md border-l-4 border-secondary transition-all hover:bg-gray-800">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;