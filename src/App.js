import './App.css';

import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import Home from './components/Home';
import StoreContextProvider from './Context/StoreContext';

function App() {
  return (
    <StoreContextProvider>
      <div className="container">
        <Home />
      </div>
    </StoreContextProvider>
  );
}

export default App;
