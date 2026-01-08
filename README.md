# Mini app Challenge - Lista de productos

## Instalación y ejecución

```
# Clonar el repositorio
git clone https://github.com/AnthonyMh-100/Mini-App-Challenge.git

# Ejecutar comando para instalar dependencias
npm install

# Ejecutar la aplicacion
npm run dev
```

## .env para la aplicacion

```
VITE_API_URL="https://dummyjson.com/products"
```

Se desarrollo una mini app para lista los productos desde API con los siguiente :

- Implementación de paginación para listar los productos.
- Implementación de un buscador para encontrar el producto deseado.
- Implementación de una vista los productos favoritos.
- Implementación de una vista para ver los detalles de un producto.

## Decisiones técnicas

- Se implemento un custom hook **useProducts** para encapsular el consumo de la API y para separar responsabilidades y sea reutilizable.
- Se implemento un custom hook **useDebounce** para retrasar la ejecución de llamadas a la API.
- Se implementaron varios componentes para armar la estructura de la aplicación y separar responsabilidades y lógica.
- Se utilizo un archivo de constantes para centralizar textos o valores que la aplicación vaya a necesitar.

## Recursos usados

- React/Vite
- Styled Components : https://styled-components.com/docs
- React Router : https://reactrouter.com/home
- Se utilizo la API **https://dummyjson.com/docs/** por su simplicidad para obtener, paginar y buscar los datos de los recursos
