import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-slate-50">
      <RouterProvider router={Router} />
      <Toaster/>
    </div>
  );
}

export default App;
