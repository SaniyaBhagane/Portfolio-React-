import React, { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Responsive Design", level: 85, category: "frontend" },

  // Backend
  { name: "Python", level: 85, category: "backend" },
  { name: "Django", level: 85, category: "backend" },
  { name: "Django REST Framework", level: 80, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "Authentication & Authorization", level: 75, category: "backend" },

  // Databases
  { name: "SQLite", level: 80, category: "databases" },
  { name: "PostgreSQL", level: 70, category: "databases" },
  { name: "MySQL", level: 75, category: "databases" },
  { name: "Oracle", level: 65, category: "databases" },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vite", level: 85, category: "tools" },
  { name: "npm", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "databases", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-muted h-2 rounded-full">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
