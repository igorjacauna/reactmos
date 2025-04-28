import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { boot, hooks, getRoot } from 'virtual:modules';
import loadingHtml from 'virtual:loading-html';

document.getElementById('root')!.innerHTML = loadingHtml;

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
