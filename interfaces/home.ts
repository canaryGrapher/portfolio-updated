

// Use: To list types for AboutCard component
// Where: 
export type IAbout = {
  year: string;
  info: string;
  image: string;
}

export interface IAboutCard extends IAbout {
  odd: boolean;
}

export type ISkills = {
  image: string;
  title: string;
  info: string;
}

export type IToolsandTechnologies = {
  title: string;
  tools: string[];
}

export type IExperience = {
  name: string;
  designation: string;
  role: string;
  timeline: string;
  description: string;
  image: string;
}

export type IFlaunt = {
  title: string;
  description: string;
  image: string;
  link: string;
}