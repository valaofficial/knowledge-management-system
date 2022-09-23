import './App.css';
import 'antd/dist/antd.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  MemoryRouter as Router 
} from "react-router-dom";
import Home from './pages/Home'
import Library from './pages/Library';
import SingleBook from './pages/Library/SingleBook';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/elibrary",
    element: <Library/>,
  },
  {
    path: "/single-book",
    element: <SingleBook/>,
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
