import React from "react";

export default function EmployeeList({ employees, setEmployees, setEditing, filters }) {
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(filters.search.toLowerCase()) &&
    (!filters.gender || emp.gender === filters.gender) &&
    (!filters.status || emp.active.toString() === filters.status)
  );

  const remove = (id) => {
    if (window.confirm("Delete employee?")) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(emp => (
          <tr key={emp.id}>
            <td>{emp.image && <img src={emp.image} alt="" />}</td>
            <td>{emp.name}</td>
            <td>{emp.gender}</td>
            <td>{emp.dob}</td>
            <td>{emp.state}</td>
            <td>{emp.active ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => setEditing(emp)}>Edit</button>
              <button onClick={() => remove(emp.id)}>Delete</button>
              <button onClick={() => window.print()}>Print</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
