export interface ExperienceTypes {
  id: number;
  company: string;
  position: Position[];
  date: string;
  description: string;
  highlights: string[];
  location?: string;
}

interface Position {
  id: number;
  name: string;
  date: string;
  type: string;
  description?: string;
  jobResponsible: string[];
  technologyStack: string[];
}
