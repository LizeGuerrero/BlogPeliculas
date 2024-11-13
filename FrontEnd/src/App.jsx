import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
    getPeliculas,
    addPelicula,
    updatePelicula,
    deletePelicula,
} from "./services/PeliculaService";
import "./app.css";

function App() {
    const [peliculas, setPeliculas] = useState([]);
    const [form, setForm] = useState({
        titulo: "",
        duracion: "",
        sinopsis: "",
        director_id: "",
        generos: [],
        fecha_lanzamiento: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadPeliculas();
    }, []);

    const loadPeliculas = async () => {
        const data = await getPeliculas();
        setPeliculas(data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updatePelicula(editingId, form);
            Swal.fire(
                "Actualizado",
                "Película actualizada con éxito",
                "success"
            );
            setEditingId(null);
        } else {
            await addPelicula(form);
            Swal.fire("Agregado", "Película agregada con éxito", "success");
        }
        setForm({
            titulo: "",
            duracion: "",
            sinopsis: "",
            director_id: "",
            generos: [],
            fecha_lanzamiento: "",
        });
        loadPeliculas();
    };

    const handleEdit = (pelicula) => {
        setForm(pelicula);
        setEditingId(pelicula._id);
        Swal.fire("Modo de edición", `Editando: ${pelicula.titulo}`, "info");
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (result.isConfirmed) {
            await deletePelicula(id);
            Swal.fire("Eliminado", "La película ha sido eliminada.", "success");
            loadPeliculas();
        }
    };

    return (
        <div className="container">
            <h1>Gestión de Películas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="titulo"
                    placeholder="Título"
                    value={form.titulo}
                    onChange={handleChange}
                />
                <input
                    name="duracion"
                    placeholder="Duración (minutos)"
                    value={form.duracion}
                    onChange={handleChange}
                />
                <input
                    name="sinopsis"
                    placeholder="Sinopsis"
                    value={form.sinopsis}
                    onChange={handleChange}
                />
                <input
                    name="director_id"
                    placeholder="ID del Director"
                    value={form.director_id}
                    onChange={handleChange}
                />
                <input
                    name="generos"
                    placeholder="IDs de Géneros (separados por coma)"
                    value={form.generos}
                    onChange={(e) =>
                        setForm({ ...form, generos: e.target.value.split(",") })
                    }
                />
                <input
                    type="date"
                    name="fecha_lanzamiento"
                    placeholder="Fecha de Lanzamiento"
                    value={
                        form.fecha_lanzamiento
                            ? form.fecha_lanzamiento.slice(0, 10)
                            : ""
                    }
                    onChange={handleChange}
                />
                <button type="submit">
                    {editingId ? "Actualizar" : "Agregar"}
                </button>
            </form>

            <div className="items">
                {peliculas.map((pelicula) => (
                    <div key={pelicula._id} className="item">
                        <span>
                            <strong>{pelicula.titulo}</strong> -{" "}
                            {pelicula.sinopsis} ({pelicula.fecha_lanzamiento})
                        </span>
                        <div className="item-buttons">
                            <button
                                className="edit-btn"
                                onClick={() => handleEdit(pelicula)}
                            >
                                Editar
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(pelicula._id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
