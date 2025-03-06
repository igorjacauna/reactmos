import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getRoot } from 'virtual:modules';
import { hooks } from './runtime';

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

hooks.hook('app:afterBoot', init);
