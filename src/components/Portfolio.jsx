import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, profile } from "../data/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const ProjectCard = ({ project, index }) => (
  <Reveal
    variant="scale"
    delay={index * 110}
    className="glass card-hover group flex flex-col overflow-hidden rounded-2xl"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-105"
      />
      {/* Fade + action bar that lifts in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-4 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary !px-4 !py-2 text-xs"
        >
          Live demo <FiArrowUpRight size={14} />
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} source code`}
          className="btn btn-ghost !px-3 !py-2"
        >
          <FiGithub size={15} />
        </a>
      </div>

      <span className="glass absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] text-muted">
        {project.year}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-gradient">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="chip font-mono !text-[11px]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

const Portfolio = () => (
  <section id="projects" className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
    <div className="mx-auto max-w-shell px-5 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <SectionHeading index="04" title="Projects" subtitle="Things I've shipped on the side." />

        <Reveal delay={220} className="pb-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost group !py-2.5 text-xs"
          >
            <FiGithub size={15} />
            All repositories
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
