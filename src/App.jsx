import { Routes, Route, BrowserRouter} from 'react-router-dom';
import FormCreateEmployer from './pages/FormCreateEmployer';
import  ListEmployer  from './pages/ListEmployer';
function App() {


  return (
		<div className="container flex flex-col items-center my-8">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FormCreateEmployer />}/>
					<Route path="/employer" element={<ListEmployer />}/>
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App
