import {FC} from 'react';

const Disclaimer: FC = () => {
  return (
    <section className="mt-4 flex w-full justify-center p-8 text-center text-sm text-gray-900">
      This website is for informational purposes only and is not affiliated with, endorsed by,
      or sponsored by Ryanair, Aer Lingus, or any airline.
      We strive to provide accurate information,
      but we do not guarantee its completeness or accuracy.
      We are not responsible for any misunderstandings, inconveniences,
      or issues arising from the use of this website.
      Always verify flight details directly with the airline.
    </section>
  );
};

export {Disclaimer};
