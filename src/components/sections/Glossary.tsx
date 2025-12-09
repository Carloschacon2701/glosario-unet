import { BookOpen } from "lucide-react";
import { Card } from "../ui/Card";
import type { GlossaryItem } from "../../types";

const glossaryData: GlossaryItem[] = [
  {
    id: "1",
    term: "Botánica",
    definition:
      "Ciencia que estudia las plantas, incluyendo su estructura, propiedades y clasificación.",
  },
  {
    id: "2",
    term: "Biodiversidad",
    definition:
      "Variedad de formas de vida en un ecosistema, incluyendo especies, genes y ecosistemas.",
  },
  {
    id: "3",
    term: "Conservación",
    definition:
      "Protección y cuidado de especies y ecosistemas para prevenir su extinción o degradación.",
  },
  {
    id: "4",
    term: "Endémico",
    definition:
      "Especie que se encuentra exclusivamente en una región geográfica específica.",
  },
  {
    id: "5",
    term: "Ecosistema",
    definition:
      "Comunidad de organismos vivos que interactúan entre sí y con su entorno físico.",
  },
  {
    id: "6",
    term: "Fotosíntesis",
    definition:
      "Proceso mediante el cual las plantas convierten la luz solar en energía química.",
  },
  {
    id: "7",
    term: "Polinización",
    definition:
      "Transferencia de polen desde los estambres hasta el estigma de las flores.",
  },
  {
    id: "8",
    term: "Taxonomía",
    definition:
      "Ciencia que clasifica y nombra a los organismos en categorías jerárquicas.",
  },
  {
    id: "9",
    term: "Germinación",
    definition:
      "Proceso mediante el cual una semilla comienza a desarrollarse y crecer.",
  },
];

export const Glossary = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-100 p-3 rounded-full">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Glosario de Términos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce los términos clave relacionados con botánica y jardines
            botánicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryData.map((item) => (
            <Card key={item.id} hover>
              <h3 className="text-xl font-semibold text-primary-700 mb-3">
                {item.term}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.definition}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
