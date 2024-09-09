import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import PokemonDetails from './Pages/PokemonDetails';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
        </Route>
    )
);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
