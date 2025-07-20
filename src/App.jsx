import { Outlet } from 'react-router';
import { Header } from './lib/components/Header';
import { Footer } from './lib/components/Footer';

import './App.css';

function App() {
  return (
    <div
      className='min-h-screen flex flex-col bg-slate-100 rounded-xl'
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}>
      <Header />
      <main className='flex-1 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
