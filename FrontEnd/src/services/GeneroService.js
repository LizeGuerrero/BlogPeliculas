const API_URL = "http://localhost:5000/admin/generos"; // URL base para la API de géneros

// Función para obtener todos los géneros
export const getGenres = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

// Función para agregar un nuevo género
export const addGenre = async (genre) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(genre),
    });
    return await response.json();
};

// Función para actualizar un género
export const updateGenre = async (id, genre) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(genre),
    });
    return await response.json();
};

// Función para eliminar un género
export const deleteGenre = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};
