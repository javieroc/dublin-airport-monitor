import {FC} from 'react';
import {faker} from '@faker-js/faker';
import {FaPlane, FaPlaneSlash} from 'react-icons/fa';
import clsx from 'clsx';
import {useStats} from '../hooks';

const FlightsBoard: FC = () => {
  const {data: stats} = useStats({date: '2025-01-16'});
  const data = {
    total: 78,
    flights: Array(78).fill(0).map((index) => ({
      id: index,
      status: faker.helpers.arrayElement(['cancelled', 'active']),
      delay: faker.number.int({min: 10, max: 100}),
    })).sort((a, b) => (a.status === 'active' ? -1 : 1) - (b.status === 'active' ? -1 : 1)),
  };

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="grid max-w-96 grid-cols-9 gap-2">
        {data.flights.map((flight) => (
          <FaPlane key={flight.id} className={clsx('h-8 w-8', {
            'text-green-500': flight.status === 'active',
            'text-red-600': flight.status === 'cancelled',
          })} />
        ))}
      </div>
      <div className="max-w-96">
        <h3 className="text-lg font-bold text-gray-900">{`Total: ${stats?.flightsTotal}, Cancelled: ${stats?.cancelled}, Flights delayed more than 45 min: ${stats?.delayedMoreThan45Min}`}</h3>
      </div>
      <div className="flex max-w-96 flex-wrap justify-center gap-2">
        <div className="flex gap-1">
          <FaPlaneSlash className="h-5 w-5 text-gray-500" />
          <h3 className="text-sm">Cancelled</h3>
        </div>
        <div className="flex gap-1">
          <FaPlane className="h-5 w-5 text-red-600" />
          <h3 className="text-sm">More than 45min</h3>
        </div>
        <div className="flex gap-1">
          <FaPlane className="h-5 w-5 text-orange-500" />
          <h3 className="text-sm">45-30min</h3>
        </div>
        <div className="flex gap-1">
          <FaPlane className="h-5 w-5 text-yellow-400" />
          <h3 className="text-sm">30-15min</h3>
        </div>
        <div className="flex gap-1">
          <FaPlane className="h-5 w-5 text-green-500" />
          <h3 className="text-sm">30-15min</h3>
        </div>
      </div>
    </section>
  );
};

export {FlightsBoard};
