import { useState } from "react";
import { Project } from "@/types";
import { ExternalLink, Github, Play } from "lucide-react";
import Modal from "./Modal";

interface ProjectCardProps {
  project: Project;
}

const getYouTubeId = (url: string) => {
  // Simple regex for YouTube ID extraction
  const match = url.match(
    /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const youTubeId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl text-primary-gradient font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-muted mb-4">{project.description}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary-gradient text-primary-foreground rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Site
              </a>
            )}

            {project.videoUrl && youTubeId && (
              <>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex items-center px-4 py-2 bg-[hsl(var(--color-card)/0.5)] text-muted rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Play size={16} className="mr-1" />
                  Demo
                </button>
                <Modal open={showModal} onClose={() => setShowModal(false)}>
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      width="97%"
                      height="97%"
                      src={`https://www.youtube.com/embed/${youTubeId}`}
                      title="Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </div>
                </Modal>
              </>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-[hsl(var(--color-foreground)/0.1)] text-foreground rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
