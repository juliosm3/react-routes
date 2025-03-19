import { Link } from 'react-router-dom';
import RoutesApp from './routes/routes';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/resume">Resume</Link>
      </nav>
      <RoutesApp />
    </div>
  );
}

export default App;