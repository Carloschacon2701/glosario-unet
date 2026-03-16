import { MessageSquare, FileSearch, Layout } from "lucide-react";
import { Card } from "../ui/Card";

const techniques = [
  {
    number: 1,
    title: "Entrevistas Semiestructuradas",
    icon: MessageSquare,
    definition:
      "Diálogo guiado con stakeholders mediante preguntas flexibles para explorar a fondo el dominio del problema.",
    result:
      "El personal del Jardín identificó la necesidad de una plataforma centralizada para gestionar visitas y donaciones. Esto definió el requerimiento más crítico del sistema e impulsó la restricción de unicidad entre bloque_horario y fecha_reserva en la base de datos.",
  },
  {
    number: 2,
    title: "Análisis Documental",
    icon: FileSearch,
    definition:
      "Revisión de documentos, registros y planillas existentes para comprender la estructura de datos y procesos actuales de la organización.",
    result:
      "La revisión de folletos, redes sociales y planillas manuales del jardín aportó los datos exactos para poblar los catálogos, definiendo los registros de tipos_visita y los intervalos de tiempo de bloques_horarios.",
  },
  {
    number: 3,
    title: "Prototipado con Mockups",
    icon: Layout,
    definition:
      "Creación de modelos interactivos del sistema para validar requerimientos de interfaz y lógica de datos antes de programar.",
    result:
      "Los wireframes de baja fidelidad en Figma permitieron simular el flujo de registro y depurar qué datos eran esenciales para el usuario, consolidando los atributos finales de la entidad USUARIO.",
  },
];

export const DevProcess = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proceso de Desarrollo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Metodología y técnicas aplicadas para la construcción del sistema
          </p>
        </div>

        {/* Step 1: Técnicas de Levantamiento de Información */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
              Paso 1
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Técnicas de Levantamiento de Información
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => {
              const IconComponent = technique.icon;
              return (
                <Card key={technique.number} hover className="flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                        Técnica {technique.number}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 mt-0.5">
                        {technique.title}
                      </h4>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Definición
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {technique.definition}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">
                      Resultado en el Proyecto
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {technique.result}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
