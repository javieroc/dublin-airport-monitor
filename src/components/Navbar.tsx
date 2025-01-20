import {FC} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const Navbar: FC = () => {
  return (
    <nav className="flex flex-col items-center gap-2 border-b border-gray-200 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800">Ryan-Fail</h1>
      <menu className="flex content-center gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400" aria-label="Left">
          <FaArrowLeft className="size-4 text-gray-800" />
        </button>
        <h3 className="text-xl">Jan 13, 2025</h3>
        <button className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          <FaArrowRight className="size-4 text-gray-800" />
        </button>
      </menu>
    </nav>
  );
};

export {Navbar};
