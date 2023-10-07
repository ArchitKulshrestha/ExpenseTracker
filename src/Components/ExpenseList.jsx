/* eslint-disable react/prop-types */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  Tfoot,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
const ExpenseList = ({ expenses, OnDelete }) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <TableContainer marginY={4}>
        <Table variant="simple">
          <TableCaption>Expense Tracker</TableCaption>
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Amount</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses.map((expense) => (
              <Tr key={expense.id}>
                <Td>{expense.description}</Td>
                <Td>₹{expense.amount}</Td>
                <Td>{expense.category}</Td>
                <Td>
                  <IconButton
                    colorScheme="teal"
                    aria-label="Call Segun"
                    size="sm"
                    onClick={() => OnDelete(expense.id)}
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>Total</Td>
              <Td>
                ₹{expenses.reduce((acc, expense) => expense.amount + acc, 0)}
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExpenseList;
