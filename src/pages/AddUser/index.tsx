import { useAddDataMutation } from "../../features/apiSlice";

export const AddDataComponent: React.FC = () => {
  const [addData] = useAddDataMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const email = formData.get("email") as string;
    addData({ name, surname, email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add User</h3>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="surname" placeholder="surname" />
      <input type="text" name="email" placeholder="email" />
      <input type="number" name="age" placeholder="age" />
      <button type="submit">Add Data</button>
    </form>
  );
};
