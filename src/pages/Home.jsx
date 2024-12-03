import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div id="inicio">
          <Hero />
        </div>
        {
          // Productos en cards
          // Uva
          // Palta
        }
        <div id="productos" className="flex flex-col justify-center my-10">
          <h6 className="text-2xl font-bold text-center mt-10">Productos</h6>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div id="uvas" className="card bg-base-100 w-2/3 shadow-xl lg:w-96 h-96">
              <figure>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a5/7a/e2/tacu-tacu-con-apanado.jpg?w=600&h=400&s=1"
                  alt="Uva"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Tallarine Saltado con huevos</h2>
                <p>Este es uno de los platos mas conocidos de nuestra casa de comida.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Pedir plato</button>
                </div>
              </div>
            </div>
            <div id="paltas" className="card bg-base-100 w-2/3 shadow-xl lg:w-96 h-96">
              <figure>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7f/e5/b3/die-kalbsleber-mit-safterl.jpg?w=1200&h=-1&s=1"
                  alt="Palta"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Gourmet</h2>
                <p>
                  Este es el segundo plato mas conocido de nuestro restaurante.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Pedir plato</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="reportes" className="flex flex-col justify-center my-10">
          <h6 className="text-2xl font-bold text-center mt-10">
            Reportes de venta 
          </h6>

          <div className="flex flex-col gap-6">
            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto mt-6">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Ventas mensuales
                </h2>
                <p className="text-lg">
                Este gráfico de barras muestra las ventas mensuales de nuestro restaurante. Como se puede observar, las ventas en diciembre fueron significativamente más altas, probablemente debido a las fiestas de fin de año, mientras que las ventas en septiembre fueron más bajas
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-barra-1"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDIxMGIwNTgtOTU3Yi00ZDYxLTk0ZjAtYzExOTZhNjg2YjUzIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                    frameborder="0"
                    allowFullScreen="false"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Variación mensual en el número de clientes atendidos
                </h2>
                <p className="text-lg">
                Este gráfico de barras muestra la popularidad de los platillos más vendidos en el restaurante durante el último trimestre. Como se puede observar, el lomo Especial es el platillo más popular, con una venta de 500 unidades en el mes de octubre
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-linea2"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNmUxYWM0MGYtODU3NS00YzcxLTg0NGQtNTg1NDAwOTE5OTBmIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                    frameBorder="0"
                    allowFullScreen="false"
                  
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Nueva card para el gráfico de dispersión */}


            {/* Nueva card para el gráfico de áreas */}
            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Canales de contacto con los clientes 
                </h2>
                <p className="text-lg">
                  En el grafico indica el numero de canales en donde se han contactactado con nuestros clientes 
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-areas5"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiYmE5MDRhYzktNzI4OC00ZTRjLWFmNTQtNjA5NTBlYzMyNDc5IiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                    frameBorder="0"
                    allowFullScreen="true"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Nueva card para el gráfico de torta */}


            {/* Nueva card para el gráfico de cascada */}
            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Impacto de las campañas de marketing
                </h2>
                <p className="text-lg">
                Este gráfico te permite visualizar cómo diferentes acciones de marketing o promociones influyen en las ventas de productos específicos en tu restaurante. A través de este análisis, podrías identificar qué tipos de campañas generan más ingresos y cuáles no tienen tanto impacto. Esto te permitirá ajustar y optimizar tus futuras estrategias de marketing.
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-cascada8"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZGJlNDMwNGMtN2I5NC00OTFjLThmNjAtZTRkNDliYTI0OGExIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                    frameBorder="0"
                    allowFullScreen="true"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
