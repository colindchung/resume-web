import './App.css';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Work from './components/work/work';

function App() {
  return (
    <div className="App bg-slate-200">
      <Banner/>
      <About/>
      <Work/>
    </div>
  );
}

export default App;
