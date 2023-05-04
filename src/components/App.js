import { Route, Routes } from 'react-router';
import { lazy } from 'react';
const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('Pages/NotFound'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
