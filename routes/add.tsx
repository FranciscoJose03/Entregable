import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../components/AddForm.tsx";
import BookModel from "../db/Books.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const today = new Date()
      const fechaarr = today.toString().split(" ", 4)
      const fecha = fechaarr[2] + " " + fechaarr[1];
      const form = await req.formData();
      const data = {
        title: form.get("title"),
        author: form.get("author"),
        content: form.get("content"),
        date: fecha
      };

      await BookModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;