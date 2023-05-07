

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Login/>
      </BrowserRouter>
    </div>
  );
}
export default App;
