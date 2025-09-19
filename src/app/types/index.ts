export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceBullet {
  short: string;
  long: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: ExperienceBullet[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
}
