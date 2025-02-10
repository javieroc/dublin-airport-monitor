import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {Timetable, QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getHishestDelay = async (
    params: QueryParams = {},
): Promise<Timetable> => {
  const {data} = await api.get<Timetable>('/timetable/highest-delay', {params});
  return data;
};

function useHighestDelay(
    {flightDate, airline}: QueryParams,
    options?: UseQueryOptions<Timetable, DefaultError, Timetable>,
) {
  return useQuery<Timetable>({
    queryKey: [QUERY_KEYS.HIGHEST_DELAY, flightDate, airline],
    queryFn: () => getHishestDelay({flightDate, airline}),
    ...options,
  });
}

export {useHighestDelay};
