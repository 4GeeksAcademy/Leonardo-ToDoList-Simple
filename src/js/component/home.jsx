import React, { useState } from "react";
import Campo from "./Campo";

const Home = () => {
	const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas
	const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para la tarea que se va a agregar

	// Función para manejar el cambio en el input
	const handleChange = (event) => setNuevaTarea(event.target.value);

	// Agrega la tarea al presionar Enter
	const handleKeyPress = (event) => {
		if (event.key === "Enter" && nuevaTarea.trim()) {
			setTareas([...tareas, nuevaTarea.trim()]);
			setNuevaTarea("");
		}
	};

	// Elimina una tarea
	const eliminarTarea = (index) => {
		setTareas(tareas.filter((_, i) => i !== index));
	};

	return (
		<div className="container mt-5">
			<h1 id="Titulo" className="text-center">Lista de Tareas de Leo</h1>
			{/* imput para añadir tareas */}
			<input
				id="Field"
				type="text"
				className="form-control mb-3"
				placeholder="Añadir una tarea..."
				value={nuevaTarea}
				onChange={handleChange}
				onKeyPress={handleKeyPress}
			 />
			 {/* Lista donde se imprimen las tareas */}
			<div id="Lista" >
				{tareas.length === 0 ? (
					<p>No hay tareas, añadir tareas</p>
				) : (
					tareas.map((tarea, index) => (
						<Campo key={index} tarea={tarea} eliminar={() => eliminarTarea(index)} />
					))
				)}
			</div>
		</div>
	);
};

export default Home;
