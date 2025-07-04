import { BrowserRouter, Routes, Route } from 'react-router';
import { RootLayout } from './layouts';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/movie/:id' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
