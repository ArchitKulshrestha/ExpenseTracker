/* eslint-disable react/prop-types */
import { Select } from "@chakra-ui/react";
import Categories from "./categories";
const ExpenseFilter = ({ onSelectCategory }) => {
  return (
    <>
      <Select
        marginTop={4}
        placeholder="Select option"
        onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {Categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ExpenseFilter;
