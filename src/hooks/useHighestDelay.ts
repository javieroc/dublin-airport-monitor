import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {Datum, QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getHishestDelay = async (
    params: QueryParams = {},
): Promise<Datum> => {
  const {data} = await api.get<Datum>('/flights/highest-delay', {params});
  return data;
};

function useHighestDelay(
    {flightDate}: QueryParams,
    options?: UseQueryOptions<Datum, DefaultError, Datum>,
) {
  return useQuery<Datum>({
    queryKey: [QUERY_KEYS.HIGHEST_DELAY, flightDate],
    queryFn: () => getHishestDelay({flightDate}),
    ...options,
  });
}

export {useHighestDelay};
