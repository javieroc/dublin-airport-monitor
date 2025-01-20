import {FC} from 'react';
import {FaPlane, FaPlaneSlash} from 'react-icons/fa';
import clsx from 'clsx';
import {useFlights, useStats} from '../hooks';

const FlightsBoard: FC = () => {
  const {data: stats} = useStats({flightDate: '2025-01-16'});
  const {data: response} = useFlights({flightDate: '2025-01-16'});

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="grid max-w-96 grid-cols-9 gap-2">
        {response?.data.map((flight) => {
          const delay = flight?.departure?.delay ?? 0;
          return (
            <FaPlane key={flight.flight.number} className={clsx('h-8 w-8', {
              'text-red-600': delay > 45,
              'text-orange-500': 30 < delay && delay <= 45,
              'text-yellow-400': 15 < delay && delay <= 30,
              'text-green-500': delay <= 15,
            })} />
          );
        })}
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
