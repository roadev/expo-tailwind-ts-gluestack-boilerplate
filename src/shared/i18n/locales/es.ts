import type { Localized } from '@/shared/i18n/types';
import type en from './en';

const es: Localized<typeof en> = {
  common: {
    appName: 'MyApp',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    retry: 'Reintentar',
    loading: 'Cargando…',
  },
  nav: {
    home: 'Inicio',
    profile: 'Perfil',
    settings: 'Ajustes',
  },
  home: {
    title: 'Bienvenido a {appName}',
    subtitle: 'Expo Router + NativeWind + gluestack-ui, listos para usar.',
    goToProfile: 'Ir al perfil',
    goToSettings: 'Ir a ajustes',
    itemCount: '{count} elemento{s}',
  },
  profile: {
    title: 'Perfil',
    personalInfo: 'Información personal',
    personalInfoBody: 'Actualiza tus datos personales y de contacto.',
    preferences: 'Preferencias',
    preferencesBody: 'Personaliza tu experiencia en la app.',
    activity: 'Actividad',
    activityBody: 'Consulta tu historial y estadísticas.',
  },
  settings: {
    title: 'Ajustes',
    account: 'Cuenta',
    accountBody: 'Administra las preferencias y la seguridad de tu cuenta.',
    notifications: 'Notificaciones',
    notificationsBody: 'Configura cómo y cuándo recibes notificaciones.',
    privacy: 'Privacidad',
    privacyBody: 'Controla tu privacidad y el uso de tus datos.',
    appearance: 'Apariencia',
    appearanceBody: 'Cambia entre tema claro, oscuro o del sistema.',
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema',
    },
    about: 'Acerca de',
    aboutBody: 'Versión e información de la app.',
  },
  errors: {
    network: 'No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.',
    unauthorized: 'Tu sesión expiró. Inicia sesión de nuevo.',
    unexpected: 'Algo salió mal. Inténtalo de nuevo.',
  },
};

export default es;
