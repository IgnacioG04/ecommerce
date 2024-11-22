import React from "react";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";

const Home = () => {
  return (
    <div className="bg-pastelCream text-gray-800">
      {/* Header principal */}
      <header className="text-center py-8 bg-pastelPink text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Bienvenidos a Dulce Milagro</h1>
        <p className="text-lg font-medium">
          Delicias hechas con amor, para cada ocasión especial.
        </p>
      </header>

      {/* Contenido principal */}
      <div className="max-w-container mx-auto px-4 py-10">
        {/* Sección de ofertas */}
        <section className="pb-10">
          <Sale title="Especiales de la Semana" />
        </section>

        {/* Productos más vendidos */}
        <section className="pb-10">
          <BestSellers title="Nuestros Productos Más Vendidos" />
        </section>

        {/* Nuevas llegadas */}
        <section>
          <NewArrivals title="Nuevas Creaciones" />
        </section>
      </div>
    </div>
  );
};

export default Home;
