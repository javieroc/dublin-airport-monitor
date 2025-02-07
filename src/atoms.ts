import {atom} from 'jotai';
import {addDays, format, subDays} from 'date-fns';

const timetableDateAtom = atom(new Date());

const formattedTimetableDateAtom = atom((get) => format(get(timetableDateAtom), 'yyyy-MM-dd'));
const fancyTimetableDateAtom = atom((get) => format(get(timetableDateAtom), 'MMM dd, yyyy'));

const previousDateAtom = atom(
    null,
    (get, set) => set(timetableDateAtom, subDays(get(timetableDateAtom), 1)),
);
const nextDateAtom = atom(
    null,
    (get, set) => set(timetableDateAtom, addDays(get(timetableDateAtom), 1)),
);

export {
  timetableDateAtom,
  formattedTimetableDateAtom,
  fancyTimetableDateAtom,
  previousDateAtom,
  nextDateAtom,
};
