import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <Testimonio
      nombre= 'Sarah Bostion'
      pais= 'Suecia'
      imagen= 'sarah'
      cargo= 'Ingeniero de Software'
      empresa= 'Spotify'
      testimonio='Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      <Testimonio
      nombre= 'Shawn Garcia'
      pais= 'España'
      imagen= 'shawn'
      cargo= 'Analista de datos'
      empresa= 'Indra'
      testimonio='Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida . '/>
            <Testimonio
      nombre= 'Emma Garcia'
      pais= 'Italia'
      imagen= 'emma'
      cargo= 'Analista de datos'
      empresa= 'Pmodoro'
      testimonio='Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida . '/>
      </div>
    </div>
  );
}

export default App;
