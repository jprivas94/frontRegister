import { useEffect } from 'react';
import MenuCard from '../components/MenuCard';
import { useMenus } from '../context/MenuProvider';

function MenuPage() {
	const { menus, loadMenus } = useMenus();

	console.log(menus);

	useEffect(() => {
		loadMenus();
	}, []);

	function renderMain() {
		if (menus.length === 0) return <h1>No menus aun </h1>;

		return menus.map((menu) => <MenuCard menu={menu} key={menu.id} />);
	}

	return (
		<div>
			<h1>Menus</h1>
			{renderMain()}
		</div>
	);
}

export default MenuPage;
