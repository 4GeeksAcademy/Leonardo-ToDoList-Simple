import React from "react";
import Campo from "./Campo"


//create your first component
const Home = () => {
	return (
		
		<div className="container mt-5">
			<div className="row">
				<div id="Lista" className="col-9 text-center mb-5 mt-5">
					<h1>Lista de Tareas</h1>
					<Campo tarea="Prueba 1 2 3" />
					<Campo tarea="Prueba 4 5 6" />
					<Campo tarea="Prueba 7 8 9" />
					<Campo tarea="Prueba 10 11 12" />
					<Campo tarea="Prueba 10 11 12" />
				</div>
			</div>
		</div>
	);
};

export default Home;
