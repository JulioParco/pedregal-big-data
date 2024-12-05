import bgImgHero from "../assets/bg.heroxx.jpg";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImgHero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Florida Blanca SAC</h1>
          <p className="mb-5">
          Somos una agroexportadora ubicada en la ciudad de Ica, con la central en lima dedicada al 
          rubo de exportacion de fruta como ùva y espàrrago de calidad..
          </p>
          <button className="btn btn-primary">Ver productos</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
