import { Code2, Database, Globe, Smartphone, Layers, Zap } from "lucide-react";
import { Card } from "../ui/Card";
import type { TechStack } from "../../types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Database,
  Globe,
  Smartphone,
  Layers,
  Zap,
};

const techStackData: TechStack[] = [
  {
    name: "React",
    description:
      "Framework frontend moderno para construir interfaces de usuario interactivas y dinámicas.",
    icon: "Code2",
  },
  {
    name: "TypeScript",
    description:
      "Lenguaje de programación tipado que añade seguridad de tipos a JavaScript.",
    icon: "Code2",
  },
  {
    name: "Tailwind CSS",
    description:
      "Framework de utilidades CSS para diseñar rápidamente interfaces modernas y responsivas.",
    icon: "Layers",
  },
  {
    name: "Vite",
    description:
      "Herramienta de construcción rápida y optimizada para aplicaciones web modernas.",
    icon: "Zap",
  },
];

const architectureDescription = `
Nuestra aplicación está construida siguiendo una arquitectura modular y escalable. 
Utilizamos React con TypeScript para garantizar código robusto y mantenible. 
El diseño mobile-first asegura una experiencia óptima en todos los dispositivos, 
mientras que Tailwind CSS nos permite crear interfaces modernas y consistentes 
con una paleta de colores enfocada en verdes y blancos, reflejando la temática 
del jardín botánico.
`;

export const TechStructure = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tecnologías del Proyecto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Construido con las mejores herramientas modernas para una
            experiencia excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {techStackData.map((tech, index) => {
            const IconComponent =
              tech.icon && iconMap[tech.icon] ? iconMap[tech.icon] : Code2;

            return (
              <Card key={index} hover>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-white">
          <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
              <Layers className="w-6 h-6 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Arquitectura
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {architectureDescription.trim()}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
