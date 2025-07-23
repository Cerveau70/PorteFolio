export interface Project {
  title: string;
  description: string;
  context: string;
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // A number from 1 to 5 to represent proficiency
}
