import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

interface SectionCardProps {
  title: string;
  body: string;
}

/** Titled block of copy — the repeating unit on the Profile and Settings screens. */
export default function SectionCard({ title, body }: SectionCardProps) {
  return (
    <Card className="bg-secondary">
      <VStack space="xs">
        <Heading className="text-secondary-foreground" size="sm">
          {title}
        </Heading>
        <Text className="text-muted-foreground" size="sm">
          {body}
        </Text>
      </VStack>
    </Card>
  );
}
