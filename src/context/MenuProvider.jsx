import { createContext, useContext, useState } from 'react';
import {
	getMenusRequest,
	deleteMenuRequest,
	createMenuRequest,
	getMenuRequest,
	updateMenuRequest,
	toggleChangeStatusRequest,
} from '../api/menus.api';
import { MenuContext } from './MenuContext';

export const useMenus = () => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error('sdadsa');
	}
	return context;
};

export const MenuContextProvider = ({ children }) => {
	const [menus, setMenus] = useState([]);

	async function loadMenus() {
		const response = await getMenusRequest();
		setMenus(response.data);
	}

	const deleteMenu = async (id) => {
		try {
			const response = await deleteMenuRequest(id);
			setMenus(menus.filter((menu) => menu.id !== id));
		} catch (error) {
			console.error(error);
		}
	};
	const createMenu = async (menu) => {
		try {
			const response = await createMenuRequest(menu);
			// setMenus([... menus, response.data]) // por si no cargan los datos
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const getMenu = async (id) => {
		try {
			const response = await getMenuRequest(id);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const updateMenu = async (id, newFields) => {
		try {
			const response = await updateMenuRequest(id, newFields);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleChangeStatus = async (id) => {
		try {
			const menuFound = menus.find((menu) => menu.id === id);
			await toggleChangeStatusRequest(id, menuFound.status === 0 ? true : false);
			setMenus(menus.map((menu) => (menu.id === id ? { ...menu, status: !menu.status } : menu)));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MenuContext.Provider value={{ menus, loadMenus, deleteMenu, createMenu, getMenu, updateMenu, toggleChangeStatus }}>
			{children}
		</MenuContext.Provider>
	);
};
