import React, { useEffect, useState } from "react";

import Navbar from "../components/NavBar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Filters from "../components/Filters";
import { getEmployees, saveEmployees } from "../utils/storage";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [filters, setFilters] = useState({ search: "", gender: "", status: "" });

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const updateEmployees = (data) => {
    setEmployees(data);
    saveEmployees(data);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Total Employees: {employees.length}</h2>
        <EmployeeForm
          employees={employees}
          setEmployees={updateEmployees}
          editing={editing}
          setEditing={setEditing}
        />
        <Filters setFilters={setFilters} />
        <EmployeeList
          employees={employees}
          setEmployees={updateEmployees}
          setEditing={setEditing}
          filters={filters}
        />
      </div>
    </>
  );
}
