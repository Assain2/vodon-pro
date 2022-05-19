import { render } from 'react-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import App from './pages/App';
import ReviewVideos from './pages/ReviewVideos';
import SetupVideos from './pages/SetupVideos';
import About from './pages/About';
import Settings from './pages/Settings';

render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<SetupVideos />} />
        <Route path="/review" element={<ReviewVideos />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </MemoryRouter>,
  document.getElementById('root')
);
