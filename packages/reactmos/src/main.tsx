import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { boot, hooks, getRoot } from 'virtual:modules';

async function init() {
  hooks.callHook('app:init');
  const App = await getRoot();
  hooks.callHook('app:beforeRender');
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  hooks.callHook('app:afterRender');
}

boot(init);
