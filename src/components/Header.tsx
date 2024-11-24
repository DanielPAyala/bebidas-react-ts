import { NavLink } from 'react-router-dom';

export default function Header() {
  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-orange-500 uppercase font-bold'
      : 'text-white uppercase font-bold';

  return (
    <header className='bg-slate-800'>
      <div className='mx-auto container px-5 py-16'>
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-32' src='/logo.svg' alt='logotipo' />
          </div>
          <nav className='flex gap-4'>
            <NavLink to='/' className={isActive}>
              Inicio
            </NavLink>
            <NavLink to='/favorites' className={isActive}>
              Favoritos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
