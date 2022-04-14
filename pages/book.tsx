import { Box } from "@chakra-ui/layout";
import { BookForm } from "../components/Book/BookForm/bookForm";
import { BookConfirm } from "../components/Book/BookConfirm/bookConfirm";

const Book = () => {
  return (
    <Box>
      <BookForm />
      <BookConfirm />
    </Box>
  );
};

export default Book;
