import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Container from '@/shared/components/Container';
import type { TranslationKey } from '@/shared/i18n';
import SectionCard from '@/shared/components/SectionCard';
import useColorMode from '@/shared/hooks/useColorMode';
import useTranslation from '@/shared/hooks/useTranslation';
import type { ColorMode } from '@/store/uiStore';

interface ThemeOption {
  value: ColorMode;
  labelKey: TranslationKey;
}

const MODES: ThemeOption[] = [
  { value: 'light', labelKey: 'settings.theme.light' },
  { value: 'dark', labelKey: 'settings.theme.dark' },
  { value: 'system', labelKey: 'settings.theme.system' },
];

export default function Settings() {
  const { t } = useTranslation();
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Container>
      <VStack space="xl">
        <Heading size="2xl">{t('settings.title')}</Heading>

        <VStack space="md">
          <Card className="bg-secondary">
            <VStack space="md">
              <VStack space="xs">
                <Heading className="text-secondary-foreground" size="sm">
                  {t('settings.appearance')}
                </Heading>
                <Text className="text-muted-foreground" size="sm">
                  {t('settings.appearanceBody')}
                </Text>
              </VStack>
              <HStack space="sm">
                {MODES.map((mode) => (
                  <Button
                    key={mode.value}
                    onPress={() => setColorMode(mode.value)}
                    size="sm"
                    variant={colorMode === mode.value ? 'default' : 'outline'}>
                    <ButtonText>{t(mode.labelKey)}</ButtonText>
                  </Button>
                ))}
              </HStack>
            </VStack>
          </Card>

          <SectionCard body={t('settings.accountBody')} title={t('settings.account')} />
          <SectionCard body={t('settings.notificationsBody')} title={t('settings.notifications')} />
          <SectionCard body={t('settings.privacyBody')} title={t('settings.privacy')} />
          <SectionCard body={t('settings.aboutBody')} title={t('settings.about')} />
        </VStack>
      </VStack>
    </Container>
  );
}
