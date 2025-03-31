export interface ExperienceTypes {
  id: number;
  company: string;
  position: Position[];
  date: string;
  description: string;
  highlights: string[];
}

interface Position {
  id: number;
  name: string;
  date: string;
  type: string;
  jobResponsible: string[];
  technologyStack: string[];
}
