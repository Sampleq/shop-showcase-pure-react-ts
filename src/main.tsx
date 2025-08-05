import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import './resets.scss';
import './index.scss';

createRoot(document.getElementById('root')!).render(<App />);
