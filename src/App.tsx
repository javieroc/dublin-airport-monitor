import {FC} from 'react';
import {Disclaimer, FlightsBoard, FlightsTable, Footer, HighlightsBoard, Navbar} from './components';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <section className='mx-auto max-w-[1000px] p-4'>
        <section className='flex flex-col items-center gap-4'>
          <section className='grid grid-rows-4 gap-4 text-balance md:grid-cols-2'>
            <FlightsBoard />
            <HighlightsBoard />
          </section>
          <FlightsTable />
        </section>
        <Disclaimer />
        <Footer />
      </section>
    </>
  );
};

export {App};
