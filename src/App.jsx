import { Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import MenuForm from './pages/MenuForm';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import { MenuContextProvider } from './context/MenuProvider';

function App() {
	return (
		<MenuContextProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<MenuPage />} />
				<Route path="/new" element={<MenuForm />} />
				<Route path="/edit/:id" element={<MenuForm />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</MenuContextProvider>
	);
}

export default App;
