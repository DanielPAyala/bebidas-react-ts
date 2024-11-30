import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexPage from './views/IndexPage';
import { lazy, Suspense } from 'react';

const FavoritesPage = lazy(() => import('./views/FavoritesPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route
            path='/favorites'
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
