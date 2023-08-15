import { userdata } from "./components/data/tabledata"
import { columns } from "./components/table/columns"
import TableView from "./pages/TableView/TableView"

function App() {
  return (
    <div className="flex justify-center min-h-screen w-screen bg-purple-100">
      <TableView columns={columns} data={userdata}/>
    </div>
  )
}

export default App
