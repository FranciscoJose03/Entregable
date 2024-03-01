import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import BookList from "../components/BookList.tsx";
import { Books } from "../types.ts";
import BookModel from "../db/Books.ts";

type Data = {
  books: Array<Books>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const books = await BookModel.find();
    return ctx.render({ books });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <BookList
      books={props.data.books}
    />
  );
}