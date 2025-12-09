import {
  Target,
  GraduationCap,
  Heart,
  Leaf,
  Users,
  BookOpen,
} from "lucide-react";
import { Card } from "../ui/Card";
import type { Objective } from "../../types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  GraduationCap,
  Heart,
  Leaf,
  Users,
  BookOpen,
};

const objectivesData: Objective[] = [
  {
    id: "1",
    title: "Conservación",
    description:
      "Proteger y preservar especies vegetales endémicas y en peligro de extinción para futuras generaciones.",
    icon: "Leaf",
  },
  {
    id: "2",
    title: "Investigación",
    description:
      "Fomentar la investigación científica sobre biodiversidad, ecología y botánica aplicada.",
    icon: "BookOpen",
  },
  {
    id: "3",
    title: "Educación",
    description:
      "Proporcionar un espacio educativo para estudiantes y visitantes interesados en el mundo vegetal.",
    icon: "GraduationCap",
  },
  {
    id: "4",
    title: "Bienestar",
    description:
      "Ofrecer un entorno tranquilo y natural que promueva el bienestar físico y mental de la comunidad.",
    icon: "Heart",
  },
  {
    id: "5",
    title: "Comunidad",
    description:
      "Crear un punto de encuentro para la comunidad universitaria y el público en general.",
    icon: "Users",
  },
  {
    id: "6",
    title: "Metas Ambientales",
    description:
      "Contribuir a los objetivos de sostenibilidad y concienciación ambiental de la universidad.",
    icon: "Target",
  },
];

export const Objectives = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Objetivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprometidos con la conservación, educación y bienestar a través de
            la naturaleza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectivesData.map((objective) => {
            const IconComponent = iconMap[objective.icon] || Target;

            return (
              <Card key={objective.id} hover className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
