import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Soy desarrollador Frontend y Backend.</p>
      <p>
        <Link to="/projects">Ver Proyectos</Link> |{' '}
        <Link to="/resume">Ver Currículum</Link>
      </p>
    </div>
  );
};

export default Home;