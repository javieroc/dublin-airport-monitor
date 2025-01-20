import {FC} from 'react';
import {FlightsBoard, FlightsTable, Footer, HighlightsBoard, Navbar} from './components';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <section className='m-auto w-3/4'>
        <section className='flex flex-col items-center gap-8 pt-8'>
          <section className='flex justify-center gap-4'>
            <FlightsBoard />
            <HighlightsBoard />
          </section>
          <FlightsTable />
        </section>
        <Footer />
      </section>
    </>
  );
};

export {App};
