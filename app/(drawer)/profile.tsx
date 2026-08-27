import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Container from '@/shared/components/Container';
import SectionCard from '@/shared/components/SectionCard';
import useTranslation from '@/shared/hooks/useTranslation';
import useAuthStore from '@/store/authStore';

const PLACEHOLDER_USER = { name: 'John Doe', email: 'john.doe@example.com' };

export default function Profile() {
  const { t } = useTranslation();
  // Falls back to a placeholder so the screen renders before anyone signs in.
  const user = useAuthStore((state) => state.user) ?? PLACEHOLDER_USER;

  return (
    <Container>
      <VStack space="xl">
        <Heading size="2xl">{t('profile.title')}</Heading>

        <VStack className="items-center" space="xs">
          <Avatar className="h-16 w-16">
            <AvatarFallbackText>{user.name}</AvatarFallbackText>
          </Avatar>
          <Heading size="md">{user.name}</Heading>
          <Text className="text-muted-foreground" size="sm">
            {user.email}
          </Text>
        </VStack>

        <VStack space="md">
          <SectionCard body={t('profile.personalInfoBody')} title={t('profile.personalInfo')} />
          <SectionCard body={t('profile.preferencesBody')} title={t('profile.preferences')} />
          <SectionCard body={t('profile.activityBody')} title={t('profile.activity')} />
        </VStack>
      </VStack>
    </Container>
  );
}
