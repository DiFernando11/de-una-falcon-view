export const ROUTES_CLIENT = {
  HOME: '/',
  FAVORITES: '/favorites',
  LAUNCH_DETAIL: (id: string = ':id') => `/launch/${id}`,
};
