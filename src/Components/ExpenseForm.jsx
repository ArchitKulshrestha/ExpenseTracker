/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  Box,
} from "@chakra-ui/react";

import Categories from "./categories";
import { useRef } from "react";

const ExpenseForm = ({ onSubmit }) => {
  const decRef = useRef();
  const amtRef = useRef();
  const catRef = useRef();

  return (
    <form
      onSubmit={(data) => {
        onSubmit(data);
      }}>
      <FormControl mt={4}>
        <Box my={3}>
          <FormLabel>Description</FormLabel>
          <Input ref={decRef} type="text" />
        </Box>

        <Box my={4}>
          <FormLabel>Amount</FormLabel>
          <NumberInput ref={amtRef}>
            <NumberInputField />
          </NumberInput>
        </Box>

        <Box my={4}>
          <FormLabel>Category</FormLabel>
          <Select ref={catRef} placeholder="Select category">
            {Categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>

        <Button mt={4} colorScheme="teal" size="sm" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default ExpenseForm;

// (e) => {
//   e.preventDefault();
//   const enteredDescription = decRef.current.value;
//   const enteredAmount = amtRef.current.value;
//   const enteredCategory = catRef.current.value;
//   const expenseData = {
//     description: enteredDescription,
//     amount: enteredAmount,
//     category: enteredCategory,
//   };
//   console.log(expenseData);
// }
