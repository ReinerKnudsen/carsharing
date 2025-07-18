import { Outlet } from 'react-router';
import { Header } from './lib/components/Header';
import { Footer } from './lib/components/Footer';

import './App.css';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
