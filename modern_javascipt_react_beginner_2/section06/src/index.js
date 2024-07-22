import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


const App = () => {
  return (
    <div>
      <h1>こんにちは</h1>
    </div>
  );
};

root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  );
