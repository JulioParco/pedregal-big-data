import bgImgHero from "../assets/bg-herox.jpg";

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
          <h1 className="mb-5 text-5xl font-bold">Restaurante Flores</h1>
          <p className="mb-5">
          Somos un restaurante conocido por sus diversa varidad de platos .
          </p>
          <button className="btn btn-primary">Conócenos</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
