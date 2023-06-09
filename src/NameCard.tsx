import React from 'react';
import randomColor from 'randomcolor';

interface NameCardProps {
  length: number;
  names: string[];
  onClick: () => void;
}

const NameCard: React.FC<NameCardProps> = ({ length, names, onClick }) => {
  const cardColor = randomColor();

  const renderCards = () => {
    return (
      <div
        style={{ backgroundColor: randomColor(), padding: '24px' }}
        className={`p-6 bg-${cardColor} rounded-lg cursor-pointer`}
        onClick={() => onClick(length)}
      >
        <h2 className="text-2xl font-bold text-white mb-2">{length}</h2>
      </div>
    );
  };
  return <div className="container mx-auto p-4">{renderCards()}</div>;
};

export default NameCard;
