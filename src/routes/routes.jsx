import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default RoutesApp;