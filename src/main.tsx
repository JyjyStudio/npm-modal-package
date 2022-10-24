import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Employees from './pages/Employees'
import NotFount from './pages/404'
import GlobalStyle from './utils/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/list" element={<Employees />} />
					<Route path="*" element={<NotFount />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
