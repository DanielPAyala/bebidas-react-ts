import { DrinkType } from '../types';

type DrinkCardProps = {
  drink: DrinkType;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className='border shadow-lg'>
      <div className='overflow-hidden'>
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className='hover:scale-125 transition-transform hover:rotate-2'
        />
      </div>
      <div className='p-5'>
        <h2 className='text-2xl truncate font-black'>{drink.strDrink}</h2>
        <button
          type='button'
          className='bg-orange-400 hover:bg-orange-500 text-center w-full text-white font-bold text-lg p-3 mt-5'
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
