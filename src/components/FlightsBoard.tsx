import {FC} from 'react';
import {faker} from '@faker-js/faker';
import {FaPlane} from 'react-icons/fa';
import clsx from 'clsx';

const FlightsBoard: FC = () => {
  const data = {
    total: 78,
    flights: Array(78).fill(0).map((index) => ({
      id: index,
      status: faker.helpers.arrayElement(['cancelled', 'active']),
      delay: faker.number.int({min: 10, max: 100}),
    })).sort((a, b) => (a.status === 'active' ? -1 : 1) - (b.status === 'active' ? -1 : 1)),
  };

  return (
    <section className="grid max-w-96 grid-cols-9 gap-2 rounded-sm bg-gray-50 p-4">
      {data.flights.map((flight) => (
        <FaPlane key={flight.id} className={clsx('h-8 w-8', {
          'text-green-500': flight.status === 'active',
          'text-red-600': flight.status === 'cancelled',
        })} />
      ))}
    </section>
  );
};

export {FlightsBoard};
