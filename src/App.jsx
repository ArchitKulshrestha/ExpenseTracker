import "./App.css";
import ExpenseList from "./Components/ExpenseList.jsx";
import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter.jsx";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ExpenseForm from "./Components/ExpenseForm.jsx";
import Colormode from "./Components/Colormode";
import { useEffect } from "react";
// import Categories from "./Components/categories";
function App() {
  const Array = [];
  const [expenses, setExpenses] = useState(Array);
  const [setectedCategory, setSelectedcategory] = useState("");
  useEffect(() => {
    if (expenses.length === 0) {
      return;
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    if (expenses) {
      setExpenses(expenses);
    }
  }, []);

  const visebleExpenses = setectedCategory
    ? expenses.filter((e) => e.category === setectedCategory)
    : expenses;

  return (
    <>
      <Container maxW={900}>
        <Flex alignItems={"center"} justifyContent={"space-between"} my={7}>
          <Heading as="h1" size="xl" textAlign="center">
            Expense Tracker
          </Heading>
          <Colormode />
        </Flex>

        <ExpenseForm
          onSubmit={(e) => {
            e.preventDefault();
            const enteredDescription = e.target[0].value;
            const enteredAmount = parseInt(e.target[1].value);
            const enteredCategory = e.target[2].value;
            const expenseData = {
              description: enteredDescription,
              amount: enteredAmount,
              category: enteredCategory,
            };

            setExpenses([
              ...expenses,
              { ...expenseData, id: expenses.length + 1 },
            ]);
          }}
        />
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedcategory(category)}
        />
        <ExpenseList
          expenses={visebleExpenses}
          OnDelete={(id) => {
            setExpenses(expenses.filter((expense) => expense.id !== id));
            localStorage.setItem(
              "expenses",
              JSON.stringify(expenses.filter((expense) => expense.id !== id))
            );
          }}
        />
      </Container>
    </>
  );
}

export default App;
