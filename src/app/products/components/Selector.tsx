import React from 'react';

type SelectorProps = {
    setCategory: (category: string) => void;
    uniqueCategories: string[];
}

export const Selector = ({setCategory, uniqueCategories }:SelectorProps) => {
  return (
    <select
      onClick={(e) => setCategory((e.target as HTMLSelectElement).value)}
      className="border border-gray-200 rounded-md p-2 "
      name="category"
      id="category"
    >
      <option value="">All</option>
      {uniqueCategories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
