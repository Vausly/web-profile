import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
