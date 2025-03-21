import { Link } from "react-router-dom";

function ButtonGroup({ noPath, yesPath }) {
  return (
    <div className="flex justify-center space-x-4">
      <Link to={yesPath}>
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
          <svg
            width="20"
            height="20"
            className="mr-2"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
          </svg>
          그렇다
        </button>
      </Link>

      <Link to={noPath}>
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-32 transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
          <svg
            width="20"
            height="20"
            className="mr-2"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
          </svg>
          아니다
        </button>
      </Link>

    </div>
  );
}

export default ButtonGroup;