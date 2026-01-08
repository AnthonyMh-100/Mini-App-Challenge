export const API_URL = import.meta.env.VITE_API_URL;
export const DEBOUNCE_DELAY = 3000;
export const DEFAULT_PAGE = 1;
export const KEY_PRODUCTS_FAVORITES = "favorites";
export const LIMIT = 12;
export const MESSAGES = {
  ADD_FAVORITE: "Agregar a favoritos",
  NO_PRODUCTS_FOUND: "No se encontraron productos!",
  NO_FAVORITE_PRODUCTS: "No tienes productos favoritos. ¡Agrega algunos!",
  REMOVE_FAVORITE: "Quitar de favoritos",
};
export const TEXT_LOADING = "Cargando...";

export default {
  API_URL,
  DEBOUNCE_DELAY,
  DEFAULT_PAGE,
  KEY_PRODUCTS_FAVORITES,
  LIMIT,
  MESSAGES,
  TEXT_LOADING,
};
