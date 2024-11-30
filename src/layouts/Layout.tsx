import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import { useAppStore } from '../stores/useAppStore';
import { useEffect } from 'react';

export default function Layout() {
  const loadFromStoreage = useAppStore((state) => state.loadFromStoreage);

  useEffect(() => {
    loadFromStoreage();
  }, [loadFromStoreage]);

  return (
    <>
      <Header />
      <main className='container mx-auto py-16'>
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
}
