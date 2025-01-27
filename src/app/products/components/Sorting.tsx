import React from 'react';

type SortingProps = {
  handleOnPriceSoring: (order: 'asc' | 'dsc') => void;
};

export const Sorting = ({ handleOnPriceSoring }: SortingProps) => {
  return (
    <div className="sorting-container">
      <p className="text-sm font-medium">Sort by price:</p>
      <button
        className="text-lg p-2 rounded-md bg-blue-100 hover:bg-blue-200"
        onClick={() => handleOnPriceSoring('asc')}
      >
        ⬆️
      </button>
      <button
        className="text-lg p-2 rounded-md bg-blue-100 hover:bg-blue-200"
        onClick={() => handleOnPriceSoring('dsc')}
      >
        ⬇️
      </button>
    </div>
  );
};
