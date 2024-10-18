import { useMenus } from '../context/MenuProvider';
import { useNavigate } from 'react-router-dom';

function MenuCard({ menu }) {
	const { deleteMenu, toggleChangeStatus } = useMenus();
	const navigate = useNavigate();

	const handleStatus = async (menuDone) => {
		await toggleChangeStatus(menu.id);
	};

	return (
		<div>
			<h2>{menu.title}</h2>
			<p>{menu.description}</p>
			<span>{menu.status == 1 ? 'Terminado' : 'Iniciado'}</span>
			<span>{menu.createAt}</span>
			<button onClick={() => deleteMenu(menu.id)}>Eliminar</button>
			<button onClick={() => navigate(`/edit/${menu.id}`)}>Editar</button>
			<button onClick={() => handleStatus(menu.status)}>Status</button>
		</div>
	);
}

export default MenuCard;
