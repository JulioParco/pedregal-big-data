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
          <h6 className="text-2xl font-bold text-center mt-10">Frutas</h6>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div id="uvas" className="card bg-base-100 w-2/3 shadow-xl lg:w-96 h-96">
              <figure>
                <img
                  src="https://www.editorialderiego.com/wp-content/uploads/2022/12/Esparrago_01.jpg"
                  alt="Esparrago"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Espárrago</h2>
                <p>Fruta 1</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ver fruta</button>
                </div>
              </div>
            </div>
            <div id="paltas" className="card bg-base-100 w-2/3 shadow-xl lg:w-96 h-96">
              <figure>
                <img
                  src="https://5aldia.cl/wp-content/uploads/2018/04/beneficios-de-las-uvas-cover-696x435.jpg"
                  alt="Uva"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Uva</h2>
                <p>
                  Fruta 2
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Ver fruta</button>
                </div>
              </div>  
            </div>
          </div>
        </div>

        <div id="reportes" className="flex flex-col justify-center my-10">
          <h6 className="text-2xl font-bold text-center mt-10">
            Reportes de plagas  
          </h6>

          <div className="flex flex-col gap-6">
            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto mt-6">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Numero de plagas por mes 
                </h2>
                <p className="text-lg">
                En este grafico se muestra las cantidades de plagas por mes
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-barra-1"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNmIxMDgzNzktNTA3MC00MGZjLWE0NjctZTY4NDAxNzI4NDg2IiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                    frameborder="0"
                    allowFullScreen="false"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-full max-w-4xl mx-auto">
              <div className="card-body">
                <h2 className="card-title text-center text-2xl font-bold">
                Numero por tipo de plaga por día
                </h2>
                <p className="text-lg">
                Este gráfico se muestra el numero de clientes que han visitado por mes a nuestro restaurante.
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-linea2"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZmYwNGMxOGQtNDdiMS00YTZhLTk2NTktNDQ0MDZhZTMwNmEwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
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
                Plagas que atacan mas 
                </h2>
                <p className="text-lg">
                  En este grafico indica las 2 playas mayores que atacan con mas frecuencia a la fruta 
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-areas5"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiZDQ5MzJlMWEtZTkwNS00ZDMxLTg4MWItZjZkNDczZWEyMjJmIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
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
                Tratamiento con aplicaciòn de productos 
                </h2>
                <p className="text-lg">
                Este gráfico muestra los productos aplicas y el efecto que hace
                </p>
                <div className="w-full aspect-video">
                  <iframe
                    title="bg-cascada8"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNDFjOTM2MjEtYTA2OC00MzlmLTg2OTQtNWVkYjMyZTE4YTdjIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
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
