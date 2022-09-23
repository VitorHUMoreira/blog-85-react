import axios from "axios";
import { useState } from "react";

function CreateUserForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/users/create", form);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={form.username}
        required
        onChange={handleChange}
      />

      <label>E-mail</label>
      <input
        type="email"
        name="email"
        value={form.email}
        required
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default CreateUserForm;
