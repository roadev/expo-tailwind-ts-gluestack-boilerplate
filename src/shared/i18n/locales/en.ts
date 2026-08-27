const en = {
  common: {
    appName: 'MyApp',
    cancel: 'Cancel',
    confirm: 'Confirm',
    retry: 'Retry',
    loading: 'Loading…',
  },
  nav: {
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
  },
  home: {
    title: 'Welcome to {appName}',
    subtitle: 'Expo Router + NativeWind + gluestack-ui, wired up and ready.',
    goToProfile: 'Go to Profile',
    goToSettings: 'Go to Settings',
    itemCount: '{count} item{s}',
  },
  profile: {
    title: 'Profile',
    personalInfo: 'Personal information',
    personalInfoBody: 'Update your personal details and contact information.',
    preferences: 'Preferences',
    preferencesBody: 'Customize your app experience and preferences.',
    activity: 'Activity',
    activityBody: 'View your activity history and statistics.',
  },
  settings: {
    title: 'Settings',
    account: 'Account',
    accountBody: 'Manage your account preferences and security settings.',
    notifications: 'Notifications',
    notificationsBody: 'Configure how and when you receive notifications.',
    privacy: 'Privacy',
    privacyBody: 'Control your privacy and data sharing preferences.',
    appearance: 'Appearance',
    appearanceBody: 'Switch between light, dark and system themes.',
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    about: 'About',
    aboutBody: 'App version and information.',
  },
  errors: {
    network: 'We could not reach the server. Check your connection and try again.',
    unauthorized: 'Your session expired. Please sign in again.',
    unexpected: 'Something went wrong. Please try again.',
  },
} as const;

export default en;
