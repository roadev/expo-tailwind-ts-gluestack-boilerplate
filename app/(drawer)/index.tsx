import { useRouter } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Container from '@/shared/components/Container';
import useTranslation from '@/shared/hooks/useTranslation';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Container>
      <VStack className="flex-1 justify-center" space="xl">
        <VStack space="sm">
          <Heading size="3xl">{t('home.title', { appName: t('common.appName') })}</Heading>
          <Text className="text-muted-foreground">{t('home.subtitle')}</Text>
        </VStack>

        <VStack space="md">
          <Button onPress={() => router.push('/profile')} size="lg">
            <ButtonText>{t('home.goToProfile')}</ButtonText>
          </Button>
          <Button onPress={() => router.push('/settings')} size="lg" variant="secondary">
            <ButtonText>{t('home.goToSettings')}</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}
