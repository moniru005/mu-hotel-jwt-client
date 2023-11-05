import { FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50 bg-gray-200">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>&copy; Copyright 2023- 
            <Link to="/"><span className='font-medium px-1'>Murn Inn</span></Link>
            by Muresources Network</li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4 text-xl">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Pinterest"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaPinterest></FaPinterest>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
            >
              <FaGoogle></FaGoogle>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
