import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {api} from '../axios';
import {QueryParams, StatsResponse} from '../types';

const getStats = async (
    params: QueryParams = {},
): Promise<StatsResponse> => {
  const {data} = await api.get<StatsResponse>('/flights/stats', {params});
  return data;
};

function useStats(
    {date}: QueryParams,
    options?: UseQueryOptions<StatsResponse, DefaultError, StatsResponse>,
) {
  return useQuery<StatsResponse>({
    queryKey: ['STATS', date],
    queryFn: () => getStats({date}),
    ...options,
  });
}

export {useStats};
