export interface Component {
  id: string;
  name: string;
  image: string;
  details: string;
  compatibleWith?: string[]; // IDs of compatible components
}

export interface PCParts {
  cpus: Component[];
  motherboards: Component[];
  ram: Component[];
  storage: Component[];
  smps: Component[];
  cabinets: Component[];
}
