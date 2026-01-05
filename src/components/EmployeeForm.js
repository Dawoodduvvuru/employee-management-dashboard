import React, { useEffect, useState } from "react";

export default function EmployeeForm({ employees, setEmployees, editing, setEditing }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.gender) return alert("Validation failed");

    let data;
    if (editing) {
      data = employees.map(emp => emp.id === form.id ? form : emp);
    } else {
      data = [...employees, { ...form, id: Date.now() }];
    }

    setEmployees(data);
    setForm({ name: "", gender: "", dob: "", state: "", active: true, image: "" });
    setEditing(null);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>{editing ? "Edit" : "Add"} Employee</h3>
      <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} />
      <select value={form.state} onChange={e => setForm({ ...form, state: e.target.value })}>
        <option value="">State</option>
        <option>AndraPradesh</option>
        <option>Telangana</option>
        <option>Karnataka</option>
        <option>kerala</option>
        <option>TamilNadu</option>
        <option>Maharastra</option>
        <option>Delhi</option>
        
      </select>
      <input type="file" onChange={handleImage} />
      {form.image && <img src={form.image} alt="preview" className="preview" />}
      <label>
        <input type="checkbox" checked={form.active} onChange={e => setForm({ ...form, active: e.target.checked })} />
        Active
      </label>
      <button>Save</button>
    </form>
  );
}
