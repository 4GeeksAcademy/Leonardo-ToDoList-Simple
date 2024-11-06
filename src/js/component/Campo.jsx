import React from "react";

const Campo = ({ tarea, eliminar }) => {
	return (
		<div className="tarea-container d-flex justify-content-between align-items-center border-bottom py-2">
			<span>{tarea}</span>{/*funcion escribir la tarea en pantalla */}
			<button className="btn btn-sm btn-danger eliminar-btn" onClick={eliminar}>
            <i class="fa fa-trash" aria-hidden="true"></i>
			 </button>{/*funcion para eliminar la tarea */}
		</div>
	);
};

export default Campo;