import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-1 pb-20'>{children}</main>
      <Footer />
    </div>
  );
}
