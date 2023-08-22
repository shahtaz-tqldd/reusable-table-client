import { columns } from "./components/column"
import { DataTable } from "./components/data-table"
// import { tasks } from "./data/tasks"
import { userdata } from "./data/users"

const TaskPage = ()=> {
  return (
    <div className="bg-slate-200 p-10 rounded-xl m-4 lg:w-[1200px] shadow">
      <DataTable data={userdata} columns={columns} />
    </div>
  )
}

export default TaskPage
