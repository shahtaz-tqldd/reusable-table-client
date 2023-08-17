import { userdata } from "./components/data/tabledata"
// import { columns } from "./components/table/columns"
// import { data } from "./components/data/data"
// import { columns } from "./components/table/newColumns"
import { TableView } from "./pages/TableView/TableView"

// import TableView from "./pages/TableView/TableView"

function App() {
  return (
    <div className="flex justify-center min-h-screen w-screen bg-purple-100">
      {/* <TableView columns={columns} data={userdata} /> */}
      <TableView data={userdata} />
    </div>
  )
}

export default App
