import {useAtom} from 'jotai';
import {timetableDateAtom, formattedTimetableDateAtom, fancyTimetableDateAtom, previousDateAtom, nextDateAtom} from '../atoms';

export function useTimetableDate() {
  const [timetableDate] = useAtom(timetableDateAtom);
  const [formattedTimetableDate] = useAtom(formattedTimetableDateAtom);
  const [fancyTimetableDate] = useAtom(fancyTimetableDateAtom);
  const [, previousDate] = useAtom(previousDateAtom);
  const [, nextDate] = useAtom(nextDateAtom);

  return {
    timetableDate,
    formattedTimetableDate,
    fancyTimetableDate,
    previousDate,
    nextDate,
  };
}
