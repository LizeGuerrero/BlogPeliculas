import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que App esté correctamente importado
import './index.css'; // Si tienes estilos globales, de lo contrario, puedes omitir esta línea

// Crear la raíz de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del contenedor root
root.render(
  <React.StrictMode>
    <App />  {/* Aquí es donde se cargará todo el contenido de tu aplicación */}
  </React.StrictMode>
);
