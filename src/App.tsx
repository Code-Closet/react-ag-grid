import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";
import DataTable from "./components/table/DataTable";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(true);
  return (
    <div className="App">
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <DataTable />
    </div>
  );
}

export default App;
