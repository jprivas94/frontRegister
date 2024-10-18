import { Form, Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { useMenus } from '../context/MenuProvider';
import { useEffect, useState } from 'react';

function MenuForm() {
	const { createMenu, getMenu, updateMenu } = useMenus();
	const [menu, setMenu] = useState({
		title: '',
		description: '',
	});
	const params = useParams();
	const navigate = useNavigate();
	console.log(params);

	useEffect(() => {
		const loadMenu = async () => {
			if (params.id) {
				const menu = await getMenu(params.id);
				setMenu({
					title: menu.title,
					description: menu.description,
				});
			}
		};

		loadMenu();
	}, []);

	return (
		<div>
			<h1>{params.id ? 'Editar' : 'Crear'}</h1>
			<Formik
				initialValues={menu}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					console.log(values);

					if (params.id) {
						await updateMenu(params.id, values);
						navigate('/');
					} else {
						await createMenu(values);
						navigate('/');
					}
					setMenu({
						title: '',
						description: '',
					});
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<label>Titulo</label>
						<input
							type="text"
							name="title"
							placeholder="Escribir titulo"
							onChange={handleChange}
							value={values.title}
						/>

						<label>Descripcion</label>
						<textarea
							name="description"
							rows="3"
							placeholder="Escribir Descripcion"
							onChange={handleChange}
							value={values.description}
						></textarea>

						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Guardando . . . ' : 'Guardado'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default MenuForm;
