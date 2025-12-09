export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  icon: string; // Nombre del icono de lucide-react
}

export interface TechStack {
  name: string;
  description: string;
  icon?: string; // Nombre del icono de lucide-react (opcional)
}

export interface TechStructure {
  title: string;
  description: string;
  technologies: TechStack[];
  architecture?: string; // Descripción de la arquitectura
}


