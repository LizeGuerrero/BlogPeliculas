// Crear la URL base de la API
const API_URL = "http://localhost:5000/admin/peliculas"; // Asegúrate de que esta URL coincida con la de tu servidor Express

// Función para obtener todas las películas
export const getPeliculas = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener las películas");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener películas:", error); // Aquí puedes ver el error en la consola
    throw error;
  }
};

// Función para obtener una película por ID
export const getPeliculaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener la película");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener la película:", error); // Aquí puedes ver el error en la consola
    throw error;
  }
};

// Función para agregar una nueva película
export const addPelicula = async (pelicula) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pelicula),
    });
    if (!response.ok) {
      throw new Error("Error al agregar la película");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al agregar la película:", error);
    throw error;
  }
};

// Función para actualizar una película existente
export const updatePelicula = async (id, pelicula) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pelicula),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la película");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar la película:", error);
    throw error;
  }
};

export const deletePelicula = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Error al eliminar la película");
      }
  
      // Verificar si hay contenido en la respuesta antes de intentar convertirlo a JSON
      if (response.status === 204) {
        // Código 204 indica que la eliminación fue exitosa, pero no hay contenido
        return; // No necesitas hacer `await response.json()` aquí
      }
  
      // Si hay contenido, entonces procesar el JSON
      return await response.json();
    } catch (error) {
      console.error("Error al eliminar la película:", error);
      throw error;
    }
  };
  
