import {useAtom} from 'jotai';
import {
  timetableDateAtom,
  formattedTimetableDateAtom,
  fancyTimetableDateAtom,
  previousDateAtom,
  nextDateAtom,
  selectedAirlineAtom,
  airlineOptions,
} from '../atoms';

export function useFilters() {
  const [timetableDate] = useAtom(timetableDateAtom);
  const [formattedTimetableDate] = useAtom(formattedTimetableDateAtom);
  const [fancyTimetableDate] = useAtom(fancyTimetableDateAtom);
  const [, previousDate] = useAtom(previousDateAtom);
  const [, nextDate] = useAtom(nextDateAtom);
  const [selectedAirline, setSelectedAirline] = useAtom(selectedAirlineAtom);

  return {
    timetableDate,
    formattedTimetableDate,
    fancyTimetableDate,
    previousDate,
    nextDate,
    selectedAirline,
    setSelectedAirline,
    airlineOptions,
  };
}
