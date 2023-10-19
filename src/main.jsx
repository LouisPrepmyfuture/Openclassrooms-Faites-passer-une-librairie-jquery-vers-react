import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import employerReducer from './redux-employer'
import { Provider } from 'react-redux'
import App from './App.jsx'
import "./index.css"
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
	reducer: {
		enployers: employerReducer,
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
			<ThemeProvider>
				<Provider store={store} >
					<App/>
				</Provider>
			</ThemeProvider>
  </React.StrictMode>,
)
