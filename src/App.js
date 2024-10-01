import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes';

function App() {
  return (
    <div className="bg-slate-50">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
