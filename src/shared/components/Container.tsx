import type { ReactNode } from 'react';
import { Box } from '@/components/ui/box';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { ScrollView } from '@/components/ui/scroll-view';

interface ContainerProps {
  children: ReactNode;
  /** Wraps the content in a ScrollView. Turn off for screens that own scrolling. */
  scrollable?: boolean;
  /** Adds the top safe-area inset. Screens under a header already have one. */
  safeArea?: boolean;
  className?: string;
}

/**
 * The single layout wrapper every screen uses, so padding, background and
 * safe-area handling stay identical across the app.
 */
export default function Container({
  children,
  scrollable = true,
  safeArea = false,
  className = '',
}: ContainerProps) {
  const content = <Box className={`flex-1 p-6 ${className}`}>{children}</Box>;
  const body = scrollable ? (
    <ScrollView contentContainerClassName="grow" keyboardShouldPersistTaps="handled">
      {content}
    </ScrollView>
  ) : (
    content
  );

  if (!safeArea) {
    return <Box className="flex-1 bg-background">{body}</Box>;
  }

  return <SafeAreaView className="flex-1 bg-background">{body}</SafeAreaView>;
}
