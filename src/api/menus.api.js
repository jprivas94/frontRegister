import axios from 'axios';

export const getMenusRequest = async () => {
	try {
		const response = await axios.get('http://localhost:4000/menus');
		return response;
	} catch (error) {
		console.error('Error en:', error);
		throw error;
	}
};

export const createMenuRequest = async (menu) => {
	await axios.post('http://localhost:4000/menus', menu);
};

export const deleteMenuRequest = async (id) => {
	const response = await axios.delete(`http://localhost:4000/menus/${id}`);
	return response;
};

export const getMenuRequest = async (id) => {
	const response = axios.get(`http://localhost:4000/menus/${id}`);
	return response;
};

export const updateMenuRequest = (id, newFields) => {
	const response = axios.put(`http://localhost:4000/menus/${id}`, newFields);
	return response;
};

export const toggleChangeStatusRequest = async (id, status) => {
	const response = axios.put(`http://localhost:4000/menus/${id}`, {
		status,
	});
	return response;
};
