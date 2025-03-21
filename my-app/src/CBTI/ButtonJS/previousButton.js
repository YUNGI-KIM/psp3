import { Link } from "react-router-dom";

function PreviousButton({ undoPath, NextPath }) {
  return (
    <div className="flex justify-center space-x-4">
      <Link to={undoPath}>
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-gray-400 hover:bg-gray-900 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </button>
      </Link>

      <Link to={NextPath}>
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-gray-400 hover:bg-gray-900 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default PreviousButton;