import './App.css';
import { CtxProvider } from './context/ContextProvider';

function App() {
  return (
    <div className="App container">
      <h1>Desafío - Router II</h1>
      <CtxProvider/>
    </div>
  );
}

export default App;
