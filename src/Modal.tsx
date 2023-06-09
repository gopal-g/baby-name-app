import React from 'react';

interface ModalProps {
  selectedNames: string[];
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedNames, closeModal }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
    <div className="w-4/6 bg-white rounded p-4">
      <h2 className="text-lg font-bold mb-2">Names with Selected Length</h2>
      <div className="p-8 rounded z-10w-full overflow-y-auto h-64">
        {selectedNames.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
);

export default Modal;
// @emotion/react @emotion/styled framer-motion
