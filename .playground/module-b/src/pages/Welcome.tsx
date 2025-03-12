import reactLogo from '../assets/react.svg';
import { getExtras } from 'reactmos';

export default function Welcome() {
  const extras = getExtras('a');
  console.log('\nExtras', extras)
  return (
    <div>
      <h1>Welcome to module B</h1>
      <img src={reactLogo} alt="React logo" />
      <img src="/logo.png" alt="Reactmos logo" />
    </div>
  )
}