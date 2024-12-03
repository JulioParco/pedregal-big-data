

import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NotFound() {
  return (

    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-error">404</h1>
            <p className="py-6 text-2xl">¡Oops! Parece que te has perdido.</p>
            <p className="mb-8">La página que estás buscando no existe o ha sido movida.</p>
            <Link to="/" className="btn btn-primary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;