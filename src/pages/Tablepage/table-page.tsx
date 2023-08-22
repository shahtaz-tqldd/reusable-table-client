import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { columns } from "./components/column";
import { DataTable } from "./components/data-table";

const TablePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data
    axios.get("http://localhost:5000/users")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-slate-200 p-10 rounded-xl m-4 lg:w-[1200px] shadow">
      <DataTable data={userData} columns={columns} />
    </div>
  );
};

export default TablePage;
