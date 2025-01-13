import {FC} from 'react';
import {FlightsBoard, HighlightsBoard, Navbar} from './components';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <section className='flex justify-center gap-8 pt-8'>
        <FlightsBoard />
        <HighlightsBoard />
      </section>
    </>
  );
};

export {App};
