import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/NoPage';

// components
import RootLayout from './Layout/RootLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout/>} >
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Housing/:id' element={<Housing />} />
        <Route path='/*' element={<Error />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
