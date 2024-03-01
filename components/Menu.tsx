import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        List Books
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Add new Book
      </a>
      <a href="/add/:id" class={selected === "List" ? "selected" : ""}>
        Info book
      </a>
    </div>
  );
};

export default Menu;