import { useState } from 'react';
import { Layout } from './lib/components/Layout';

import './App.css';

function App() {
  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <img
            src='/profile.jpg'
            className='rounded-full h-20 w-20 shadow-2xl'
            alt='Profile'
          />
          <div className='flex flex-col ml-4 text-xs gap-2'>
            <div className='font-bold'>Reiner Knudsen</div>
            <div className=''>Konto der Gruppe: €120,80</div>
          </div>
        </div>
        <h1>Carsharing</h1>
      </div>
    </Layout>
  );
}

export default App;
