const lightColors = {
  primary: {
    25: '#F8FAFF',
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  secondary: {
    25: '#FAFAFF',
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
    950: '#2E1065',
  },
  accent: {
    25: '#F0FDFA',
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
    950: '#042F2E',
  },
  success: {
    25: '#F7FEF9',
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  warning: {
    25: '#FFFCF5',
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },
  error: {
    25: '#FFFBFA',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
  neutral: {
    0: '#FFFFFF',
    25: '#FCFCFD',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  background: '#FFFFFF',
  surface: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#64748B',
  textTertiary: '#94A3B8',
  divider: '#E2E8F0',
  overlay: 'rgba(15, 23, 42, 0.6)',
};

const darkColors = {
  primary: {
    25: '#172554',
    50: '#172554',
    100: '#1E3A8A',
    200: '#1E40AF',
    300: '#1D4ED8',
    400: '#2563EB',
    500: '#3B82F6',
    600: '#60A5FA',
    700: '#93C5FD',
    800: '#BFDBFE',
    900: '#DBEAFE',
    950: '#EFF6FF',
  },
  secondary: {
    25: '#2E1065',
    50: '#2E1065',
    100: '#4C1D95',
    200: '#5B21B6',
    300: '#6D28D9',
    400: '#7C3AED',
    500: '#8B5CF6',
    600: '#A78BFA',
    700: '#C4B5FD',
    800: '#DDD6FE',
    900: '#EDE9FE',
    950: '#F5F3FF',
  },
  accent: {
    25: '#042F2E',
    50: '#042F2E',
    100: '#134E4A',
    200: '#115E59',
    300: '#0F766E',
    400: '#0D9488',
    500: '#14B8A6',
    600: '#2DD4BF',
    700: '#5EEAD4',
    800: '#99F6E4',
    900: '#CCFBF1',
    950: '#F0FDFA',
  },
  success: {
    25: '#052E16',
    50: '#052E16',
    100: '#14532D',
    200: '#166534',
    300: '#15803D',
    400: '#16A34A',
    500: '#22C55E',
    600: '#4ADE80',
    700: '#86EFAC',
    800: '#BBF7D0',
    900: '#DCFCE7',
    950: '#F0FDF4',
  },
  warning: {
    25: '#451A03',
    50: '#451A03',
    100: '#78350F',
    200: '#92400E',
    300: '#B45309',
    400: '#D97706',
    500: '#F59E0B',
    600: '#FBBF24',
    700: '#FCD34D',
    800: '#FDE68A',
    900: '#FEF3C7',
    950: '#FFFBEB',
  },
  error: {
    25: '#450A0A',
    50: '#450A0A',
    100: '#7F1D1D',
    200: '#991B1B',
    300: '#B91C1C',
    400: '#DC2626',
    500: '#EF4444',
    600: '#F87171',
    700: '#FCA5A5',
    800: '#FECACA',
    900: '#FEE2E2',
    950: '#FEF2F2',
  },
  neutral: {
    0: '#000000',
    25: '#020617',
    50: '#020617',
    100: '#0F172A',
    200: '#1E293B',
    300: '#334155',
    400: '#475569',
    500: '#64748B',
    600: '#94A3B8',
    700: '#CBD5E1',
    800: '#E2E8F0',
    900: '#F1F5F9',
    950: '#F8FAFC',
  },
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  textTertiary: '#64748B',
  divider: '#334155',
  overlay: 'rgba(0, 0, 0, 0.8)',
};

export const Colors = {
  ...lightColors,
  dark: darkColors,
};

export function getThemeColors(isDarkMode: boolean) {
  return isDarkMode ? darkColors : lightColors;
}