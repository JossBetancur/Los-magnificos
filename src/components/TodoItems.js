import React, { Fragment } from "react";

const TodoItems = props => {
	const {
		onChange,
		data: { id, description, done }
	} = props;

		return (
			<Fragment>
				<li className="task_item" id={id}>
					<p className="task_titulo">{description}</p>
					<button className="btn_eliminar">
						<img className="icono_eliminar" src="https://static.thenounproject.com/png/4416481-200.png" alt="Eliminar" />
					</button>
				</li>
			</Fragment>
		);
	};

	export default TodoItems;