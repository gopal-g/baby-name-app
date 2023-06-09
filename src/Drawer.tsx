// Drawer.tsx

import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  selectedNames: string[];
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, selectedNames }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? 'ease-out' : 'ease-in'
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`fixed inset-0 transition-opacity ${
            isOpen
              ? 'ease-out duration-300 opacity-100'
              : 'ease-in duration-200 opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className={`hidden sm:inline-block sm:align-middle sm:h-screen`}
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isOpen
              ? 'ease-out duration-300 translate-x-0'
              : 'ease-in duration-200 translate-x-full'
          }`}
        >
          <div className="px-4 py-4 sm:px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Names</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 10L16.293 6.293a1 1 0 0 0-1.414-1.414L11 8.586 7.293 4.293a1 1 0 1 0-1.414 1.414L9.586 10l-3.707 3.707a1 1 0 0 0 1.414 1.414L11 11.414l3.707 3.707a1 1 0 0 0 1.414-1.414L12.586 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              {selectedNames.map((name, index) => (
                <p key={index}>{name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
