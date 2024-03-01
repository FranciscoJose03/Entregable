import { FunctionComponent } from "preact";
import { Books } from "../types.ts";

const BookList: FunctionComponent<{ books: Books[] }> = (
  { books },
) => {
  return (
    <div class="bookList">
      <h1>Libraty list</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`/add/${book.id}`}>
              <h3>{book.title}:</h3>
              <i><p>{book.author}</p></i>
              <p>{book.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;