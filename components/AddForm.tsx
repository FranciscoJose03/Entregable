import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add new Book</h1>
      <input type="text" name="title" placeholder="Title" /><br />
      <input type="text" name="author" placeholder="Author" /> <br/>
      <input type="text" name="content" placeholder="Content" /><br/>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;