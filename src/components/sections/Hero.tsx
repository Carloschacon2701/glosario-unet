import { Sprout } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-100 p-4 rounded-full">
            <Sprout className="w-16 h-16 text-primary-600" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Jardín Botánico
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubre la biodiversidad y la belleza de nuestro jardín botánico universitario.
          Un espacio dedicado a la conservación, investigación y educación ambiental.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="primary">
            Explorar Jardín
          </Button>
          <Button size="lg" variant="outline">
            Conocer Más
          </Button>
        </div>
      </div>
    </section>
  );
};


