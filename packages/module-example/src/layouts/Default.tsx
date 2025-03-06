import { Outlet, Link } from 'react-router'
import { observer } from 'mobx-react-lite';

function Default() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#f0f0f0', padding: '1rem' }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

const DefaultLayout = observer(Default);

export default DefaultLayout;