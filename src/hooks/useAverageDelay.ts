import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getAverageDelay = async (
    params: QueryParams = {},
): Promise<{ averageDelay: number}> => {
  const {data} = await api.get<{ averageDelay: number}>('/timetable/average-delay', {params});
  return data;
};

function useAverageDelay(
    {flightDate, airline}: QueryParams,
    options?: UseQueryOptions<{ averageDelay: number}, DefaultError, { averageDelay: number}>,
) {
  return useQuery<{ averageDelay: number}>({
    queryKey: [QUERY_KEYS.AVERAGE_DELAY, flightDate, airline],
    queryFn: () => getAverageDelay({flightDate, airline}),
    ...options,
  });
}

export {useAverageDelay};
