import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {api} from '../axios';
import {QueryParams, StatsResponse} from '../types';
import {QUERY_KEYS} from '../constants';

const getStats = async (
    params: QueryParams = {},
): Promise<StatsResponse> => {
  const {data} = await api.get<StatsResponse>('/timetable/stats', {params});
  return data;
};

function useStats(
    {flightDate, airline}: QueryParams,
    options?: UseQueryOptions<StatsResponse, DefaultError, StatsResponse>,
) {
  return useQuery<StatsResponse>({
    queryKey: [QUERY_KEYS.STATS, flightDate, airline],
    queryFn: () => getStats({flightDate, airline}),
    ...options,
  });
}

export {useStats};
