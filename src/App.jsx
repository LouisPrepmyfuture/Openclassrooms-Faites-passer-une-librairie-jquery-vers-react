import { Routes, Route, BrowserRouter } from "react-router-dom";
import FormCreateEmployer from "./pages/FormCreateEmployer";
import TableEmployer from "./pages/TableEmployer";
import   {ModalProvider} from "modal-js-react"
// import {ModalProvider} from "./compenants/modal/src/ModalContext"

function App() {
  return (
    <div className="container flex flex-col items-center ">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormCreateEmployer />} />
            <Route path="/employer" element={<TableEmployer />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}
export default App;
