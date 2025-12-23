import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaNpm, FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";


const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", icon: <FaHtml5 /> },
  { name: "CSS3", level: 90, category: "frontend", icon: <FaCss3Alt /> },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend", icon: <FaJs /> },
  { name: "React.js", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },
  { name: "Responsive Design", level: 85, category: "frontend", icon: <FaReact /> },

  // Backend
  { name: "Python", level: 85, category: "backend", icon: <FaPython /> },
  { name: "Django", level: 85, category: "backend", icon: <SiDjango /> },
  { name: "Django REST Framework", level: 80, category: "backend", icon: <FaDatabase /> },
  { name: "REST APIs", level: 80, category: "backend", icon: <FaDatabase /> },
  { name: "Authentication & Authorization", level: 75, category: "backend", icon: <FaDatabase /> },

  // Databases
  { name: "SQLite", level: 80, category: "databases", icon: <FaDatabase /> },
  { name: "PostgreSQL", level: 70, category: "databases", icon: <SiPostgresql /> },
  { name: "MySQL", level: 75, category: "databases", icon: <SiMysql /> },
  { name: "Oracle", level: 65, category: "databases", icon: <SiOracle /> },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools", icon: <FaGitAlt /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscCode /> },
  { name: "Vite", level: 85, category: "tools", icon: <SiVite /> },
  { name: "npm", level: 85, category: "tools", icon: <FaNpm /> },
];

const categories = ["all", "frontend", "backend", "databases", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize transition
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 hover:bg-secondary"
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
              {/* Skill title */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl text-primary">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-muted h-2 rounded-full">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill level */}
              <div className="text-sm text-muted-foreground text-right mt-2">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default SkillsSection;
