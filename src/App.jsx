import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Curriculum } from './components/Curriculum/Curriculum.jsx';
import { DataEngineering } from './components/DataEngineering/DataEngineering.jsx';
import { AI } from './components/AI/AI.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Enrollment } from './components/Enrollment/Enrollment.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Curriculum />
        <DataEngineering />
        <AI />
        <Projects />
        <Enrollment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
