import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { boot, hooks } from 'virtual:modules';

hooks.hook('after:boot', () => {
  console.log('after:boot')
});

boot(() => {
  hooks.callHook('after:boot')
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
