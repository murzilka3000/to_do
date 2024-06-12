import React from 'react';
import { FaAlignLeft, FaDiceD6, FaCalendarAlt, FaRegComments, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
        <header className="border-t-2 border-gray-500
    bg-transparent py-4 fixed bottom-0 right-0 left-0 mt-80">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
            <Link to={'/'}>
                <FaAlignLeft color="white" size={24} />
            </Link>
            <Link to={'/inbox'}>
                <FaDiceD6 color="white" size={24} />
            </Link>
            <Link to={'/today'}>
                <FaRegComments color="white" size={24} />
            </Link>
            <Link to={'/messages'}>
                <FaCalendarAlt color="white" size={24} />
            </Link>
            <Link to={'/search'}>
                <FaSearch color="white" size={24} />
            </Link>
          </div>
        </header>
  );
};

export default Header;