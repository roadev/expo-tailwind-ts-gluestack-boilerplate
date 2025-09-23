import { SafeAreaView, View } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
}

export const Container = ({ children, style, safeArea = true }: ContainerProps) => {
  const containerStyle = {
    ...styles.container,
    ...style,
  };

  if (safeArea) {
    return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
  }

  return <View style={containerStyle}>{children}</View>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  } as ViewStyle,
};
