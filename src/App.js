import './App.css';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Work from './components/work/work';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App bg-slate-200">
      <Banner/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
