import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getAverageDelay = async (
    params: QueryParams = {},
): Promise<{ averageDelay: number}> => {
  const {data} = await api.get<{ averageDelay: number}>('/flights/average-delay', {params});
  return data;
};

function useAverageDelay(
    {flightDate}: QueryParams,
    options?: UseQueryOptions<{ averageDelay: number}, DefaultError, { averageDelay: number}>,
) {
  return useQuery<{ averageDelay: number}>({
    queryKey: [QUERY_KEYS.AVERAGE_DELAY, flightDate],
    queryFn: () => getAverageDelay({flightDate}),
    ...options,
  });
}

export {useAverageDelay};
